import React from 'react'

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return (
        <div className='w-screen h-screen overflow-x-hidden '>
            {children}
        </div>
    )
}

export default Wrapper