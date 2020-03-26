// import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,

});
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
};
//
// compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     withAuthRedirect // hoc проверка авторизации
// )(Dialogs)
//
//
// let AuthRedirectComponent = withAuthRedirect(Dialogs); // hoc проверка авторизации
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect // hoc проверка авторизации
)(Dialogs);