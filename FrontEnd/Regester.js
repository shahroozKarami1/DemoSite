import React, { useReducer, useState   ,  useContext } from 'react'
import "./Regester.css"
import { Link } from 'react-router-dom'
import NavBar from '../../Componnents/NavBar/NavBar'
import Footer from '../../Componnents/Footer/Footer'
import Input from "../../Componnents/Form/Input"
import Button from '../../Componnents/Button/Button'
import  AuthContext  from "./src/Componnents/context/authContext"
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Componnents/inputValidator/rules";
import { useForm    } from '../../hooks/useForm'
export default function Regester() {
let  authContextInstance   =  useContext(AuthContext)




  let  [formState  , onInputHandler]  = useForm({

name :  {
  value  : "" ,  
  isValid  :  false
} ,  
username :  {
  value  : "" ,  
  isValid  :  false
} ,  
email :  {
  value  : "" ,  
  isValid  :  false
} ,  
phoneNumber :  {
  value  : "" ,  
  isValid  :  false
} ,  
password :  {
  value  : "" ,  
  isValid  :  false
} ,  
confirmPass :  {
  value  : "" ,  
  isValid  :  false
} ,  

  }  ,  false)

  function regesterUser(e) {
    e.preventDefault()
 let   regesterInformation  =  {

username  : formState.inputs.username.value     ,
email :  formState.inputs.email.value  , 
password  :  formState.inputs.password.value   , 
confirmPassword   :  formState.inputs.confirmPass.value    , 
name  :    formState.inputs.name.value , 
phone : formState.inputs.phoneNumber.value   ,  




 }

fetch ("http://localhost:4000/v1/auth/register"  , {
  method :  "POST"  , 
  headers :   {
    "Content-Type"  :  "application/json"
  } , 
  body :  JSON.stringify(regesterInformation)
}).then(res  =>  {
  console.log(res)
})
  }


  return (


    <>
      <NavBar></NavBar>

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div className="login__new-member">
            <span className="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__password">

              {
                <Input element={"input"} placeholder={" نام  "} type={"text"} className={"login-form__password-input"} id="name"  validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),

                ]}
                onInputHandler  =  {onInputHandler}  
                ></Input>
              }
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__username">

              {
                <Input element={"input"} placeholder={"نام کاربری"} type={"text"} className={"login-form__username-input"} id="username" validations={[
                  requiredValidator(),
                  minValidator(8),
                  emailValidator()  , 
                  maxValidator(18),
                ]}
                onInputHandler  =  {onInputHandler}></Input>
              }
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">

              {
                <Input element={"input"} placeholder={"آدرس ایمیل"} type={"text"} className={"login-form__password-input"} id="email" validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler  =  {onInputHandler} ></Input>
              }
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>


            <div className="login-form__password">

              {
                <Input element={"input"} placeholder={"شماره  همراه  "} type={"text"} className={"login-form__password-input"} id="phoneNumber" validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler  =  {onInputHandler}></Input>
              }
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>

            <div className="login-form__password">

              {
                <Input element={"input"} placeholder={"رمز عبور"} type={"text"} className={"login-form__password-input"} id="password" validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler  =  {onInputHandler}></Input>
              }
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password">

              {
                <Input element={"input"} placeholder={"تکرار رمزعبور"} type={"password"} className={"login-form__password-input"} id="confirmPass"   validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]} 
                onInputHandler  =  {onInputHandler}></Input>
              }
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>



            <Button className="login-form__btn" type="submit" onClick={(e) => regesterUser(e)} >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>


            </Button>
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





      <Footer>

      </Footer>

    </>
  )
}
