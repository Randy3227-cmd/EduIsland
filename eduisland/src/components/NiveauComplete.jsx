import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NiveauComplete = ({ 
  score, 
  maxScore, 
  xpEarned, 
  niveauNumber,
  onRetry,
  onNext,
  onReturnToMatiere 
}) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / maxScore) * 100);
  const isPerfect = score === maxScore;
  const isGood = percentage >= 70;

  const getMessage = () => {
    if (isPerfect) return "🎉 Parfait !";
    if (isGood) return "👍 Bien joué !";
    return "💪 Continue d'essayer !";
  };

  const getEmoji = () => {
    if (isPerfect) return "⭐⭐⭐";
    if (isGood) return "⭐⭐";
    return "⭐";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
      >
        {/* Étoiles */}
        <div className="text-6xl mb-4">
          {getEmoji()}
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          {getMessage()}
        </h2>

        <p className="text-gray-600 mb-6">
          Niveau {niveauNumber} terminé
        </p>

        {/* Score */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
          <div className="flex justify-around items-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Score</p>
              <p className="text-3xl font-bold text-blue-600">
                {score}/{maxScore}
              </p>
            </div>
            
            <div className="w-px h-12 bg-gray-300"></div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Précision</p>
              <p className="text-3xl font-bold text-purple-600">
                {percentage}%
              </p>
            </div>
            
            <div className="w-px h-12 bg-gray-300"></div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">XP Gagné</p>
              <p className="text-3xl font-bold text-green-600">
                +{xpEarned}
              </p>
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-full ${
                isPerfect ? 'bg-gradient-to-r from-green-400 to-green-600' :
                isGood ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                'bg-gradient-to-r from-yellow-400 to-orange-500'
              }`}
            ></motion.div>
          </div>
        </div>

        {/* Commentaire personnalisé */}
        <p className="text-gray-700 mb-8 italic">
          {isPerfect && "Incroyable ! Tu maîtrises parfaitement ce niveau !"}
          {!isPerfect && isGood && "Très bien ! Encore un petit effort pour la perfection !"}
          {!isPerfect && !isGood && "N'hésite pas à réessayer pour améliorer ton score !"}
        </p>

        {/* Boutons d'action */}
        <div className="space-y-3">
          {!isPerfect && (
            <button
              onClick={onRetry}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              🔄 Réessayer
            </button>
          )}
          
          {onNext && (
            <button
              onClick={onNext}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              ➡️ Niveau suivant
            </button>
          )}
          
          <button
            onClick={onReturnToMatiere}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            📚 Retour à la matière
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NiveauComplete;
