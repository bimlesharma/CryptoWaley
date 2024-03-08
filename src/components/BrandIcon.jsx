import React from "react";

const BrandIcon = ({ icon, height }) => {
    return (
        <div className="mx-10">
            <img src={icon} className={height} />
        </div>
    );
};

export default BrandIcon;