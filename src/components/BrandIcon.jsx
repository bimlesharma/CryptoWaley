import React from "react";

const BrandIcon = ({ icon, height }) => {
    return (
        <div className="flex flex-col items-center mx-12 grayscal mix-blend-scree">
            <img src={icon} className={height} />
        </div>
    );
};

export default BrandIcon;