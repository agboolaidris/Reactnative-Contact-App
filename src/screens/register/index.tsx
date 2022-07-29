import React, { useState } from "react";
import axiosInstance from "../../helpers/axiosIntance";
import RegisterComponent from "../../ui/compounds/register";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    //validate first name
    if (name === "firstName") {
      if (value.length < 1)
        setErrors((prev) => ({ ...prev, firstName: "First name is required" }));
      else setErrors((prev) => ({ ...prev, firstName: "" }));
    }

    //validate last name
    if (name === "lastName") {
      if (value.length < 1)
        setErrors((prev) => ({
          ...prev,
          lastName: "Last name is required",
        }));
      else setErrors((prev) => ({ ...prev, lastName: "" }));
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

    if (form.firstName.length < 1)
      setErrors((prev) => ({ ...prev, firstName: "First name is required" }));

    //validate last name

    if (form.lastName.length < 1)
      setErrors((prev) => ({
        ...prev,
        lastName: "Last name is required",
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
      Object.values(form).filter((value) => value.trim().length > 0).length < 1;

    if (validateForm) return;

    axiosInstance
      .post("/auth/register", { ...form })
      .catch((err) => console.log("err", err));
  };
  return (
    <RegisterComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      values={form}
    />
  );
};

export default Register;
