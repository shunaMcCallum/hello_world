import React from 'react';

const ListItem = ({ country }) => {

    return (
        <>

            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>

        </>
    )
}

export default ListItem;