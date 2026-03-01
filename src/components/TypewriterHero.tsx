import { useState, useEffect } from "react";
import "./TypewriterHero.css";

const TypewriterHero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Hello", "I am Barbara Huemer", "I am a Web Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div
      style={{ flexDirection: "column", alignItems: "center", height: "100px" }}
    >
      <h1 style={{ display: "inline", margin: 0, fontFamily: "monospace" }}>
        {text}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
};

export default TypewriterHero;
