import { useState, useEffect } from 'react';

function Tag() {
  const colors = ['bg-red-500', 'bg-purple', 'bg-green-500', 'bg-yellow-500']; // List of background color classes
  const [bgColor, setBgColor] = useState(getRandomColor(colors)); // Initial background color class

  useEffect(() => {
    const interval = setInterval(() => {
      // Get a random color that is different from the current one
      let randomColor;
      do {
        randomColor = getRandomColor(colors);
      } while (randomColor === bgColor);

      setBgColor(randomColor);
    }, 4000);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [bgColor, colors]);

  // Helper function to get a random color from the list
  function getRandomColor(colorList: string[]) { // Specify the type as 'string[]'
    return colorList[Math.floor(Math.random() * colorList.length)];
  }

  return (
    <div className={`custom-selection rounded-3xl mx-5 md:mx-auto max-w-md
      font-serif font-semibold text-sm mt-5 md:mt-0 md:text-sm py-3 mb-10 md:mb-16 ${bgColor}
      transition-all duration-1000 ease-in-out`}>
      Over 2000 locales to choose from!
    </div>
  );
}

export default Tag;
