import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-semibold">Welcome to E-Market!</h1>
                <h1 className="text-3xl font-semibold mt-2">Please login.</h1>

                <p className="py-6">New member? <Link to='/signup' className='text-blue-500'>Register</Link> here.</p>
            </div>
            <div className="card flex-shrink-0 w-full md:w-[700px] max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-primary py-3 text-lg rounded">Login</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;