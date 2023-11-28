export interface Message {
  id: string;
  text: string;
  type: 'user' | 'ai';
}
