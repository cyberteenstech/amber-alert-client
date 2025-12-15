"use client";
import { useState, useEffect } from "react";

const TypeWriter = ({
  texts = [],
  speed = 100,
  eraseSpeed = 50,
  typingDelay = 500,
  eraseDelay = 1000,
  displayTextRenderer,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[textIndex];

    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, charIndex === 0 ? typingDelay : speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, eraseDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, eraseSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTextIndex((textIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [texts, textIndex, charIndex, isTyping, speed, eraseSpeed, typingDelay, eraseDelay]);

  if (displayTextRenderer) {
    return displayTextRenderer(displayText, textIndex);
  }

  return <span>{displayText}</span>;
};

export default TypeWriter;
