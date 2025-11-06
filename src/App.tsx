import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

function App() {
    // This would be replaced with actual authentication state
    const isAuthenticated = false; 

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route 
                path="/dashboard" 
                element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} 
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
