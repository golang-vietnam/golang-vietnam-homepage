import React from 'react';
import classnames from 'classnames';

export default function ShowAllButton({ children, className, ...rest }) {
  return (
    <button
      className={classnames(
        'text-gray-900 hover:text-primary hover:border-primary font-medium transition transition-all duration-200 border-b-2 border-gray-200 py-2 px-1 text-xl',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
