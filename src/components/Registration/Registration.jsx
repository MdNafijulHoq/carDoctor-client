import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

const Registration = () => {

    const [showPass, setShowPass] = useState(false)
    const {signUp, logOut} = useContext(AuthContext)
    const navigate = useNavigate();
  
    const handleRegistration= e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const registration = {name, email, password}
        console.log(registration)

        if(password.length < 6){
            Swal.fire({
                icon: "error",
                text: "Password Should Have atleast 6 Characters!",
              });
              return;
        }

        if(!/[A-Z]/.test(password)){
            Swal.fire({
                icon: "error",
                text: "Password Should Have atleast One Upper Case!",
              });
              return;
        }

        if(!/[a-z]/.test(password)){
            Swal.fire({
                icon: "error",
                text: "Password Should Have atleast One Upper Case!",
              });
              return;
        }

        signUp(email, password)
        .then(result => {
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Registered Successfully",
                showConfirmButton: false,
                timer: 1500
              });

            //   * Update profile
            updateProfile(auth.currentUser, {
                displayName: name,
            })

            // * after registration i dont want user logIn
            logOut();
            navigate('/login')
            
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
              });
        })
    }
    return (
        <div className="hero bg-base-200 p-8 rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-32">
          <div className="w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0">
            <form className="card-body" onSubmit={handleRegistration}>
            <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Sunny" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="sunny@gmail.com" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               
                <div className="relative">
                    <input
                      type={ showPass ? 'text' : 'password'}
                      name="password"
                      placeholder="******"
                      className="input input-bordered w-full pr-16" 
                      required
                    />
                    <p onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-sm text-blue-500">
                      {
                        showPass ? 'Hide' : 'Show'
                      }
                    </p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className='text-center space-y-3 mb-10'>
                 <p>Or Sign Up with</p>
                 <div>
                  <button><FaFacebook size={20} color='blue'/></button>
                  <button className='mr-4 ml-4'><FaLinkedinIn color='blue' size={20}/></button>
                  <button><FcGoogle size={20}/></button>
                 </div>
                 <p>Already an account? <Link to='/login' className='text-orange-500 font-semibold'>Login</Link></p>
              </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;