import React from 'react';
import { Heart, MessageCircle, Share2, Eye } from 'lucide-react';
import { formatDate } from './Utils';

const BlogCard = ({ post, onLike, isLiked, onClick }) => {

  return (
    <article 
      className="group bg-gradient-to-br from-black to-transparent rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] transition-all duration-500 relative cursor-pointer"
      onClick={() => onClick(post)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-secondary/90 text-gray-200 text-sm rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-3">
          <img 
            src={post.authorImage} 
            alt={post.author}
            className="w-10 h-10 rounded-full border-2 border-black-100"
          />
          <div>
            <h3 className="text-secondary font-medium">{post.author}</h3>
            <p className="text-gray-400 text-sm">{formatDate(post.date)}</p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-black-100 transition-colors duration-300">
          {post.title}
        </h2>
        
        <p className="text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-6">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onLike(post.id);
              }}
              className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors group`}
            >
              <Heart 
                size={18} 
                className={`${isLiked ? 'fill-current' : ''} transform group-hover:scale-110 transition-transform`} 
              />
              <span>{post.likes}</span>
            </button>
            
            <button 
              onClick={(e) => e.stopPropagation()} 
              className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
            >
              <Eye size={18} />
              <span>{post.views}</span>
            </button>
          </div>
          
          {/* <div className="flex items-center gap-3">
            <button 
              onClick={(e) => e.stopPropagation()} 
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <Share2 size={18} />
            </button>
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
