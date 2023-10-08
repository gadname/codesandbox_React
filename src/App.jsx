import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num > 0) {
      alert(`Number is ${num}`);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColoredMessage color="blue" message="お元気ですか?" />
      <ColoredMessage color="pink" message="元気です!" />
      <CssModules />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
