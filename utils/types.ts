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

const Users = {
  useid: {
    email: "heloo@s.com",
    chats: [
      {
        id: "chatid1",
        title: "ranodm",
        messages: [
          { id: "m1", text: "string;", type: "ai", sentOn: "string;" },
          { id: "m2;", text: "jnkjj", type: "ai", sentOn: "string;" },
        ],
      },
    ],
  },
  useid2: {
    email: "heloo@s.com",
    chats: [
      {
        id: "chatid1",
        title: "ranodm",
        messages: [
          { id: "m1", text: "string;", type: "ai", sentOn: "string;" },
          { id: "m2;", text: "jnkjj", type: "ai", sentOn: "string;" },
        ],
      },
    ],
  },
};

export interface User {
  id: string;
  email: string;
}

export interface GlobalStore {
  user: User | null;
  setUser: Action<GlobalStore, User>;

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
