import React from "react";
import Post from "./Post";

const UserPosts = () => {
  // Example user IDs
  const userIDs = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
  ];

  return (
    <div>
      {userIDs.map((userId) => (
        <Post key={userId} userId={userId} />
      ))}
    </div>
  );
};

export default UserPosts;
