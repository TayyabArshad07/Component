import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
    useEffect(() => {
      const swapIcons = () => {
        const icons = document.querySelectorAll<HTMLElement>('.icon');
        let positions: { top: string; left: string }[] = [];
        let classNames: string[] = [];
        let zIndexes: number[] = [];
  
        icons.forEach(icon => {
          positions.push({
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`
          });
          classNames.push(icon.className);
          zIndexes.push(Math.floor(Math.random() * 10));
  
          let size;
          if (icon.classList.contains('solid-circle') || icon.classList.contains('outlined-circle')) {
            size = `${40 + (40 * Math.random())}px`;
            icon.style.width = size;
            icon.style.height = size;
          } else if (icon.classList.contains('dot')) {
            size = `${5 + (15 * Math.random())}px`;
            icon.style.width = size;
            icon.style.height = size;
          } else if (icon.classList.contains('square') || icon.classList.contains('outlined-square')) {
            size = `${30 + (40 * Math.random())}px`;
            icon.style.width = size;
            icon.style.height = size;
          }
  
          icon.style.opacity = (0.4 + (Math.random() * 0.6)).toFixed(2);
        });
  
        positions.sort(() => Math.random() - 0.5);
        classNames.sort(() => Math.random() - 0.5);
        zIndexes.sort(() => Math.random() - 0.5);
  
        icons.forEach((icon, index) => {
          icon.style.top = positions[index].top;
          icon.style.left = positions[index].left;
          icon.style.zIndex = zIndexes[index].toString();
          icon.className = classNames[index];
        });
      };
  
      swapIcons();
      const intervalId = setInterval(swapIcons, 1500);
  
      // Cleanup function to clear the interval
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once
  
  const dynamicTexts = ["Affordability", "Eligibility", "Success"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero-section'>
      <div className="text-container">
      <div className="line1">WHERE QUALITY MEETS</div>
      <div className="line2">
        {dynamicTexts.map((text, index) => (
          <span key={index} className={index === currentTextIndex ? "slide-in" : ""}>{text}</span>
        ))}
      </div>
      <div className="line3">ELEVATE YOUR STARTUP WITH PROVEN DIGITAL MARKETING STRATEGIES.</div>
    </div>
     <div className="overlay-container">
     <div className="object icon solid-circle" id="icon1"></div>
     <div className="object icon outlined-circle" id="icon2"></div>
     <div className="object icon dot" id="icon3"></div>
     <div className="object icon solid-circle" id="icon4"></div>
     <div className="object icon solid-circle" id="icon5"></div>
     <div className="object icon outlined-circle" id="icon6"></div>
     <div className="object icon dot" id="icon7"></div>
     <div className="object icon solid-circle" id="icon8"></div>
     <div className="object icon outlined-circle" id="icon9"></div>
     <div className="object icon dot" id="icon10"></div>
     <div className="object icon outlined-circle" id="icon11"></div>
     <div className="object icon dot" id="icon12"></div>
     <div className="object icon square" id="icon13"></div>
     <div className="object icon outlined-square" id="icon14"></div>
     <div className="object icon square" id="icon15"></div>
 </div>
    </section>
  );
};
export default AnimatedText;
