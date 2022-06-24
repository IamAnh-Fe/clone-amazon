import React from 'react'
import PropTypes from 'prop-types'
import { BsFillPersonFill, BsFillFileLockFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';

const Login = (props) => {
   const schema = yup.object({
     email: yup.string().required('Please enter Email.').email('Please enter a valid email address.'),
     password: yup.string()
     .required('Please enter your Password.')
    .min(6, 'Password must be at least 6 characters'),
    retypePassword: yup.string()
    .required('Please retype your Password.')
    .oneOf([yup.ref('password')], 'Password does not match')
   });
    const { register, handleSubmit, formState: {errors}} = useForm({
          resolver: yupResolver(schema)
    });

  const handleSubmitValues = (values) => {
    const {onSubmit} = props;
    if (onSubmit){
      onSubmit(values);
    }
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="login">
          <div className="login-form">
            <div className="login-title">Sign In</div>
            <form onSubmit={handleSubmit(handleSubmitValues)}>
              <div className="login-input">
         <input {...register("email")} type="text" placeholder="Email or Phone"/>
          <ErrorMessage errors={errors} name="email" />
      
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p>{message}</p>}
      />
      
                <div className="login-icon">
                  <i>
                    <BsFillPersonFill />
                  </i>
                </div>
              </div>
              <div className="login-input">
                <div className="login-icon">
                  <i>
                    <BsFillFileLockFill />
                  </i>
                </div>
                <input {...register("password")} type="password" placeholder="Password"  />
                <ErrorMessage errors={errors} name="password" />
              </div>

                <div className="login-input">
                <div className="login-icon">
                  <i>
                    <BsFillFileLockFill />
                  </i>
                </div>
                <input {...register("retypePassword")} type="password" placeholder="Re-Type Password"  />
                <ErrorMessage errors={errors} name="retypePassword" />
              </div>
              <div className="login-option">
                <div className="login-remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div className="login-forget">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div className="login-button">
                <input type="submit" value="Login" />
              </div>
              <div className="login-signup">
                Not a member? <a href="#">Sign up now</a>
              </div>
            </form>
            <div className="login-social">
              <a href="#">
                {" "}
                <span>Facebook</span>
              </a>
              <a href="#">
                <span>Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  onSubmit: PropTypes.func,
}

export default Login;