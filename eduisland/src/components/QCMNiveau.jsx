import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { saveNiveauCompletion } from '../services/gameAPI';

const QCMNiveau = ({ niveauId, userId, onComplete }) => {
  const [niveauData, setNiveauData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNiveauData();
  }, [niveauId]);

  const fetchNiveauData = async () => {
    try {
      const { data, error } = await supabase
        .from('niveaux')
        .select('*')
        .eq('id', niveauId)
        .single();
      
      if (error) throw error;
      if (data) {
        setNiveauData(data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du niveau:', error);
      setLoading(false);
    }
  };

  const handleAnswer = (answer) => {
    if (showFeedback) return; // Empêcher de répondre deux fois
    
    const question = niveauData.content.questions[currentQuestion];
    const correct = answer === question.correctAnswer;
    
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < niveauData.content.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      completeNiveau();
    }
  };

  const completeNiveau = async () => {
    console.log('QCM - completeNiveau appelé', { userId, niveauId, score, isCorrect });
    try {
      // Le score est déjà correct, pas besoin d'ajouter isCorrect car déjà compté dans handleAnswer
      const finalScore = score;
      const totalQuestions = niveauData.content.questions.length;

      console.log('QCM - Score final:', { finalScore, totalQuestions });

      // Utiliser la fonction centralisée pour sauvegarder
      const result = await saveNiveauCompletion(
        userId,
        niveauId,
        finalScore,
        totalQuestions,
        niveauData.xp_reward
      );

      console.log('QCM - Résultat sauvegarde:', result);

      if (onComplete) {
        console.log('QCM - Appel de onComplete');
        onComplete(finalScore, totalQuestions, result.xpEarned || 0);
      }
    } catch (error) {
      console.error('Erreur lors de la complétion du niveau:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Chargement du niveau...</div>
      </div>
    );
  }

  if (!niveauData || !niveauData.content.questions) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Erreur: Niveau introuvable</div>
      </div>
    );
  }

  const question = niveauData.content.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / niveauData.content.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-blue-800">
              {niveauData.name || `Niveau ${niveauData.level_number}`}
            </h1>
            <div className="text-lg font-semibold text-green-600">
              Score: {score}/{niveauData.content.questions.length}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 mt-2 text-center">
            Question {currentQuestion + 1} sur {niveauData.content.questions.length}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
              
              if (showFeedback) {
                if (option === question.correctAnswer) {
                  buttonClass += "bg-green-100 border-green-500 text-green-800";
                } else if (option === selectedAnswer && !isCorrect) {
                  buttonClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
                }
              } else {
                if (selectedAnswer === option) {
                  buttonClass += "bg-blue-100 border-blue-500";
                } else {
                  buttonClass += "bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'}`}>
              <p className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? '✓ Correct !' : '✗ Incorrect'}
              </p>
              {question.explanation && (
                <p className="mt-2 text-gray-700">
                  {question.explanation}
                </p>
              )}
            </div>
          )}

          {/* Next button */}
          {showFeedback && (
            <button
              onClick={handleNext}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {currentQuestion < niveauData.content.questions.length - 1 ? 'Question suivante' : 'Terminer'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QCMNiveau;
