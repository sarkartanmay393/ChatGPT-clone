import { type Action } from "easy-peasy";

export interface Message {
  id: string;
  text: string;
  type: "user" | "ai";
  sentOn: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
}

export interface GlobalStore {
  input: string;
  model: string;
  messages: Message[];
  chats: Chat[];

  setInput: Action<GlobalStore, string>;
  setChats: Action<GlobalStore, Chat[]>;
  setModel: Action<GlobalStore, string>;
  setMessages: Action<GlobalStore, Message[]>;
  setOneMessage: Action<GlobalStore, Message>;
}
