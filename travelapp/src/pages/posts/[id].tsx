import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { posts } from '../../data/posts';
import { Post } from '../../types';
import Link from 'next/link'; // Import Link for navigation

interface PostProps {
    post: Post | null;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
    if (!post) return <p>Post not found.</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <p>{post.content}</p>
            <Link href="/" passHref>
                <button className="back-button">Back to Posts</button>
            </Link>
        </div>
    );
};

// Generate static paths for all posts
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
};

// Fetch post data based on the dynamic route
export const getStaticProps: GetStaticProps<PostProps, { id: string }> = async (context) => {
    const { id } = context.params!;
    const post = posts.find((post) => post.id.toString() === id) || null;

    return { props: { post } };
};

export default PostPage;
