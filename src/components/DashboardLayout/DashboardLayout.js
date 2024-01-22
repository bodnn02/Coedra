import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { styles } from './DashboardLayout.css';

import { DashboardSidebar } from '../DashboardSidebar/DashboardSidebar';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';

export const DashboardLayout = () => {

    useEffect(() => {
        document.title = "Home Page";
    }, []);

    return (
        <div className='dashboard'>
            <DashboardSidebar />
            <main>
                <DashboardHeader />
                <div class="dashboard-content">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
