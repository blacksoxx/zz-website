import React from "react";
import "./News.css";

interface NewsCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  date,
  title,
  description,
  category,
}) => {
  return (
      <article className="news-card">
      {/* Image */}
      <img src={imageUrl} alt={title} />
      {/* Date */}
      <time>{date}</time>
      {/* Title */}
      <h2>{title}</h2>
      {/* Description */}
      <p>{description}</p>
      {/* Category */}
      <span>{category}</span>
    </article>
  );
};

export default NewsCard;