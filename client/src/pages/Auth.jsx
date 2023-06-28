import React, { useState } from 'react';
import { Button, Card, Container, Form, Input} from 'reactstrap';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {login, registration} from "../http/userAPI";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../slices/UserSlice";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const click = async () => {
        try {
            let data;
            if (isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            dispatch(setIsAuth(true))
            navigate(SHOP_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ height: window.innerHeight - 54 }}
            >
                <Card style={{ width: 600 }} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <Form className="d-flex flex-column">
                        <Form>
                            <Input
                                className="mt-3"
                                placeholder="Enter your email..."
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Form>
                        <Form>
                            <Input
                                className="mt-3"
                                placeholder="Enter your password..."
                                value={password}
                                onChange={handlePasswordChange}
                                type="password"
                            />
                        </Form>

                        <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ? (
                                <div>
                                    Don't have an account?{' '}
                                    <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                                </div>
                            ) : (
                                <div>
                                    Already have an account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                                </div>
                            )}
                            <Button
                                onClick={click}
                                className="align-self-end"
                                color="success"
                                outline
                                // onClick={click}
                            >
                                {isLogin ? 'LOGIN' : 'SIGN UP'}
                            </Button>
                        </Form>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;
