import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

it("length of posts should be incremented", () => {
    // 1. test data
    let action = addPostActionCreator("meow meow");
    let state = {  
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "Hi, do you learned react?", likesCount: 15}
          ]
    }
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("meow meow");
});

it("after deleting length of message should be decrement", () => {
    // 1. test data
    let action = deletePost(1);
    let state = {  
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "Hi, do you learned react?", likesCount: 15}
          ]
    }
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});