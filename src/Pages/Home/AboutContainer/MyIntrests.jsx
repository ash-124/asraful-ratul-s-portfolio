import React from 'react';

const MyIntrests = ({title, description}) => {
    return (
        <div>
            <h2 className="text-xl font-bold">{title}</h2>
            {description?.map((item, i) => <p key={i} className="mt-2 text-sm font-semibold text-gray-400">{item}</p>)} 
            
        </div>
    );
};

export default MyIntrests;