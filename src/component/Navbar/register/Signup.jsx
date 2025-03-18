import React from "react";
import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Signup = () => {
  const navigate =useNavigate()
const location =useLocation()
const from=location.state?.from?.pathname || "/"
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        const userinfo = {
          fullname:data.fullname,
          email:data.email,
          password:data.password
        }
      await axios.post("http://localhost:8001/user",userinfo)
        .then((res)=>{
           console.log(res.data)
           if(res.data){
            toast.success("signup is successfully");
   navigate(from,{replace:true})
          }
           localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
        console.log(err.response,'error is signup')
        toast.error("Error :" +err.response.data.msg)
        })
       
      };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box border-[2px] shodow-md p-10 rounded-[20px]">
          <form  onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
         
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("fullname", { required: "Name is required" })} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })} />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered? {""}
              <button>
                <span className="underline text-blue-500 cursor-pointer" onClick={()=>{
                    document.getElementById("my_modal_3").showModal()
                }}>
                  {" "}
                  
                  Login{" "}
                </span>
              </button>
              <Login />
            </p>
            
          </div>
          </form>
          

        </div>
        
      </div>
    </>
  );
};

export default Signup;
