import React from 'react';

const Footer = ({ position }) => {
    let positionStyle;
    if (position == "absolute") {
        positionStyle = position + " bottom-0"
    }
    return (
        <div className={positionStyle + ' flex justify-center items-center h-[200px] w-full bg-3 mt-8 font-bold text-[white]'}>
            <p>Soundex © zubayer</p>
        </div>
    );
};

export default Footer;