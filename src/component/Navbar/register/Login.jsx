import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userinfo = {
      email:data.email,
      password:data.password
    }
  await axios.post("http://localhost:8001/user/login",userinfo)
    .then((res)=>{
       console.log(res.data)
       if(res.data){
        toast.success("Login is a successfully")
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{
        
          window.location.reload()
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        }, 2000)
       
       }
   
    }).catch((err)=>{
    console.log(err.response,'error is signup')
    setTimeout(()=>{
      toast.error("Error :" +err.response.data.msg)

    }, 3000)
    })
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)} // handleSubmit use kiya
          >
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup">
                  <span className="underline text-blue-500 cursor-pointer">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </form>
          {/* Close Modal Button */}
          <button
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm absolute right-2 top-2"
          >
            ✕
          </button>
        </div>
      </dialog>
      {/* Open Modal Button */}
     
    </div>
  );
};

export default Login;
