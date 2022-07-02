import React, { useEffect, useState } from 'react';
import PaginationDetail from '../components/PaginationDetail.js';

function PaginationContainer({country}) {


    return (
        <div>
            <h4>{country.name.common}</h4>
            <PaginationDetail country={country} />
        </div>
    );
};

export default PaginationContainer;