import React from 'react';

const MainButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white hover:from-pink-500 hover:to-yellow-500 hover:border-0">{children}</button>
    );
};

export default MainButton;