
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body }]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;