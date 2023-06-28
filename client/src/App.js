import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {check} from "./http/userAPI";
import {Spinner} from "reactstrap";
import {setIsAuth, setUser} from "./slices/UserSlice";


function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            dispatch(setUser(true))
            dispatch(setIsAuth(true))
        }).finally(() => setLoading(false))
    }, [])

    if (loading){
        return <Spinner></Spinner>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <div className={styles.content}>
                <AppRouter/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
