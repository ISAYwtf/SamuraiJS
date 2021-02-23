import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {withSuspense} from "../../hoc/withSuspense";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import classes from "./Content.module.css";

const MessagesContainer = React.lazy(() => import('../Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./../Profile/ProfileContainer'));
const Login = React.lazy(() => import('./../Login/Login'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));

const Content = props => {
    return (
        <div className={`${classes.content} component`}>
            <Switch>
                <Route path={`/`} exact
                       render={() => <Redirect to={"/profile"}/>}/>
                <Route path={`/profile/:userId?`}
                       render={withSuspense(ProfileContainer)}/>
                <Route path={`/dialogs`}
                       render={withSuspense(MessagesContainer)}/>
                <Route path={`/users`} render={withSuspense(UsersContainer)}/>
                <Route path={`/music`} render={() => <Music/>}/>
                <Route path={`/settings`} render={() => <Settings/>}/>
                <Route path={`/login`} render={withSuspense(Login)}/>
                <Route path={"*"} render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    )
}

export default Content;
