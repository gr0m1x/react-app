const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Slavon"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Gena"},
        {id: 4, name: "Nikitos"},
        {id: 5, name: "Yrko"},
    ],
    messages: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 2, message: "Esse laborum laudantium maxime quos vel."},
        {
            id: 3,
            message: "Accusantium, assumenda cupiditate dolores exercitationem mollitia necessitatibus nobis perferendis quaerat quis reprehenderit rerum, sint vitae voluptatum. "
        },
        {id: 4, message: "Esse laborum laudantium maxime quos vel."},
        {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push( {id: 6, message: body });
            state.newMessageBody = "";
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body,});

export default dialogsReducer;