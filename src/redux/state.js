const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage : {
            posts: [
                {id: 1, postText: "first props", likesCount: 10},
                {id: 2, postText: "First message", likesCount: 13},
                {id: 3, postText: "Hello", likesCount: 2},
                {id: 2, postText: "Second message", likesCount: 0},
            ],
            newPostText: '',
        },

        dialogsPage : {
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
        },

    },
    _callSubscribe() {
        console.log("State ch anged")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         postText: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscribe(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscribe(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                postText: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state);
        }

    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default store;
window.store = store;

// 39  les