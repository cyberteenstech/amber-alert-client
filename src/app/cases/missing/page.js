import RecentMissing from '@/components/case/Missing';
import React from 'react';
import Navbar from "@/components/shared/Navbar";

const MissingCases = () => {
    return (
        <div>
            <Navbar/>
            <RecentMissing />
        </div>
    );
};

export default MissingCases;