'use client'

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const ModelSelect = () => {
  const [model, setModel] = useState('GPT 3.5');

  return (
    <Select value={model} onValueChange={(e) => setModel(e)}>
      <SelectTrigger className="w-[140px] sm:w-[180px]">
        <SelectValue>Chat{model}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="GPT 3.5">
          GPT 3.5
        </SelectItem>
        <SelectItem value="GPT 4">
          GPT 4
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ModelSelect;