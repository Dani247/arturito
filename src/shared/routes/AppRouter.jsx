import React, { Suspense } from "react";
// ! Redux
import { Provider } from "react-redux";
import store from '../redux/configureStore'
// Routes
import { Router } from "@reach/router";
// Components
import App from "../../components/App";
import Header from "../components/Header";
import Footer from '../components/Footer'
// Styles
import { ThemeProvider } from "react-jss";
import theme from "../themes/v1";
// Lazy components
const Login = React.lazy(() => import("../../components/Login/"));
const Home = React.lazy(() => import("../../components/Home/"));
const AppRouter = () => {
  return (
    <Provider store={store({authed: false})}>
      <ThemeProvider theme={theme}>
        <App>
          <Header />
          <Suspense fallback={<div>...Loading</div>}>
            <Router className="routerContainer" primary={false}>
              <Home path="/" />
              <Login path="login" />
            </Router>
          </Suspense>
          <Footer/>
        </App>
      </ThemeProvider>
    </Provider>
  );
};

export default AppRouter;
