import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import "./Media.css";
import { Post } from "../../types";
import { posts } from "../../constants";

const Media: React.FC = () => {
  // Dynamic Header Blur Effect
  useEffect(() => {
    const header = document.querySelector(".header-container") as HTMLElement;
    if (header) {
      header.style.backdropFilter = `blur(20px)`; // Max blur of 10px
    }
  }, []);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <div
        className="media-container"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <Helmet>
          <title>Media | Zied Zouari</title>
        </Helmet>
        <Header />
        <main className="media-main">
          <div className="blog-header">
            <h1>Coin Média</h1>
            <p>Les derniers articles qui parlent de Zied</p>
          </div>
          <div className="post-grid">
            {posts.map((post) => (
              <div
                key={post.id}
                className="post-card"
                onClick={() => setSelectedPost(post)}
              >
                <img src={post.imageUrl} alt={post.title} />
                <div className="post-content">
                  <span className="post-date">{post.date}</span>
                  <h2>{post.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for displaying the full excerpt */}
          {selectedPost && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedPost(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-modal"
                  onClick={() => setSelectedPost(null)}
                >
                  ×
                </button>
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.excerpt}</p>
                <button
                  className="category-tag"
                  onClick={() => window.open(selectedPost.link, "_blank")}
                >
                  Lire Plus sur {selectedPost.category}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Media;
