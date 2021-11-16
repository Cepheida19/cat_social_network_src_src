
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
      ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state, 
                messages: [...state.messages, {id: 6, message: body}] //в конце вставляем элемент с помощью spread
                };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;