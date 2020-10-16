import React, { useState, useEffect, useRef } from 'react';

// todo: add warning not to be dumb about icons not existing
// todo: or catch error boundary or something
const Icon = ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const svgComponent = await import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}.svg`
        );
        ImportedIconRef.current = svgComponent?.default;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default Icon;
