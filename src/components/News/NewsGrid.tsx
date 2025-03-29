import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import Header from "../Header/Header"; // Adjust the path as needed
import Footer from "../Footer/Footer"; // Adjust the path as needed
import { Helmet } from 'react-helmet';
import "./News.css";

interface NewsPost {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

const newsPosts: NewsPost[] = [
  {
    id: 1,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f91adfce94c161b3ef2bfa712eecc2018a3ec3f",
    date: "Oct 15, 2023",
    title: "New Album Release: Symphony of Strings",
    description:
      "Our latest album captures the essence of classical music with a modern twist.",
    category: "Music",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f91adfce94c161b3ef2bfa712eecc2018a3ec3f",
    date: "Oct 10, 2023",
    title: "Upcoming Concert in Paris",
    description:
      "Join us for an unforgettable evening of live music at the Grand Hall.",
    category: "Events",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f91adfce94c161b3ef2bfa712eecc2018a3ec3f",
    date: "Oct 5, 2023",
    title: "Behind the Scenes: Recording Process",
    description:
      "Get an inside look at how our latest tracks were created.",
    category: "Stories",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f91adfce94c161b3ef2bfa712eecc2018a3ec3f",
    date: "Oct 5, 2023",
    title: "Behind the Scenes: Recording Process",
    description:
      "Get an inside look at how our latest tracks were created.",
    category: "Stories",
  },
];

const NewsGrid: React.FC = () => {
  useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector('.header-container') as HTMLElement;
        if (header) {
          const scrollPosition = window.scrollY;
          header.style.backdropFilter = `blur(${Math.min(scrollPosition / 5, 10)}px)`; // Max blur of 10px
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup
      };
    }, []);
  return (
    <div className="news-page" style={{ backgroundImage: `url('/background.jpg')` }}>
      <Helmet>
              <title>Home | Zied Zouari</title>
      </Helmet>
      <Header />

      {/* Main Content */}
      <main className="news-main">
        <section className="grid">
          {newsPosts.map((post) => (
            <NewsCard
              key={post.id}
              imageUrl={post.imageUrl}
              date={post.date}
              title={post.title}
              description={post.description}
              category={post.category}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsGrid;