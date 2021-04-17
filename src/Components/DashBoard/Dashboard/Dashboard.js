import React, { useContext, useState } from 'react';
import './Dashboard.css';
import Admin from '../Admin/Admin';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard1 from './Dashboard1';
import { UserContext } from '../../../App';



const Dashboard = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <main className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 conditional-render">
                        <div className="d-flex justify-content-between addservice-header mt-5">
                            <h1>Add Service</h1>
                            {
                                user && <h3>Welcome {user.name}</h3>
                            }

                        </div>
                        <div className="addservice-form">
                            <Dashboard1 />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;