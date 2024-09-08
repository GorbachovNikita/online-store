import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {

    const {user} = useContext(Context)

    console.log(user)

    if(user.isAuth == true) {
        return (
            <Routes>
                {authRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />
                )}
            </Routes>
        );
    }else  {
        return (
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />
                )}
            </Routes>
        )
    }
};

export default AppRouter;