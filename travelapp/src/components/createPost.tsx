// components/CreatePost.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Post } from '../types';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let imageURL = '';

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageURL = await getDownloadURL(imageRef);
    }

    const newPost: Omit<Post, 'id'> = {
      title,
      description,
      imageURL,
      createdAt: new Date()
    };
    await addDoc(collection(db, 'posts'), newPost);

    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      ></textarea>
      <input type="file" onChange={handleImageChange} />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
