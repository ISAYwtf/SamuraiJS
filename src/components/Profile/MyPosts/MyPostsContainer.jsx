import React from "react";
import {addPost, onChangeInput} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profilePage: state.profilePage
})

const mapDispatchToProps = {onPostChange: onChangeInput, addPost};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
