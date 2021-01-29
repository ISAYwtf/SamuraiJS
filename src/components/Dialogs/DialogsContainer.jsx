import React from 'react';
import {onMessageChange, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = state => ({dialogsPage: state.dialogsPage})

const mapDispatchToProps = {onMessageChange, sendMessage}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
