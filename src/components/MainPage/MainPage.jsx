import React from "react";
import Button from "../UI/Button/Button";
import classes from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const signupAuthHandler = () => {
    navigate("auth/signup");
  };
  const signinAuthHandler = () => {
    navigate("auth/signin");
  };

  return (
    <main className={classes.main}>
      <h1 className={classes["main-heading"]}>Welcome to 10X Real Estate</h1>
      <section className={classes.actions}>
        <Button className={classes["auth-btn"]} onClick={signupAuthHandler}>
          Sign Up
        </Button>
        <Button className={classes["auth-btn"]} onClick={signinAuthHandler}>
          Sign In
        </Button>
      </section>
    </main>
  );
};

export default MainPage;
