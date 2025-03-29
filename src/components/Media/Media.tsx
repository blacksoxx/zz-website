import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import './Media.css';
interface Post {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
}

const Media: React.FC = () => {
    // Dynamic Header Blur Effect
    useEffect(() => {
        const header = document.querySelector('.header-container') as HTMLElement;
        if (header) {
          header.style.backdropFilter = `blur(20px)`; // Max blur of 10px
        }
      }, []);
  const posts: Post[] = [
    {
      id: '1',
      date: 'JUL 29, 2024',
      title: 'How to Build a Stunning Website with Framer',
      excerpt: 'Learn how to create an impressive website using Framer with our step-by-step guide.',
      category: 'BRANDING',
      imageUrl: '/téléchargement.jpg',
    },
    {
      id: '2',
      date: 'JUL 25, 2024',
      title: '10 website elements for maximum user engagement',
      excerpt: '10 website elements to engage users, from intuitive navigation to compelling visuals.',
      category: 'WEB DESIGN',
      imageUrl: '/1737769504-6072C6C1AEF72891.png',
    },
    {
      id: '3',
      date: 'JUL 13, 2024',
      title: 'The importance of content in driving website traffic',
      excerpt: 'Quality content is king. Learn how to create valuable, SEO-optimized content.',
      category: 'SEO',
      imageUrl: '/path/to/image.jpg',
    },
    {
      id: '4',
      date: 'JUL 1, 2024',
      title: '10 common web development mistakes to avoid',
      excerpt: '10 common web development mistakes and improve your site’s functionality and user experience.',
      category: 'DEVELOPMENT',
      imageUrl: '/path/to/image.jpg',
    },
    {
      id: '5',
      date: 'JUN 20, 2024',
      title: 'How to write content that ranks on Google',
      excerpt: 'Optimize your website with expert tips on writing content that ranks high on Google.',
      category: 'SEO',
      imageUrl: '/path/to/image.jpg',
    },
  ];

  return (
    <div className="news-container">
      <Helmet>
        <title>Media | Zied Zouari</title>
      </Helmet>
      <Header />
      <main className="news-main" style={{ backgroundImage: `url('/background.jpg')` }}>
        <div className="blog-header">
          <h1>Media Corner</h1>
          <p>Get the latest news on concerts</p>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-content">
                <span className="post-date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button className="category-tag">{post.category}</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Media;