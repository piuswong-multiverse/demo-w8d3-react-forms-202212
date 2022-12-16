import React from 'react';

// Traditional functions are great for components!!
export default function Coffee({coffee}) {

    // display coffee data here
    return <>
        <div className={coffee.isArabica ? 'arabica' : ''}>{coffee.name}</div>
    </>
};