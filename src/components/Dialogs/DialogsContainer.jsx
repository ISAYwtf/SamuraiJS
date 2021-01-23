import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

const mapDispatchToProps = (dispatch) => ({
    onMessageChange: (e) => {
        const msg = e.target.value;
        dispatch(updateNewMessageTextActionCreator(msg));
    },
    sendMessage: () => dispatch(sendMessageActionCreator())
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
