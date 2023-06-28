import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText,
} from "reactstrap";
import {CarFrontFill, Cart} from "react-bootstrap-icons";
import {Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setUser} from "../../slices/UserSlice";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../utils/consts";

function Example(args) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.user.isAuth);

    const exit = () => {
        dispatch(setIsAuth(false))
        dispatch(setUser({}))
    }

    const login = () => {
        navigate(LOGIN_ROUTE)
    }

    return (
        <div>
            <Navbar {...args} dark color="dark" expand="md" fixed="top">
                <NavbarBrand href="/">
                    <h2 className="d-flex align-items-center">
                        <CarFrontFill size={35} className="me-2" style={{color: "orange"}}/>
                        АВТОСКАНЕР.УКР
                    </h2>
                </NavbarBrand><Nav className="me-auto" navbar>
            </Nav>
                {isAuth
                    ?
                    <NavbarText>
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            color="light"
                            className="me-2"
                            outline>Admin panel

                        </Button>
                        <Button
                            onClick={() => exit()}
                            color="danger"
                            outline>
                            Exit
                        </Button>
                        <Button color="dark">
                            <Cart size={30}/>
                        </Button>
                    </NavbarText>
                    :
                    <NavbarText>
                        <Button
                            onClick={() => login()}
                            color="light"
                            outline>
                            Login
                        </Button>
                        <Button color="dark">
                            <Cart size={30}/>
                        </Button>
                    </NavbarText>
                }
            </Navbar>
        </div>
    );
}

export default Example;