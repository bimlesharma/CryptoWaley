
import React from "react";

const BrandIcon = ({ icon, height }) => {
    return (
        <div className="mx-1 md:mx-3 lg:mx-5">
            <img src={icon} className={`h-auto ${height}`} alt="Brand Icon" />
        </div>
    );
};

export default BrandIcon;
