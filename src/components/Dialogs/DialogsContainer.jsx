import React from 'react';
import {onMessageChange, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {onMessageChange, sendMessage}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
