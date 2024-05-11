import React, { useState } from 'react';

const influencersData = [
  {
    id: 1,
    name: 'Influencer 1',
    followers: 1000000,
    engagementRate: 5.6,
    recentCollaborations: ['Brand A', 'Brand B'],
    likes: 150000,
  },
  {
    id: 2,
    name: 'Influencer 2',
    followers: 950000,
    engagementRate: 4.8,
    recentCollaborations: ['Brand C', 'Brand D'],
    likes: 120000,
  },
  // Add more influencers data as needed...
];

const TopInfluencers = () => {
  const [filter, setFilter] = useState('');

  const filteredInfluencers = influencersData.filter(influencer => {
    if (filter === 'likes') {
      return influencer.likes >= 100000;
    } else if (filter === 'followers') {
      return influencer.followers >= 900000;
    } else if (filter === 'engagement') {
      return influencer.engagementRate >= 5.0;
    } else if (filter === 'collaborations') {
      return influencer.recentCollaborations.length >= 2;
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Top 10 Influencers/Celebrities</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setFilter('likes')}>Likes</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setFilter('followers')}>Followers</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setFilter('engagement')}>Engagement</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setFilter('collaborations')}>Collaborations</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInfluencers.map(influencer => (
          <div key={influencer.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{influencer.name}</h3>
            <p>Followers: {influencer.followers}</p>
            <p>Engagement Rate: {influencer.engagementRate}%</p>
            <p>Recent Collaborations:</p>
            <ul className="list-disc ml-6">
              {influencer.recentCollaborations.map((collab, index) => (
                <li key={index}>{collab}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInfluencers;
