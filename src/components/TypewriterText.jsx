import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text = "M.Tech IIT Guwahati | GenAI Developer | Tech Lead at HCLTech" }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullTextLength = text.length;
    let timeoutId;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < fullTextLength) {
        timeoutId = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 50); // Speed of typing
      } else {
        // Finished typing, wait before deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30); // Speed of deleting
      } else {
        // Finished deleting, start typing again
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
        }, 500); // Pause before typing again
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, text]);

  return (
    <p className="mt-4 text-gray-300 min-h-[1.5em]" style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
      <span style={{
        borderRight: '3px solid #FBBF24',
        paddingRight: '4px',
        animation: 'blink 0.7s infinite'
      }}>
        {displayedText}
      </span>
    </p>
  );
}
