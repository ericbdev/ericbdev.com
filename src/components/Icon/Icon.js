import React from 'react';
import IconLoader from './IconLoader';
import { ErrorBoundary } from 'react-error-boundary';

const Icon = ({ name, size }) => {
  return (
    <div>
      <ErrorBoundary>
        <IconLoader name={name} size={size} />
      </ErrorBoundary>
    </div>
  );
};

export default Icon;
