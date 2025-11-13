import React, { useState } from "react";

const CarteCompleter = ({ niveauData, userId, onComplete }) => {
  const [feedback, setFeedback] = useState(null);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const found = niveauData.content.zones.find((zone) => {
      const dx = clickX - zone.x;
      const dy = clickY - zone.y;
      return Math.sqrt(dx * dx + dy * dy) <= zone.radius;
    });

    if (found) {
      setFeedback({ text: `✅ Correct ! C'est le ${found.name}.`, correct: true });
      if (onComplete) onComplete(found.name);
    } else {
      setFeedback({ text: `❌ Mauvais endroit, réessaie !`, correct: false });
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4 text-emerald-700">
        {niveauData.content.question}
      </h2>
      <div className="relative">
        <img
          src={niveauData.content.image}
          alt="Carte Corps Humain"
          onClick={handleClick}
          className="w-[500px] h-auto cursor-crosshair rounded-lg shadow-lg"
        />
        {feedback && (
          <p
            className={`mt-4 text-lg font-semibold ${
              feedback.correct ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default CarteCompleter;
