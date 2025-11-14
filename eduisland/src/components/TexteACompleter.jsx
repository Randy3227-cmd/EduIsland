import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { saveNiveauCompletion } from '../services/gameAPI';

const TexteACompleter = ({ niveauId, userId, onComplete }) => {
  const [niveauData, setNiveauData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

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
        // Initialiser les réponses utilisateur
        const initialAnswers = {};
        data.content.blanks.forEach((blank, index) => {
          initialAnswers[index] = '';
        });
        setUserAnswers(initialAnswers);
        setLoading(false);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du niveau:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (index, value) => {
    setUserAnswers({
      ...userAnswers,
      [index]: value
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    
    niveauData.content.blanks.forEach((blank, index) => {
      const userAnswer = userAnswers[index].trim().toLowerCase();
      const correctAnswers = blank.correctAnswers?.map(a => a.toLowerCase()) || [];
      
      if (correctAnswers.includes(userAnswer)) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setShowFeedback(true);
    setSubmitted(true);
  };

  const handleFinish = async () => {
    console.log('Texte - handleFinish appelé', { userId, niveauId, score });
    try {
      const totalBlanks = niveauData.content.blanks.length;

      // Utiliser la fonction centralisée pour sauvegarder
      const result = await saveNiveauCompletion(
        userId,
        niveauId,
        score,
        totalBlanks,
        niveauData.xp_reward
      );

      console.log('Texte - Résultat sauvegarde:', result);

      if (result.success && onComplete) {
        console.log('Texte - Appel de onComplete');
        onComplete(score, totalBlanks, result.xpEarned);
      }
    } catch (error) {
      console.error('Erreur lors de la complétion du niveau:', error);
    }
  };

  const isAnswerCorrect = (index) => {
    if (!submitted) return null;
    
    const userAnswer = userAnswers[index].trim().toLowerCase();
    const blank = niveauData.content.blanks[index];
    const correctAnswers = blank.correctAnswers?.map(a => a.toLowerCase()) || [];
    
    return correctAnswers.includes(userAnswer);
  };

  const renderTextWithBlanks = () => {
    const { text, blanks } = niveauData.content;
    let parts = [];
    let lastIndex = 0;

    blanks.forEach((blank, index) => {
      // Ajouter le texte avant le blanc
      parts.push(
        <span key={`text-${index}`}>
          {text.substring(lastIndex, blank.position)}
        </span>
      );

      // Ajouter l'input pour le blanc
      const correct = isAnswerCorrect(index);
      let inputClass = "mx-2 px-3 py-1 border-b-2 outline-none transition-all duration-200 ";
      
      if (submitted) {
        if (correct) {
          inputClass += "border-green-500 bg-green-50";
        } else {
          inputClass += "border-red-500 bg-red-50";
        }
      } else {
        inputClass += "border-blue-400 focus:border-blue-600";
      }

      parts.push(
        <span key={`blank-${index}`} className="inline-block relative">
          <input
            type="text"
            value={userAnswers[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            disabled={submitted}
            className={inputClass}
            style={{ width: `${Math.max(blank.correctAnswer.length * 12, 100)}px` }}
            placeholder={blank.hint || '...'}
          />
          {submitted && !correct && (
            <div className="absolute top-full left-0 mt-1 text-xs text-green-600 whitespace-nowrap">
              ✓ {blank.correctAnswer}
            </div>
          )}
        </span>
      );

      lastIndex = blank.position + blank.correctAnswer.length;
    });

    // Ajouter le texte restant
    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end">
          {text.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Chargement du niveau...</div>
      </div>
    );
  }

  if (!niveauData || !niveauData.content.text || !niveauData.content.blanks) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Erreur: Niveau introuvable</div>
      </div>
    );
  }

  const totalBlanks = niveauData.content.blanks.length;
  const filledBlanks = Object.values(userAnswers).filter(answer => answer.trim() !== '').length;
  const canSubmit = filledBlanks === totalBlanks && !submitted;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-purple-800">
              {niveauData.name || `Niveau ${niveauData.level_number}`}
            </h1>
            {submitted && (
              <div className="text-lg font-semibold text-green-600">
                Score: {score}/{totalBlanks}
              </div>
            )}
          </div>
          
          {!submitted && (
            <div className="text-sm text-gray-600">
              Remplissez les blancs: {filledBlanks}/{totalBlanks} complétés
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p className="text-blue-800">
            📝 Complétez le texte en remplissant les blancs avec les mots appropriés.
          </p>
        </div>

        {/* Text with blanks */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-lg leading-relaxed text-gray-800">
            {renderTextWithBlanks()}
          </div>
        </div>

        {/* Hints section */}
        {niveauData.content.hints && niveauData.content.hints.length > 0 && !submitted && (
          <div className="bg-yellow-50 rounded-lg shadow p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">💡 Indices:</h3>
            <ul className="list-disc list-inside text-yellow-700 space-y-1">
              {niveauData.content.hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Feedback */}
        {submitted && (
          <div className={`p-6 rounded-lg mb-6 ${
            score === totalBlanks ? 'bg-green-100 border-2 border-green-500' : 'bg-yellow-100 border-2 border-yellow-500'
          }`}>
            <h3 className={`font-bold text-xl mb-2 ${
              score === totalBlanks ? 'text-green-800' : 'text-yellow-800'
            }`}>
              {score === totalBlanks ? '🎉 Parfait !' : `Presque ! ${score}/${totalBlanks} correct`}
            </h3>
            <p className="text-gray-700">
              {score === totalBlanks 
                ? 'Vous avez rempli tous les blancs correctement !' 
                : 'Les réponses correctes sont affichées en vert sous les blancs incorrects.'}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                canSubmit
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Valider mes réponses
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Terminer le niveau
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TexteACompleter;
