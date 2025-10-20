import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')
    const { logIn } = use(AuthContext)
    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);

        logIn(email, password).then(result => {
            const user = result.user
            navigate(location.state ? location.state : '/')
            // console.log(user);

        })
            .catch((error) => {
                // alert(error.message);
                setError(error.code)
            })

    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body p-10">
                    <h1 className='text-2xl text-center font-bold'>Login your account</h1>
                    <hr className="border-gray-300 mt-4 w-[95%] mx-auto" />
                    <fieldset className="fieldset py-5">
                        <label className="label font-bold">Email Address</label>
                        <input name='email' type="email" className="input bg-base-200" placeholder="Enter your email address" required />

                        <label className="label font-bold">Password</label>
                        <input name='password' type="password" className="input bg-base-200" placeholder="Enter your password" required />

                        <div className='mt-3'><a className="link link-hover font-semibold">Forgot password?</a></div>

                        {
                            error && <p className='text-red-700'>{error}</p>
                        }

                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                        <h1 className='font-semibold py-2'>Dont’t Have An Account ? <Link to='/auth/registration' className='text-secondary'>Register</Link></h1>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;