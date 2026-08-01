import React from 'react';

const SummaryCard = ({ title, value}) => {
    return (
        <div>
            <div className = 'card bg-base-100 shadow-sm border border-base-200'>
                <div className = 'card-body items-center'>
                    
                    <p className = 'text-3xl font-bold'>{value}</p>
                    <h2 className = 'card-title'>{title}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;