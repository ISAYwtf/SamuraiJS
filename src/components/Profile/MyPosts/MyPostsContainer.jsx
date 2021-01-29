import React from "react";
import {addPost, onPostChange} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profilePage: state.profilePage
})

const mapDispatchToProps = {onPostChange, addPost};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
