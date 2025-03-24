import React from 'react';

const MyIntrests = ({title, description}) => {
    return (
        <div>
            <h2 className="text-xl mb-3 font-bold">{title}</h2>
            {description?.map((item, i) => <p key={i} className=" mb-1 text-sm font-semibold text-gray-400">{item}</p>)} 
            
        </div>
    );
};

export default MyIntrests;