import React from 'react';

interface WrapperProps {
    children: React.ReactNode;
    customClass?: string; 
}

const InternalWrapper: React.FC<WrapperProps> = ({ children, customClass }) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto flex items-center ${customClass}`}>
            {children}
        </div>
    );
};

export default InternalWrapper;
