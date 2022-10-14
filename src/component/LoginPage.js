import React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { login } from "../store/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="login-page bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">Login Now</h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-4">
                      <div className="col-12">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <AiOutlineUser />
                          </div>
                          <input
                            type="email"
                            value="test@test.com"
                            className="form-control"
                            placeholder="Enter Email"
                            {...register("email", { required: true })}
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      {errors.email && (
                        <span style={{ color: "red" }}>
                          Please enter your email!
                        </span>
                      )}

                      <div className="col-12">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <AiOutlineLock />
                          </div>
                          <input
                            type="password"
                            value="123456789"
                            className="form-control"
                            placeholder="Enter Password"
                            {...register("password", { required: true })}
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      {errors.password && (
                        <span style={{ color: "red" }}>
                          Please enter your password!
                        </span>
                      )}

                      <div className="col-sm-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineFormCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineFormCheck"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <a href="#" className="float-end text-primary">
                          Forgot Password?
                        </a>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary px-4 float-end mt-4"
                        >
                          login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 ps-0 d-none d-md-block">
                  <div className="form-right h-100 bg-primary text-white text-center pt-5">
                    <HiOutlineUserGroup fontSize={200} />
                    <h2 className="fs-1">Welcome Back!!!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
