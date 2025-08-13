import { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signup() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(authContext);
  const navigate = useNavigate()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log("User created:", result.user);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User profile updated");
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Signup successful",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => console.error("Profile update error:", err));
      })
      .catch((err) => {
        console.error("Signup error:", err);
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: err.message,
        });
        
      });
      navigate('/');
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">

                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && <span className="text-red-600">{errors.name.message}</span>}

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  {...register("photoURL", { required: "Photo URL is required" })}
                  className="input"
                  placeholder="Photo URL"
                />
                {errors.photoURL && <span className="text-red-600">{errors.photoURL.message}</span>}

                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}

                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                    maxLength: { value: 20, message: "Maximum 20 characters" },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                      message: "Must include uppercase, lowercase, number & special char",
                    },
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}

                <div><a className="link link-hover">Forgot password?</a></div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
              </fieldset>
            </form>
            <p>
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
