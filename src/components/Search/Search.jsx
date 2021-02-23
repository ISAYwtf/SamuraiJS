import React, {useState} from "react";
import classes from "./Search.module.css";
import {Field, reduxForm, reset} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import Button from "../common/Button";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setCurrentPage} from "../../redux/Users/users-reducer";
import {toggleHasError} from "../../redux/App/app-reducer";

const Search = props => {
    const [redirect, setRedirect] = useState(false);
    const [userId, setUserId] = useState(null);

    const handleSearchUser = formData => {
        setRedirect(true);
        setUserId(formData.searchUser);
    }

    const handleSearchPage = formData => {
        try {
            setRedirect(true);
            if (typeof +formData.searchPage !== "number" || isNaN(+formData.searchPage)) {
                setRedirect(false);
                throw "Input number, please";
            }
            props.setCurrentPage(+formData.searchPage);
        } catch (e) {
            props.toggleHasError([true, e]);
        }

    }

    if (redirect) {
        setRedirect(false);
        if (userId) {
            props.history.push(`/profile/${userId}`);
            setUserId(null);
        }
        else {
            props.history.push(`/users`);
        }

    }

    return <div className={`component component--sidebar`}>
        <SearchFormRedux title={"User ID"} placeholder={"Input user ID"} name={"searchUser"}
                         onSubmit={handleSearchUser}/>
        <SearchFormRedux title={"Page of users"} placeholder={"Input number of page"} name={"searchPage"}
                         onSubmit={handleSearchPage}/>
    </div>
}

const SearchForm = props => {
    return (
        <div className={classes.form}>
            <p className={classes.searchTitle}>{props.title}</p>
            <form onSubmit={props.handleSubmit}>
                <Field className={classes.input} component={Input} name={props.name} placeholder={props.placeholder}/>
                <Button>Search</Button>
            </form>
        </div>
    )
}

const SearchFormRedux = reduxForm({form: "searchForm"})(SearchForm);

const mapDispatchToProps = {
    setCurrentPage,
    toggleHasError,
    reset
}

export default compose(
    connect(null, mapDispatchToProps),
    withRouter
)(Search);
