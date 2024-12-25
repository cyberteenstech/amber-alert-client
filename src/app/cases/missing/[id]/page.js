import Details from '@/components/case/Details';
import React from 'react';
import Navbar from "@/components/shared/Navbar";

const DetailCase = ({params}) => {
    return (
        <div>
            <Navbar/>
            <Details id={params.id}/>
        </div>
    );
};

export default DetailCase;