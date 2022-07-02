import React from 'react';

const ListItem = ({ country }) => {

    return (
        <>
            <div className='item'>
                <img className='flag-image' src={country.flags.png} alt={country.name.common} />
                <h2 className='homepage-h2'>{country.name.common}</h2>
            </div>
        </>
    )
}

export default ListItem;