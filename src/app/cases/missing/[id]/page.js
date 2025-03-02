"use client"
import { useParams } from 'next/navigation';
import Details from '@/components/case/Details';
import React from 'react';
import Navbar from '@/components/shared/Navbar';

const DetailCase = () => {
    const params = useParams(); // Get the dynamic parameters from the URL

    return (
        <div>
            <Navbar />
            <Details id={params.id} />
        </div>
    );
};

export default DetailCase;
