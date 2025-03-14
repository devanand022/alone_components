import React from 'react';

type LoaderVariant = 'primaryLoader' | 'dotLoader' | 'lineLoader' | 'none';

interface LoaderProps {
  variant: LoaderVariant;
}

const Loader = (props: LoaderProps) => {
  const { variant } = props;

  if (variant === 'dotLoader') {
    return (
      <section className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    );
  }

  if (variant === 'lineLoader') {
    return <div className="loader"></div>;
  }
  return (
    <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export type { LoaderProps };
export default Loader;
