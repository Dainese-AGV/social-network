import { renderEntireTree } from "../..";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you", like: "1" },
        { id: 2, message: "I am ok", like: "2" },
      ],
      newPostText: "",

      dialogData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" },
      ],
    },
    messagesPage: {
      messegesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How your mood?" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    renderEntireTree(observer);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 5,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      renderEntireTree(store.getState());
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      renderEntireTree(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
