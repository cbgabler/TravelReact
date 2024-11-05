"use client";

import React, { useState } from 'react';
import { posts as initialPosts } from '../data/posts';
import PostItem from '../components/postItem';
import CreatePost from '../components/createPost'; // Import the CreatePost component
import { Post } from '../types'; // Import the Post type

const Main: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>(initialPosts); // Use local state for posts

    const handlePostCreated = (title: string, content: string) => {
        // Ask the user if they want to create a post
        const confirmCreate = window.confirm(
            "This post will be public for users of the site. You can create or delete your posts. Do you want to create this post?"
        );

        if (confirmCreate) {
            const newPost: Post = {
                id: Date.now(), // Generate a unique ID as a number
                title,
                content,
                createdAt: new Date().toISOString(),
            };
            setPosts((prevPosts) => [...prevPosts, newPost]); // Update the posts state
        }
    };

    const handleResetData = () => {
        // Ask for confirmation before resetting data
        const confirmReset = window.confirm("Are you sure you want to reset all data? This action cannot be undone.");
        if (confirmReset) {
            localStorage.clear(); // Clear local storage
            window.location.reload(); // Reload the page
        }
    };

    return (
        <div>
            <div>
                Welcome to my Travel App! Click on the posts below to start viewing posts! 
                You can always come back to the home page at any time using the navigation bar at the top of the screen!
                Here's how you can use the app:
                1. Create a post by filling out the form.
                2. Click on a post to view or delete it.
            </div>
            <CreatePost onPostCreated={handlePostCreated} /> {/* Include the CreatePost component */}
            <div>
                <h1>Blog Posts</h1>
                {posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
            <div className="signup-container">
                <button onClick={handleResetData}>
                    Reset Data
                </button>
            </div>
        </div>
    );
};

export default Main;
