import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
    const navigate=useNavigate()
    const { createUser, setUser, updateUser } = use(AuthContext)

    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        // console.log({ name, email, photo, password });

        createUser(email, password)
            .then(result => {
                const user = result.user
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    })
            })
            .catch(error => {
                const errorMessage = error.message
                alert(errorMessage)
            })

    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleForm} className="card-body p-10">
                    <h1 className='text-2xl text-center font-bold'>Register your account</h1>
                    <hr className="border-gray-300 mt-4 w-[95%] mx-auto" />
                    <fieldset className="fieldset py-5 space-y-2">
                        <label className="label font-bold">Your Name</label>
                        <input type="text" name="name" id="" placeholder='Enter your name' className='input bg-base-200' required />

                        <label className="label font-bold">Photo Url</label>
                        <input type="url" name="photo" id="" className="input bg-base-200" placeholder='Enter url' required />

                        <label className="label font-bold">Email Address</label>
                        <input name='email' type="email" className="input bg-base-200" placeholder="Enter your email address" required />

                        <label className="label font-bold">Password</label>
                        <input name='password' type="password" className="input bg-base-200" placeholder="Enter your password" required />

                        <button type='submit' className="btn btn-primary mt-4">Register</button>
                        <h1 className='font-semibold py-2'>Already Have An Account ? <Link to='/auth/login' className='text-secondary'>Login</Link></h1>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Registration;