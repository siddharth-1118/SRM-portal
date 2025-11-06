import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!email.endsWith('@srmist.edu.in')) {
            setError('Please use your SRMIST email address.');
            setIsLoading(false);
            return;
        }

        // Mock API call
        setTimeout(() => {
            if (email === 'test@srmist.edu.in' && password === 'password') {
                // In a real app, you'd get a token and set auth state
                navigate('/dashboard');
            } else {
                setError('Bad credentials. Please check your email and password.');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        Welcome to SRM Student Hub
                    </h1>
                     <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Sign in to your account
                    </p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <Input
                            id="email"
                            label="Your SRM Email"
                            type="email"
                            placeholder="raxxxxxx@srmist.edu.in"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            icon={<Mail className="w-5 h-5 text-gray-400" />}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            icon={<Lock className="w-5 h-5 text-gray-400" />}
                        />
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <Button type="submit" isLoading={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </Button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?{' '}
                            <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
