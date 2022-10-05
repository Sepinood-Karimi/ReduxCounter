import './App.css';
import Header from "./components/Header";
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Counter/>
        </Provider>
    );
}

export default App;
