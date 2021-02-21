import React from "react";
import {addPostTC} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profilePage: state.profilePage
})

const mapDispatchToProps = {addPostTC};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
