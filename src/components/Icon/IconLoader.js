import React, { useState, useEffect, useRef } from 'react';

const IconLoader = ({ name, size = 'initial', ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const [named, at12, at16, at24] = await Promise.allSettled([
          import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}.svg`),
          import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}-12.svg`),
          import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}-16.svg`),
          import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}-24.svg`),
        ])
          .then(values =>
            values.map(v => (v.status === 'fulfilled' ? v : null)),
          )
          .catch(error => {
            // all good man
            console.log(error);
          });

        const weighted = {
          initial: named,
          12: at12 || at24 || at16 || named,
          16: at16 || at24 || named || at12,
          24: at24 || named || at16 || at12,
        };

        ImportedIconRef.current = weighted?.[size]?.value?.default;
      } catch (error) {
        console.log('error', error);
        //throw error;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, size]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default IconLoader;
