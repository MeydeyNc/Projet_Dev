import { NextApiRequest, NextApiResponse } from 'next';
import { getUserProfile } from '/home/jancel/Projet_Dev/planify/src/app/components/lib/profile';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const profileData = await getUserProfile();
      res.status(200).json(profileData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
