import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SIGNUP_ROUTE} from './utils/consts'
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    {path: SHOP_ROUTE, element: Shop},
    {path: DEVICE_ROUTE + '/:id', element: DevicePage},
    {path: ADMIN_ROUTE, element: Admin},
    {path: BASKET_ROUTE, element: Basket},

    {path: '/', element: Shop},
    {path: '/*', element: Shop},
]

export const publicRoutes = [
    {path: SHOP_ROUTE, element: Shop},
    {path: LOGIN_ROUTE, element: Auth},
    {path: SIGNUP_ROUTE, element: Auth},
    {path: DEVICE_ROUTE + '/:id', element: DevicePage},

    {path: '/', element: Shop},
    {path: '/*', element: Shop},
]