"use client";

import { useEffect, useState } from "react";

const descriptions = [
  "brand storyteller",
  "strategist marketer",
  "researcher",
  "creator",
  "content strategist",
  "communicator",
];

export default function RotatingAboutLine() {
  const [visibleText, setVisibleText] = useState("s");

  useEffect(() => {
    let wordIndex = 0;
    let characterIndex = 1;
    let deleting = false;
    let timer = 0;

    const typeNextCharacter = () => {
      const word = descriptions[wordIndex];

      if (!deleting) {
        if (characterIndex < word.length) {
          characterIndex += 1;
          setVisibleText(word.slice(0, characterIndex));
          timer = window.setTimeout(typeNextCharacter, 78);
          return;
        }

        deleting = true;
        timer = window.setTimeout(typeNextCharacter, 900);
        return;
      }

      if (characterIndex > 0) {
        characterIndex -= 1;
        setVisibleText(word.slice(0, characterIndex));
        timer = window.setTimeout(typeNextCharacter, 42);
        return;
      }

      wordIndex = (wordIndex + 1) % descriptions.length;
      deleting = false;
      timer = window.setTimeout(typeNextCharacter, 220);
    };

    timer = window.setTimeout(typeNextCharacter, 78);
    return () => window.clearTimeout(timer);
  }, []);

  return <span className="about-role" aria-hidden="true">{visibleText}</span>;
}
