import React, { memo, useState, useEffect, useRef } from 'react';

const IconLoader = ({ name, size = 'initial', title, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        // https://react-svgr.com/docs/options/
        const [named, at12, at16, at24] = await Promise.allSettled([
          import(`!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}.svg`),
          import(`!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}-12.svg`),
          import(`!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}-16.svg`),
          import(`!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}-24.svg`),
        ]).then(values =>
          values.map(v => (v.status === 'fulfilled' ? v : null)),
        );

        const weighted = {
          initial: named,
          12: at12 || at16 || at24 || named,
          16: at16 || at24 || named || at12,
          24: at24 || named || at16 || at12,
        };

        ImportedIconRef.current =
          weighted?.[size]?.value?.default || weighted.initial?.value?.default;
      } catch (error) {
        console.error(`Unable to load icon - ${name} - ${size}`, error);
      } finally {
        setLoading(false);
      }
    })();
  }, [name, size]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon title={title || name} {...rest} />;
  }

  return null;
};

export default memo(IconLoader);
