import React from 'react';

export function Coffee({coffee}) {

    // display coffee data here
    return <>
        <div className={coffee.isArabica ? 'arabica' : ''}>{coffee.name}</div>
    </>
};