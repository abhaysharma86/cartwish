import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import profile from "../../assets/user.png";
import "./LoginPage.css";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter valid email address." })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

const LoginPage = () => {
  //   const passwordRef = useRef(null);

  const [profilePic, setProfilePic] = useState(null);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  // console.log(formState.errors);

  //   const [user, setUser] = useState({
  //     name: "",
  //     phone: "",
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(user);
  //   };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="align_center user_profile">
          <img
            src={profilePic ? URL.createObjectURL(profilePic) : profile}
            alt=""
          />
        </div>
        <h2>Login From</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Name</label>
            <input
              type="email"
              id="email"
              //   value={user.name}
              className="form_text_input"
              placeholder="Enter your email"
              //   onChange={(e) => setUser({ ...user, name: e.target.value })}
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Phone Number</label>
            <input
              //   ref={passwordRef}
              type="password"
              id="password"
              className="form_text_input"
              //   value={user.phone}
              placeholder="Enter your password"
              //   onChange={(e) =>
              //     setUser({ ...user, phone: parseInt(e.target.value) })
              //   }
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
            {/* <button type="button" onClick={() => passwordRef.current.type = "password"}>Hide Password</button>
            <button type="button" onClick={() => passwordRef.current.type = "text"}>show Password</button> */}
          </div>
          <div className="user_pic">
            <label htmlFor="profile" className="input_pic_label">
              Choose your profile pic
            </label>
            <input
              type="file"
              id="profile"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
