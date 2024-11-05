import React from 'react';
import Link from 'next/link';
import { Post } from '../types';

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <div className="post-item">
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default PostItem;
