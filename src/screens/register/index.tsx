import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Route } from "../../constants/route";
import axiosInstance from "../../helpers/axiosIntance";
import { useGlobalDispatch, useGlobalState } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
///import { authInitialState } from "../../store/reducers/auth";
import RegisterComponent from "../../ui/compounds/register";

const Register = () => {
  const { authInitialState } = useGlobalState();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useGlobalDispatch();
  const { navigate }: any = useNavigation();
  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    //validate first name
    if (name === "firstname") {
      if (value.length < 1)
        setErrors((prev) => ({ ...prev, firstname: "First name is required" }));
      else setErrors((prev) => ({ ...prev, firstname: "" }));
    }

    //validate last name
    if (name === "lastname") {
      if (value.length < 1)
        setErrors((prev) => ({
          ...prev,
          lastname: "Last name is required",
        }));
      else setErrors((prev) => ({ ...prev, lastname: "" }));
    }

    //validate email
    if (name === "email") {
      if (value.length < 1)
        setErrors((prev) => ({
          ...prev,
          email: "email is required",
        }));
      else setErrors((prev) => ({ ...prev, email: "" }));
    }

    //validate password
    if (name === "password") {
      if (value.length < 1)
        setErrors((prev) => ({
          ...prev,
          password: "password is required",
        }));
      else if (value.length < 6)
        setErrors((prev) => ({
          ...prev,
          password: "password length most be greater than 5 digits",
        }));
      else setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSubmit = () => {
    //validate first name

    if (form.firstname.length < 1)
      setErrors((prev) => ({ ...prev, firstname: "First name is required" }));

    //validate last name

    if (form.lastname.length < 1)
      setErrors((prev) => ({
        ...prev,
        lastname: "Last name is required",
      }));

    //validate email
    if (form.email.length < 1)
      setErrors((prev) => ({
        ...prev,
        email: "email is required",
      }));

    //validate password
    if (form.password.length < 1)
      setErrors((prev) => ({
        ...prev,
        password: "password is required",
      }));

    const validateForm =
      Object.values(form).filter((value) => value.trim().length > 0).length > 0;

    if (!validateForm) return;

    dispatch({
      type: AUTHTYPE.IS_LOADING,
      payload: {},
    });

    axiosInstance
      .post("/auth/register", { ...form })
      .then((res) => {
        dispatch({ type: AUTHTYPE.REGISTER, payload: {} });
        navigate(Route.Login);
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data);
        dispatch({
          type: AUTHTYPE.AUTH_ERROR,
          payload: {},
        });
      });
  };
  return (
    <RegisterComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      values={form}
      loading={authInitialState.isloading}
    />
  );
};

export default Register;
