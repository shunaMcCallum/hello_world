import React, { useEffect, useState } from 'react';
import PaginationDetail from '../components/PaginationDetail.js';

function PaginationContainer() {


    return (
        <div>
            <h4>I'm the pagination container!</h4>
            <PaginationDetail />
        </div>
    );
};

export default PaginationContainer;