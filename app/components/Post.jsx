import React from 'react';
import DeletePostButton from './DeletButton';
const Post = ({ id, title, content, authorName }) => (
    <div className="border border-gray-300 p-4 my-4 rounded-lg bg-gray-100 text-black dark:bg-gray-800 dark:text-white" key={id}>
    <h2 className="text-xl mb-2">{title}</h2>
    <p className="mb-2">{content}</p>
    <h3 className="italic text-gray-600 dark:text-gray-400">Author: {authorName}</h3>
    <DeletePostButton postId={id} />
  </div>
);

export default Post;
