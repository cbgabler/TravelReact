"use client";
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import TripPost from '../components/tripPost';
import CreatePost from '../components/createPost'
import { Post } from '../types';

const Main: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await getDocs(collection(db, 'posts'));
      const fetchedPosts = postsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate()
      })) as Post[];
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost />
      {posts.map((post) => (
        <TripPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Main;
