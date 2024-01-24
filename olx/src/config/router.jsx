import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate,
    useLocation
} from "react-router-dom"
import Dashboard from '../views/Dashboard'
import Detail from '../views/Detail'
import LogIn from "../views/Login"
import SignUp from "../views/Login/signUp"
import SellerSite from "../views/seller"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"
import Navbar from "../views/NavBar"
import Footer from "../views/NavBar/footer"
import Loader from "../components/loader"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/post",
                element: <SellerSite />,
            },
            {
                path: "/detail/:id",
                element: <Detail />,
            }
        ]
    },
    
]);

function Layout() {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoader(false);
      });
    }, []);
  
    useEffect(() => {
      const path = location.pathname;
      if (user) {
        if (path === '/signup' || path === '/login') {
          navigate('/');
        } else {
          if(!user && path === '/seller'){
            navigate('/login')
          }
        }
      }
    }, [location.pathname, user]);
  
    if (loader) return <div style={{ height: 600, width: 1400, display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
      <Loader />
    </div>;
  
    const excludeRoutes = ['/login', '/signup', '/post'];
    const shouldRenderNavbarAndFooter = !excludeRoutes.includes(location.pathname);
  
    return (
      <div>
        {shouldRenderNavbarAndFooter && <Navbar user={user} />}
        <Outlet />
        {shouldRenderNavbarAndFooter && <Footer />}
      </div>
    );
  }
  
function Router() {
    return <RouterProvider router={router} />
}

export default Router