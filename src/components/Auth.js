import classes from './Auth.module.css';
import {useRef, useState} from "react";


const Auth = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);

    const loginHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCv9p4SEWJKbVkOPM5e8W9n-RzFaofv84';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCv9p4SEWJKbVkOPM5e8W9n-RzFaofv84';
        }


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                })
            });
            const data = await response.json();
            if (!response.ok) {
                let error = data.error.message;
                throw new Error(error);
            }
            if (response.ok) {
                if (isLogin){
                    alert('You Successfully Logged In !');
                }else{
                    alert('You Successfully Signup !');
                }
            }
        } catch (e) {
            alert(e.message);
        }
    };

    const signupToggle = () => {
        setIsLogin(false);
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
                    <p onClick={signupToggle}> Dont have an account ? create one. </p>
                </form>
            </section>
        </main>
    );
};

export default Auth;
