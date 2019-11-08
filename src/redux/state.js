import {rerenderEntireTree} from "../render";

let state = {
    profilePage : {
        posts: [
            {id: 1, postText: "first props", likesCount: 10},
            {id: 2, postText: "First message", likesCount: 13},
            {id: 3, postText: "Hello", likesCount: 2},
            {id: 2, postText: "Second message", likesCount: 0},
        ],
    },

    dialogsPage : {
        dialogs: [
            {id: 1, name: "Slavon"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Gena"},
            {id: 4, name: "Nikitos"},
            {id: 5, name: "Yrko"},
            {id: 6, name: "Marina"},
            {id: 7, name: "Iriska"},
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
    }

};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        postText: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state);
}

export default state;