import React, { useState } from 'react';
import { useRef } from 'react';

const Login = () => {


    let refEmail = useRef();
    let refPassword = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted:");
        
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                ref={refEmail}
                                required
                                className="mt-1 w-full text-black px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Email..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                ref={refPassword}

                                required
                                className="mt-1 w-full text-black px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Password..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
