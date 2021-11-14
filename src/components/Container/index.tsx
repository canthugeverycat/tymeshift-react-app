import React from 'react';

interface Props {
    className?: string;
    direction?: string;
    padding?: string;
};

export const Container:React.FC <Props> = ({ className, children }) => {
    return (
       <div className={className}>{children}</div>
    )
};
