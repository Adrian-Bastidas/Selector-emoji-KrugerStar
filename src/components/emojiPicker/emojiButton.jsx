
export default function EmojiButton({ emoji, onClick }) {
  function handleOnClick() {
    onClick(emoji);
  }

  return (
    <button onClick={handleOnClick} className={"emojis-lista"}>
      {emoji.symbol}
    </button>
  );
}
