// components/CreatePost.tsx

import React, { useState } from 'react';

interface CreatePostProps {
    onPostCreated: (title: string, content: string) => void; // Callback for post creation
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (!title || !content) {
            setError('Please provide a title and content.');
            return;
        }

        // Call the onPostCreated prop to handle the post creation
        onPostCreated(title, content);

        // Clear form fields
        setTitle('');
        setContent('');
    };

    return (
        <div className="create-post-container">
            <h2 className="text-xl font-bold mb-2">Create New Post</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border rounded w-full p-2"
                        rows={4}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
