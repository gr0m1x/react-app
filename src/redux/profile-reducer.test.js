import profileReducer, {addPostCreator} from "./profile-reducer";
import React from "react";


it('Length of post should be incremenetd', () => {
    // 1. Передаем исходные данные
    let action = addPostCreator("HELLO NEW TEXT")
    let state = {
        posts: [
            {id: 1, postText: "first props", likesCount: 10},
            {id: 2, postText: "First message", likesCount: 13},
            {id: 3, postText: "Hello", likesCount: 2},
            {id: 2, postText: "Second message", likesCount: 0},
        ]
    };


    // 2. вызываем Action
    let newState = profileReducer(state, action);

    // 3.Ожидаемый результат
    expect(newState.posts[4].postText ).toBe("HELLO NEW TEXT")
});
