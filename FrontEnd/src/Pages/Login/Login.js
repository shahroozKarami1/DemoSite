import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Componnents/Footer/Footer";
import Button from "../../Componnents/Button/Button";
import Input from "../../Componnents/Form/Input";
import Navbar from "../../Componnents/NavBar/NavBar";
import { useForm } from "../../hooks/useForm";
import authContext from "../../Componnents/context/authContext";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";

import {
  requiredValidator,
  maxValidator,
  minValidator,
  emailValidator,
} from "../../Componnents/inputValidator/rules";

import "./Login.css";

export default function Login() {
  let authContextLogin = useContext(authContext);
  let  [isGoogleRecaptchaVarify   ,  setIsGoogleRecaptchaVarify]  =  useState(false)
  let Navigate = useNavigate();
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const userLogin = (event) => {
    event.preventDefault();

    let loginuserinfo = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginuserinfo),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((err) => {
            throw new Error(err);
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        swal({
          title: "ورود  موفقیت آمیز  بود  :)",
          icon: "success",
          buttons: "ورود به پنل ",
        }).then((value) => {
          Navigate("/");
        });

        authContextLogin.login({}, data.accessToken);
      })
      .catch((err) => {
        swal({
          title: "اطلاعاتی یافت  نشد  :(",
          icon: "error",
          buttons: "بستن",
        });
      });
  };


  const onChangeCodeCapcha   =  ()  => {
    setIsGoogleRecaptchaVarify (true)
  
  }

  return (
    <>
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/regester">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element="input"
                validations={[requiredValidator(), emailValidator()]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                id="password"
                type="password"
                className="login-form__password-input"
                placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>


            <ReCAPTCHA    className="login-form__recapcha" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChangeCodeCapcha} />,

            <Button
              className={`login-form__btn ${
                (formState.isFormValid    && isGoogleRecaptchaVarify )
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={(!formState.isFormValid  ||   !isGoogleRecaptchaVarify)}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
