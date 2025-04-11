import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "./News.css";
import { newsPosts } from "../../constants";
import { NewsPost } from "../../types";

const NewsGrid: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<NewsPost | null>(null);
  // Dynamic Header Blur Effect
  useEffect(() => {
    const header = document.querySelector(".header-container") as HTMLElement;
    if (header) {
      header.style.backdropFilter = `blur(20px)`;
    }
  }, []);

  return (
    <>
      <div
        className="news-page"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <Helmet>
          <title>Home | Zied Zouari</title>
        </Helmet>
        <Header />
        <main className="news-main">
          <div className="blog-header">
            <h1>Coin Média</h1>
            <p>Les derniers articles qui parlent de Zied</p>
          </div>
          <section className="grid">
            {newsPosts.map((post) => (
              <div
                key={post.id}
                className="news-card"
                onClick={() => setSelectedPost(post)}
              >
                <img src={post.imageUrl} alt={post.title} />
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
                  <p>{post.category}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Modal for displaying the full description */}
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
                <p>{selectedPost.description}</p>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NewsGrid;
