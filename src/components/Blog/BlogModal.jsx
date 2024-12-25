import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { formatDate } from './Utils';

const BlogModal = ({ post, onClose }) => {
  const [showFollowOptions, setShowFollowOptions] = useState(false);

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `Check out this blog: ${post.title}`,
        text: post.excerpt,
        url: window.location.href,
      })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this device/browser.');
    }
  };

  const toggleFollowOptions = (e) => {
    e.stopPropagation();
    setShowFollowOptions((prev) => !prev);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-gradient-to-br from-black to-transparent rounded-xl w-full max-w-4xl relative overflow-y-auto max-h-screen custom-scroll">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black text-gray-400 hover:text-white hover:bg-black-100 transition-colors z-50"
          >
            <FaTimes size={16} />
          </button>

          {/* Hero Image */}
          <div className="relative h-72 rounded-t-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <span className="px-3 py-1 bg-secondary/90 text-white text-sm rounded-full mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl font-bold text-white mb-2">{post.title}</h1>
              <div className="flex items-center gap-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full border-2 border-black-100"
                />
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-gray-300 text-sm">{formatDate(post.date)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 bg-black rounded-b-xl space-y-8">
            <div className="max-w-full text-md overflow-hidden">
              {post.content && post.content.length > 0 ? (
                post.content.map((section, index) => (
                  <div key={index} className="space-y-2">
                    <hr className="mt-2 border-1 border-secondary border-dotted opacity-50" />
                    <h2 className="text-xl font-semibold mt-2 text-secondary">{section.title}</h2>
                    <div className="text-gray-300">
                      {Array.isArray(section.data) ? (
                        section.data.map((item, idx) => (
                          <div key={idx} className="mb-4">
                            {item.point ? (
                              <div>
                                <strong className="text-black-100">{item.point}:</strong> {item.description}
                              </div>
                            ) : (
                              <div>
                                {item.example && <strong className="text-gray-400">{item.example}: </strong>}
                                {item.description}
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <p>{section.data}</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-red-800">No content available.</p>
              )}
            </div>

            {/* Engagement Stats */}
            <div className="mt-8 pt-6 border-t border-gray-700/50 flex flex-col md:flex-row items-start md:items-center justify-between text-gray-400 gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-300">👁️ {post.views || 0} views</span>
                <span className="text-gray-300">❤️ {post.likes || 0} likes</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-full bg-black border border-black-100 hover:bg-secondary transition-colors"
                >
                  Share
                </button>
                <button
                  onClick={toggleFollowOptions}
                  className="px-4 py-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  Follow Author
                </button>
              </div>
            </div>

            {/* Follow Options Icons */}
            {showFollowOptions && (
              <div className="flex justify-end items-end gap-3 text-xl mt-4">
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary hover:text-white transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary hover:text-white transition-colors"
                >
                  <FaXTwitter />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
