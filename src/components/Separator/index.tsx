import React from 'react';

interface Props {
    className?: string;
    direction?: 'horizonal' | 'vertical';
    margin?: string;
    length?: string;
};

export const Separator:React.FC <Props> = ({ className, children }) => {
    return (
       <div className={className}>{children}</div>
    )
};
