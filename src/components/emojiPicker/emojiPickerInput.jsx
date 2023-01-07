import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <EmojiPicker ref={inputRef} />
    </div>
  );
}
