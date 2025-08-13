import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
   const [disabled, setDisabled] = useState(true);
   const {handleSignIn} = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  useEffect(() =>{
    loadCaptchaEnginge(6);
  },[])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    handleSignIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);  
    });
    Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
  }

 
  const handleValidateCaptcha = (e) =>{
    const user_captcha_value = e.target.value;
    if(validateCaptcha(user_captcha_value)) {
         setDisabled(false);
     }
  }


  return (
   <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
             
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input onBlur={handleValidateCaptcha} type="text"  name="captcha" className="input" placeholder="type the capture" />
              <button  className="btn btn-outline"> validate Captcha</button>
              <input disabled={disabled} type="submit" className="btn btn-neutral mt-4" value="Login"/>
            </fieldset>
          </form>
          <p><small>New here ? <Link to="/signup">Create an account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;