import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "../utils/consts";
import {Link, useLocation} from "react-router-dom";
import {login, signup} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()

    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {

        try {

            let data;

            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await signup(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)

            if (!isLogin) {
                window.location.href = '/login'
            }else {
                window.location.href = '/shop'
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: 400}}
        >
            <Card style={{width: 600, padding: 5}}>
                <h2 style={{textAlign: 'center'}}>
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h2>
                <Form style={{display: 'flex', flexDirection: 'column', padding: 5}}>
                    <Form.Control
                        style={{marginTop: 10}}
                        placeholder="Введите email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        style={{marginTop: 10}}
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Button
                        style={{marginTop: 10}}
                        variant={"outline-success"}
                        onClick={click}
                    >{isLogin ? 'Войти' : 'Регистрация'}</Button>
                    {
                        isLogin ?
                            <div style={{marginTop: 5, display: 'flex', alignItems: 'center'}}>
                                <p
                                    style={{position: 'relative', float: 'left', margin: 0}}
                                >Нет аккаунта?</p>
                                <Link
                                    style={{marginLeft: 5, color: "blue"}} to={SIGNUP_ROUTE}
                                >Зарегистрируйся!</Link>
                            </div>
                            :
                            <div style={{marginTop: 5, display: 'flex', alignItems: 'center'}}>
                                <p
                                    style={{position: 'relative', float: 'left', margin: 0}}
                                >Есть аккаунт?</p>
                                <Link
                                    style={{marginLeft: 5, color: "blue"}} to={LOGIN_ROUTE}
                                >Авторизуйся!</Link>
                            </div>
                    }
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;