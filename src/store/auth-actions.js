import {uiActions} from "./ui-slice";
import {authActions} from "./auth-slice";

export const sendLoginData = (email,password) => {
    return async (dispatch) =>{
        dispatch(uiActions.notify({
            status : 'pending',
            title : 'Pending...',
            message : 'We Are Sending Your Login Request...'
        }));
        const sendLoginRequest = async () =>{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDn2VsH02WMcSF1-_LdJ1ntRzffhl9Q72Y',{
                method : 'POST',
                headers : {
                    'Content-Type':' application/json'
                },
                body : JSON.stringify({
                    email,
                    password,
                    returnSecureToken : true
                })
            });
            const data = await response.json();

            if(!response.ok){
                let error = data.error.message;
                throw new Error(error);
            }
            return data;
        }
        try{
            const loginInfo= await sendLoginRequest();
            dispatch(authActions.login(loginInfo));
            dispatch(uiActions.notify({
                status : 'success',
                title : 'Successful Login',
                message : 'You Successfully Logged In!'
            }));
        }catch (e) {
            dispatch(uiActions.notify({
                status : 'error',
                title : 'Error!',
                message : e.message
            }));
        }
        setTimeout(()=>{
            dispatch(uiActions.clearNotify());
        },60000);
        setTimeout(()=>{
            dispatch(authActions.logout());
        },3600000);
    }
};

export const sendSignupData = (email,password) => {
    return async(dispatch) => {
        dispatch(uiActions.notify({
            status : 'pending',
            title : 'Pending...',
            message : 'We Are Sending Your Signup Request...'
        }));
        const sendSignupRequest = async () => {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDn2VsH02WMcSF1-_LdJ1ntRzffhl9Q72Y',{
                method : 'POST',
                headers : {
                    'Content-Type':' application/json'
                },
                body : JSON.stringify({
                    email,
                    password,
                    returnSecureToken : true
                })
            });
            const data = await response.json();

            if(!response.ok){
                let error = data.error.message;
                throw new Error(error);
            }
            return data;
        }
        try{
            const signupData = await sendSignupRequest();
            dispatch(authActions.login(signupData));
            dispatch(uiActions.notify({
                status : 'success',
                title : 'Successful Signup',
                message : 'You Successfully Signed Up!'
            }));
        }catch (e) {
            dispatch(uiActions.notify({
                status : 'error',
                title : 'Error!',
                message : e.message
            }));
        }
        setTimeout(()=>{
            dispatch(uiActions.clearNotify());
        },60000);
        setTimeout(()=>{
            dispatch(authActions.logout());
        },3600000);
    }
};
