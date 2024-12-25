import React, { useState, useEffect } from 'react';
import BlogHeader from './BlogHeader';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import { blogPosts } from './Utils';
import { FaArrowUp, FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setVisiblePosts(blogPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-12 relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <BlogHeader />
        <div className="flex justify-end mb-4">
          <button onClick={handleHomeClick} className="text-secondary px-4 py-2 rounded hover:scale-110">
            <FaHome />
          </button>
        </div>

        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-56 bg-black-200 rounded-xl mb-4" />
                <div className="h-4 bg-black-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-black-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : visiblePosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <div
                key={post.id}
                className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard
                  post={post}
                  onLike={handleLike}
                  isLiked={likedPosts.has(post.id)}
                  onClick={handlePostClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-secondary bg-[#ffffff0f] backdrop-blur-3xl rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Stay Tuned!</h2>
            <p className="text-lg">We're working hard to bring you new content. Check back soon!</p>
          </div>
        )}
      </div>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={handleCloseModal} />
      )}

      {showScrollToTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-5 right-5 flex items-center justify-center w-12 h-12 bg-black-200 text-white rounded-full shadow-lg transition-all transform hover:scale-110 hover:shadow-2xl active:scale-95"
          style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
}

export default Blog;
