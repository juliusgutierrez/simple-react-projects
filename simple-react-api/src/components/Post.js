import React, { useEffect, useState } from "react";
import { deletePost, getPosts, updatePost } from "../services/postServices";
import PostForm from "./PostForm";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    console.log("Load posts");
    getPosts()
      .then((response) => {
        console.log("Posts loaded:", response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        console.log(`Post with id: ${id} deleted`);
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error(`Error deleting post with id: ${id}`, error);
      });
  };

  const startEditing = (post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm
        posts={posts}
        setPosts={setPosts}
        editingPost={editingPost}
        setEditingPost={setEditingPost}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button className="button" onClick={() => handleDelete(post.id)}>
              Delete
            </button>
            <button className="button" onClick={() => startEditing(post)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
