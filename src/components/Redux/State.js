import { renderEntireTree } from "../../render";

export const state = {
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
};

export let titlePost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 5,
  };
  state.profilePage.postData.push(newPost);
  renderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

