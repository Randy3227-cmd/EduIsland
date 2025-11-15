import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { saveNiveauCompletion } from '../services/gameAPI';

const CarteCompleter = ({ niveauId, userId, onComplete }) => {
  const [niveauData, setNiveauData] = useState(null);
  const [currentZoneIndex, setCurrentZoneIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(3);

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

  const handleClick = (e) => {
    if (currentZoneIndex >= niveauData.content.zones.length) return;

    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Convertir en coordonnées relatives (0-1)
    const relativeX = clickX / rect.width;
    const relativeY = clickY / rect.height;

    console.log('Clic:', { clickX, clickY, relativeX, relativeY, width: rect.width, height: rect.height });

    const currentZone = niveauData.content.zones[currentZoneIndex];
    console.log('Zone actuelle:', currentZone);
    
    // Calculer la distance en coordonnées relatives
    const dx = relativeX - currentZone.x;
    const dy = relativeY - currentZone.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    console.log('Distance:', distance, 'Radius:', currentZone.radius);

    if (distance <= currentZone.radius) {
      const newScore = score + 1;
      setFeedback({ text: `✅ Correct ! C'est bien ${currentZone.name}.`, correct: true });
      setScore(newScore);
      setAttempts(0);
      
      setTimeout(() => {
        if (currentZoneIndex < niveauData.content.zones.length - 1) {
          setCurrentZoneIndex(currentZoneIndex + 1);
          setFeedback(null);
        } else {
          completeNiveau(newScore);
        }
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= maxAttempts) {
        setFeedback({ 
          text: `❌ Raté ! C'était ${currentZone.name}. ${currentZone.hint || ''}`, 
          correct: false 
        });
        setTimeout(() => {
          if (currentZoneIndex < niveauData.content.zones.length - 1) {
            setCurrentZoneIndex(currentZoneIndex + 1);
            setFeedback(null);
            setAttempts(0);
          } else {
            completeNiveau(score);
          }
        }, 2000);
      } else {
        setFeedback({ 
          text: `❌ Mauvais endroit, réessaie ! (Tentative ${newAttempts}/${maxAttempts})`, 
          correct: false 
        });
      }
    }
  };

  const completeNiveau = async (finalScore = score) => {
    console.log('Carte - completeNiveau appelé', { userId, niveauId, finalScore });
    try {
      const totalZones = niveauData.content.zones.length;

      const result = await saveNiveauCompletion(
        userId,
        niveauId,
        finalScore,
        totalZones,
        niveauData.xp_reward
      );

      console.log('Carte - Résultat sauvegarde:', result);

      if (result.success && onComplete) {
        console.log('Carte - Appel de onComplete');
        onComplete(finalScore, totalZones, result.xpEarned);
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

  if (!niveauData || !niveauData.content.zones || !niveauData.content.image) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Erreur: Niveau introuvable</div>
      </div>
    );
  }

  const currentZone = niveauData.content.zones[currentZoneIndex];
  const progress = ((currentZoneIndex) / niveauData.content.zones.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-200 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-orange-800">
              {niveauData.name || `Niveau ${niveauData.level_number}`}
            </h1>
            <div className="text-lg font-semibold text-green-600">
              Score: {score}/{niveauData.content.zones.length}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-orange-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 mt-2 text-center">
            Zone {currentZoneIndex + 1} sur {niveauData.content.zones.length}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p className="text-blue-800 text-lg font-semibold">
            📍 {niveauData.content.question || `Trouve: ${currentZone?.name}`}
          </p>
          {currentZone?.hint && (
            <p className="text-blue-600 text-sm mt-2">
              💡 Indice: {currentZone.hint}
            </p>
          )}
        </div>

        {/* Image cliquable */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="relative">
            <img
              src={niveauData.content.image}
              alt="Carte à compléter"
              onClick={handleClick}
              className="w-full h-auto cursor-crosshair rounded-lg"
            />
          </div>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`mt-6 p-4 rounded-lg ${
            feedback.correct ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'
          }`}>
            <p className={`font-semibold text-lg ${
              feedback.correct ? 'text-green-800' : 'text-red-800'
            }`}>
              {feedback.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarteCompleter;
