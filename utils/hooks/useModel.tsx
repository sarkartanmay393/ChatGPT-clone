import { type Dispatch, type SetStateAction, useState } from "react";

const useModel = (): {
  model: string,
  setModel: Dispatch<SetStateAction<string>>
} => {
  const [model, setModel] = useState('GPT 3.5');

  return { model, setModel };
}

export default useModel;