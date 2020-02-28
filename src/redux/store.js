import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store;
store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: "first props", likesCount: 10},
                {id: 2, postText: "First message", likesCount: 13},
                {id: 3, postText: "Hello", likesCount: 2},
                {id: 2, postText: "Second message", likesCount: 0},
            ],
            newPostText: '',
        },

        dialogsPage: {
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
        },
        sidebar: {},

    },
    _callSubscribe() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch: function (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    }
};


export default store;
window.store = store;

// 41  les