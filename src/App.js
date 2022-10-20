import './App.css';
import Header from "./components/Header";
import Counter from "./components/Counter";
import {useSelector} from "react-redux";
import Auth from "./components/Auth";
import Notification from "./components/UI/Notification";

function App() {
    const notification = useSelector(state => state.ui.notification);
    return (
        <>
            {notification &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />}
            <Header/>
            <Auth/>
            <Counter/>
        </>
    );
}

export default App;
