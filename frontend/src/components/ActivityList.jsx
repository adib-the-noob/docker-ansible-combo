import React from 'react';

const ActivityList = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p>No recent activities</p>;
  }

  return (
    <ul className="activities-list">
      {activities.map((activity) => (
        <li key={activity.id}>
          <p>{activity.action}</p>
          <span className="timestamp">
            {new Date(activity.timestamp).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
