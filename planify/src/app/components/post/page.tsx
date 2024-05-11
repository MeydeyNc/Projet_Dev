// pages/posts.tsx

import { useState, useEffect } from 'react';
import prisma from '/home/jancel/Projet_Dev/planify/prisma/schema.prisma';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [updatingPostId, setUpdatingPostId] = useState(null);
  const [updatedPostContent, setUpdatedPostContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const fetchedPosts = await prisma.post.findMany();
    setPosts(fetchedPosts);
  };

  const createPost = async () => {
    await prisma.post.create({
      data: {
        content: newPostContent,
      },
    });
    setNewPostContent('');
    fetchPosts();
  };

  const updatePost = async () => {
    await prisma.post.update({
      where: {
        id: updatingPostId,
      },
      data: {
        content: updatedPostContent,
      },
    });
    setUpdatingPostId(null);
    setUpdatedPostContent('');
    fetchPosts();
  };

  const deletePost = async (postId) => {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    fetchPosts();
  };

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <h2>Create Post</h2>
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button onClick={createPost}>Create</button>
      </div>
      <div>
        <h2>Update Post</h2>
        <input
          type="text"
          value={updatedPostContent}
          onChange={(e) => setUpdatedPostContent(e.target.value)}
        />
        <button onClick={updatePost}>Update</button>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.content}
              <button onClick={() => setUpdatingPostId(post.id)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsPage;
