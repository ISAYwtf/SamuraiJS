import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    profilePage: state.profilePage
})

const mapDispatchToProps = (dispatch) => ({
    onPostChange: (e) => {
        const text = e.target.value;
        dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => dispatch(addPostActionCreator())
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
