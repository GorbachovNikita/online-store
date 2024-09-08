import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const NavBar = observer(() => {

    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</Link>
                {user.isAuth
                    ? <Nav className="ml-auto" style={{color: 'white'}}>
                        <Link style={{
                            outline: 'none',
                            textDecoration: 'none',
                            padding: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            border: '1px solid white',
                            borderRadius: 5,
                            color: 'white',
                        }} to={ADMIN_ROUTE}>Админ панель</Link>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                            style={{marginLeft: 10}}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    : <Nav className="ml-auto" style={{color: 'white'}}>
                        <Link style={{
                            outline: 'none',
                            textDecoration: 'none',
                            padding: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            border: '1px solid white',
                            borderRadius: 5,
                            color: 'white',
                            marginLeft: 10,
                        }} to={LOGIN_ROUTE}>Авторизация</Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
});

export default NavBar;