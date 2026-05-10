import { useEffect, useState } from "react";

export const TypewriterText = () => {
  const texts = ["Priyanshu Kumar", "a passionate developer"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeDelete = 3000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-blue-500">
      {displayText}
      <span className="animate-cursor">|</span>
    </span>
  );
};
