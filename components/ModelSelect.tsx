'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useChatController } from "@/utils/hooks/useChatController";

const ModelSelect = () => {
  const { model, setModel } = useChatController();
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