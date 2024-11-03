// components/TripPost.tsx
import Image from 'next/image';
import { Post } from '../types';

interface TripPostProps {
  post: Post;
}

const TripPost: React.FC<TripPostProps> = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      {post.imageURL && (
        <Image
          src={post.imageURL}
          alt={post.title}
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
      )}
      <p>{post.description}</p>
    </div>
  );
};

export default TripPost;
