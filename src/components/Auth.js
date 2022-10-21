import classes from './Auth.module.css';
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {sendLoginData, sendSignupData} from "../store/auth-actions";
import {authActions} from "../store/auth-slice";


const Auth = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);

    const dispatch = useDispatch();

    const token = localStorage.getItem('token');

    const loginInfo = {
        idToken : token
    };

    useEffect(()=>{
        if (token)
            dispatch(authActions.login(loginInfo));
    },[]);

    const loginHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        dispatch(sendLoginData(enteredEmail,enteredPassword));
        if(!isLogin){
            dispatch(sendSignupData(enteredEmail,enteredPassword));
        }
    };

    const signupToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={loginHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' ref={emailInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' ref={passwordInputRef}/>
                    </div>
                    <button>{isLogin ? 'Login' : 'Signup'}</button>
                    {isLogin && <p onClick={signupToggle}> Dont have an account ? create one. </p>}
                    {!isLogin && <p onClick={signupToggle}> Have An Account ? Login.</p>}
                </form>
            </section>
        </main>
    );
};

export default Auth;
