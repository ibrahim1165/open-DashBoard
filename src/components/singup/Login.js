import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../sherd/Loader';
import auth from './../../firebase.init';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    let form = location.state?.form?.pathname || "/home";
    if(user || gUser){
        navigate(form, { replace: true });
    }

    let signInError;
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
    if(loading || gLoading){
        return <Loader></Loader>;
    }
  return (
    <div>

    <h2 className="text-center text-3xl font-bold mt-20">Login Our laptop House Website😍</h2>


    <div className='flex justify-center items-center mt-8'>
      <div className=" flex card lg:w-[50%] w-96 bg-base-300 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} >

           <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto lg:px-8 justify-center lg:pl-28'>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  
                         {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input  
                        {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                            type="password"
                            placeholder="Enter Password"
                            className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
           </div>

            {signInError}
            <div className="text-center mt-5">
            <input className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full max-w-xs text-white' type="submit" value="Sign Up" />
            <p><small className='mt-3'>Create to account? <Link className='text-primary' to="/login">Create New Account</Link></small></p>
            </div>
            
          </form>
          <div className="text-center mt-2">
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
          >Continue with Google</button>
          </div>
         
          
        </div>
      </div>
    </div >
  </div>
  )
}

export default Login