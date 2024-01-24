import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { styles } from './DashboardLayout.css';

import { DashboardSidebar } from '../DashboardSidebar/DashboardSidebar';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';

export const DashboardLayout = () => {

    return (
        <div className='dashboard'>
            <DashboardSidebar />
            <main>
                <DashboardHeader />
                <div className="dashboard-content">
                    <Outlet />
                </div>
                <div className="dashboard-footer">
                    <div className="copyright">
                        © 2023
                    </div>
                </div>
            </main>
        </div>
    )
}
