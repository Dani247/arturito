import React, { Suspense } from "react";

// ! Redux
import { Provider } from "react-redux";
import store from '../redux/configureStore'

// Routes
import { Router } from "@reach/router";

// Components
import App from "../../components/App";
import Header from "../components/Header";
import Error404 from '../components/Error404'
// import Footer from '../components/Footer'

// Styles
import { ThemeProvider } from "react-jss";
import theme from "../themes/v1";
import Preloader from '../components/Preloader/'

// Lazy components
const Login = React.lazy(() => import("../../components/Login/"));
const Register = React.lazy(() => import('../../components/Register/'))
const Home = React.lazy(() => import("../../components/Home/"));

const AppRouter = () => {
  return (
    <Provider store={store({authed: false})}>
      <ThemeProvider theme={theme}>
        <App>
          <Header />
          <Suspense fallback={<Preloader />}>
            <Router className="routerContainer" primary={false}>
              <Home path="home" />
              <Login path="/" />
              <Register path='register' />
              <Error404 default/>
            </Router>
          </Suspense>
        </App>
      </ThemeProvider>
    </Provider>
  );
};

export default AppRouter;
