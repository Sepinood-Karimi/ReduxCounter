import React,{Suspense} from "react";
import './App.css';
import Header from "./components/Header";
import {useSelector} from "react-redux";
const Counter = React.lazy(()=>import('./components/Counter'));
const Auth = React.lazy(()=>import("./components/Auth"));
const Notification = React.lazy(()=>import("./components/UI/Notification"));

function App() {
    const notification = useSelector(state => state.ui.notification);
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);


    return (
        <Suspense fallback={<p> Please Be Patient We Are Loading Page... </p>}>
            {notification && isLoggedIn &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />}
            <Header/>
            {!isLoggedIn && <Auth/>}
            {isLoggedIn && <Counter/>}
        </Suspense>
    );
}

export default App;
