import { supabase } from '../services/supabaseClient';

/**
 * Enregistre le score d'un niveau terminé et met à jour l'XP de l'utilisateur
 * @param {string} userId - ID de l'utilisateur
 * @param {number} niveauId - ID du niveau
 * @param {number} score - Score obtenu
 * @param {number} maxScore - Score maximum possible
 * @param {number} xpReward - XP de base du niveau
 * @returns {Promise<{success: boolean, xpEarned: number, error?: any}>}
 */
export const saveNiveauCompletion = async (userId, niveauId, score, maxScore, xpReward) => {
  console.log('saveNiveauCompletion - Début', { userId, niveauId, score, maxScore, xpReward });
  
  try {
    // Calculer l'XP en fonction du pourcentage de réussite
    const percentage = (score / maxScore) * 100;
    const xpEarned = Math.round((percentage / 100) * xpReward);

    console.log('saveNiveauCompletion - XP calculé:', { percentage, xpEarned });

    // Sauvegarder le score (sans max_score car la colonne n'existe pas)
    const scoreData = {
      user_id: userId,
      niveau_id: niveauId,
      score: score,
      completed_at: new Date().toISOString()
    };

    console.log('saveNiveauCompletion - Insertion score:', scoreData);

    const { data: insertedScore, error: scoreError } = await supabase
      .from('scores')
      .insert(scoreData)
      .select();

    if (scoreError) {
      console.error('saveNiveauCompletion - Erreur insertion score:', scoreError);
      throw scoreError;
    }

    console.log('saveNiveauCompletion - Score inséré:', insertedScore);

    // Mettre à jour l'XP de l'utilisateur
    console.log('saveNiveauCompletion - Récupération user XP pour:', userId);
    
    const { data: userData, error: fetchError } = await supabase
      .from('users')
      .select('xp_total')
      .eq('id', userId)
      .single();

    if (fetchError) {
      console.error('saveNiveauCompletion - Erreur fetch user:', fetchError);
      throw fetchError;
    }

    console.log('saveNiveauCompletion - User data:', userData);

    if (userData) {
      const newXP = userData.xp_total + xpEarned;
      console.log('saveNiveauCompletion - Mise à jour XP:', { ancien: userData.xp_total, nouveau: newXP });
      
      const { error: updateError } = await supabase
        .from('users')
        .update({ xp_total: newXP })
        .eq('id', userId);

      if (updateError) {
        console.error('saveNiveauCompletion - Erreur update XP:', updateError);
        throw updateError;
      }

      console.log('saveNiveauCompletion - XP mis à jour avec succès');
    }

    console.log('saveNiveauCompletion - Succès total:', { xpEarned });
    return { success: true, xpEarned };
  } catch (error) {
    console.error('saveNiveauCompletion - Erreur globale:', error);
    return { success: false, xpEarned: 0, error };
  }
};

/**
 * Récupère les meilleurs scores d'un utilisateur pour un niveau
 * @param {string} userId - ID de l'utilisateur
 * @param {number} niveauId - ID du niveau
 * @returns {Promise<{bestScore: number, attempts: number}>}
 */
export const getNiveauStats = async (userId, niveauId) => {
  try {
    const { data, error } = await supabase
      .from('scores')
      .select('score')
      .eq('user_id', userId)
      .eq('niveau_id', niveauId)
      .order('score', { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      return {
        bestScore: data[0].score,
        attempts: data.length
      };
    }

    return { bestScore: 0, attempts: 0 };
  } catch (error) {
    console.error('Erreur lors de la récupération des stats:', error);
    return { bestScore: 0, attempts: 0 };
  }
};

/**
 * Récupère l'XP total d'un utilisateur
 * @param {string} userId - ID de l'utilisateur
 * @returns {Promise<number>}
 */
export const getUserXP = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('xp_total')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data?.xp_total || 0;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'XP:', error);
    return 0;
  }
};

/**
 * Vérifie si un utilisateur a déjà complété un niveau
 * @param {string} userId - ID de l'utilisateur
 * @param {number} niveauId - ID du niveau
 * @returns {Promise<boolean>}
 */
export const hasCompletedNiveau = async (userId, niveauId) => {
  try {
    const { data, error } = await supabase
      .from('scores')
      .select('id')
      .eq('user_id', userId)
      .eq('niveau_id', niveauId)
      .limit(1);

    if (error) throw error;
    return data && data.length > 0;
  } catch (error) {
    console.error('Erreur lors de la vérification du niveau:', error);
    return false;
  }
};
