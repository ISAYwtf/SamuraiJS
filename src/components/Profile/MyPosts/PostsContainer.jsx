import React from "react";
import {addPostTC} from "../../../redux/Profile/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {getProfilePageState} from "../../../redux/Profile/profile-selectors";

const mapStateToProps = state => ({
    profilePage: getProfilePageState(state)
})

const mapDispatchToProps = {addPostTC};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
