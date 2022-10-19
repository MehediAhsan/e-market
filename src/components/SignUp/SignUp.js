import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        if(password.length<6){
            setError('Password should be 6 character');
            return;
        }
        setError('')

        createUser(email,password)
        .then( result => { 
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode,errorMessage);
          });
    }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-semibold">Welcome to E-Market!</h1>
                <h1 className="text-3xl font-semibold mt-2">Please Signup.</h1>

                <p className="py-6">Already Register? <Link to='/login' className='text-blue-500'>Login</Link> here.</p>
            </div>
            <div className="card flex-shrink-0 w-full md:w-[700px] max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label" htmlFor='name'>
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='email'>
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='password'>
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-primary py-3 text-lg rounded">Signup</button>
                    </div>
                </form>
                <p className='text-red-600'>{error}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;