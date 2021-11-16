import React, { Suspense } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import {  withRouter } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
import { Redirect } from "react-router-dom";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandleErrors = (promiseRejectionEvent) => {
        //alert(promiseRejectionEvent);
        console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }
    componentWillUnmount(){
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }
    
render(){
    if (!this.props.initialized){
        return <Preloader />
    }

  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
            <Switch>

                <Route exact path="/" 
                    render={() => <Redirect to={"/profile"} />} /> 

                <Route path="/dialogs" 
                    render={withSuspense(DialogsContainer)} />

                 <Route path="/profile/:userId?" 
                    render={withSuspense(ProfileContainer)} /> 

                 <Route path="/users" 
                    render={() => <UsersContainer />} />

                 <Route path="/news" 
                    render={() => <News />} />

                 <Route path="/login" 
                    render={() => <LoginPage />} />

                <Route path="*" 
                    render={() => <div>404 Not found</div>} />
            </Switch>
        </div>
      </div>
     );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose( withRouter, connect(mapStateToProps, {initializeApp})) (App);
