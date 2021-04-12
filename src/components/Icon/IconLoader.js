import React, { memo, useState, useEffect, useRef } from 'react';

const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="currentColor"
  >
    <text x="10" y="10">
      Loading...
    </text>
  </svg>
);

const IconLoader = ({ name, size = 'initial', title: _title, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const title = _title || name;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const [named, at12, at16, at28] = await Promise.allSettled([
          import(
            `!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}.svg`
          ),
          import(
            `!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}-12.svg`
          ),
          import(
            `!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}-16.svg`
          ),
          import(
            `!!@svgr/webpack?-svgo,+memo,+titleProp,+ref!./svgs/${name}-28.svg`
          ),
        ]).then(values =>
          values.map(v => (v.status === 'fulfilled' ? v : null)),
        );

        const weighted = {
          initial: named,
          12: at12 || at16 || at28 || named,
          16: at16 || at28 || named || at12,
          28: at28 || named || at16 || at12,
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

    return <ImportedIcon title={title} {...rest} />;
  }
  
  return <Loader />;
};

export default memo(IconLoader);
