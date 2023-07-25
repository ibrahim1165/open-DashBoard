import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../sherd/Loader';
import auth from './../../firebase.init';
const CreatedAccount = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors}, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loader />;
  }

  if (error || gUser || updateError) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
  }
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    // await updateProfile({ displayName: data.name });
    console.log('update done');
    console.log(data);
    navigate('/home');
  }
  return (

      <div>

        <h2 className="text-center text-3xl font-bold mt-16">Sing in Our laptop House Website😍</h2>


        <div className='flex justify-center items-center mt-10'>
          <div className=" flex card lg:w-[50%] w-96 bg-base-300 shadow-xl ">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)} >

               <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto lg:px-8 justify-center'>
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: 'Name is Required'
                      }
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
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
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    type="phone"
                    placeholder="Your Phone Number"
                    className="input input-bordered w-full max-w-xs"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: 'Phone number is Required'
                      },
                    })}
                  />
                  <label className="label">
                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                    {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
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
                  />
                  <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>
                </div>
               </div>

                {signInError}
                <div className="text-center mt-5">
                <input className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full max-w-xs text-white' type="submit" value="Sign Up" />
                <p><small className='mt-3'>Already have an account? <Link className='text-primary' to="/">Please login</Link></small></p>
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

export default CreatedAccount