import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {

    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "Hi, do you learned react?", likesCount: 15}
          ],
        newPostText: "it-kamasutra.com"
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Masya"},
            {id: 2, name: "Murzik"},
            {id: 3, name: "Frosya"},
            {id: 4, name: "Tom"}
          ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Meow"},
            {id: 3, message: "Myaaaaa"}
          ],
        newMessageBody: "" 
    },
    sidebar: {}
  },
  
  _callSubscriber() {
    console.log("State was changed");
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;    // паттерн observer
  },

  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
}

  export default store;