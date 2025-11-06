import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Welcome to the Dashboard!</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    This is a placeholder for your main application content.
                </p>
            </div>
        </div>
    );
};

export default DashboardPage;
