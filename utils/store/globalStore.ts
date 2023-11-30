import { action } from "easy-peasy";
import { type Message, type GlobalStore, type Chat, type User } from "../types";

const globalStore: GlobalStore = {
  user: null,

  input: "",
  chats: [],
  messages: [],
  model: "GPT 3.5",

  setUser: action((state, payload: User) => {
    state.user = payload;
  }),
  setModel: action((state, payload: string) => {
    state.model = payload;
  }),
  setOneMessage: action((state, payload: Message) => {
    state.messages = [...state.messages, payload];
  }),
  setMessages: action((state, payload: Message[]) => {
    state.messages = payload;
  }),
  setChats: action((state, payload: Chat[]) => {
    state.chats = payload;
  }),
  setInput: action((state, payload: string) => {
    state.input = payload;
  }),
};

export default globalStore;
