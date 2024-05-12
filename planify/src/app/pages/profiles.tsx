// pages/profile.tsx
import React from 'react';
import ProfileComponent from '/home/jancel/Projet_Dev/planify/src/app/components/profiles';
import useSWR from 'swr'; // Utilisation de SWR pour la récupération des données
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const { data: profileData, error } = useSWR('/api/profile', async (url) => {
    const response = await axios.get(url);
    return response.data;
  });

  if (error) return <div>Erreur lors du chargement du profil</div>;
  if (!profileData) return <div>Chargement...</div>;

  return <ProfileComponent profileData={profileData} />;
};

export default ProfilePage;
