import { Post } from '../types';

interface TripPostProps {
  post: Post;
}

const TripPost: React.FC<TripPostProps> = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-500 text-sm">{post.createdAt.toLocaleDateString()}</p>
    </div>
  );
};

export default TripPost;
