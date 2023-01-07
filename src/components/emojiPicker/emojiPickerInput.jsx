import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div>
      <textarea placeholder="Escribe aqui tu mensaje con emojis usuario" ref={inputRef} className="escritura"></textarea>
      <EmojiPicker ref={inputRef} />
    </div>
  );
}
