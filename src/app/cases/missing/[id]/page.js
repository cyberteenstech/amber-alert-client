import Details from '@/components/case/Details';
import React from 'react';

const DetailCase = ({params}) => {
    return (
        <div>
            <Details id={params.id}/>
        </div>
    );
};

export default DetailCase;