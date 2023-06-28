import React, {useState} from 'react';
import TopNavbar from "../components/AdminPage/Navbar/TopNavbar";
import Categories from "../components/AdminPage/Devices/Categories";
import List from "../components/AdminPage/Devices/List";
import Brands from "../components/AdminPage/Devices/Brands";

const AdminPage = () => {
    const [select, setSelect] = useState("")

    function handlerSelect(data) {
        setSelect(data)
    }

    return (
        <div style={{maxWidth:"1440px"}}>
            <h3 className="text-center">Панель адміністратора</h3>
            <TopNavbar handlerSelect={handlerSelect} />
            {select === "Categories" ? <Categories/> : null}
            {select === "List" ? <List/> : null}
            {select === "Brands" ? <Brands/> : null}
        </div>
    );
};

export default AdminPage;