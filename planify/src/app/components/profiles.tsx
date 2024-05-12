// components/Profile.tsx
import React from 'react';

interface ProfileComponentProps {
  profileData: {
    id: number;
    name: string;
    email: string;
  };
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ profileData }) => {
  return (
    <div>
      <h1>Profil</h1>
      <p>Nom : {profileData.name}</p>
      <p>Email : {profileData.email}</p>
      { }
    </div>
  );
};

export default ProfileComponent;
