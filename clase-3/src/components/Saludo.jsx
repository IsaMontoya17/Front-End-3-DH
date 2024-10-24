import React from 'react';

const Saludo = ({ nombre, children }) => {
    return (
        <>
            {children} {nombre}, como estas?
        </>
    );
};

export default Saludo;
