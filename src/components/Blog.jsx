import blogData from "../mockData/blogData";

export const BlogCard = ({ blogCard }) => {
  const { src, alt, date, title, href, linkTitle, isLarge } = blogCard;

  return (
    <article className={`blog_card${isLarge ? " blog_card_large" : ""}`}>
      <img src={src} alt={alt} className="blog_card_image" />
      <div className="blog_card_content">
        <p className="blog_card_date">{date}</p>
        <h3 className="blog_card_title">{title}</h3>
        <a href={href} className="blog_card_link">
          {linkTitle}
        </a>
      </div>
    </article>
  );
};

const Blog = () => {
  const { header, blogCardsData } = blogData;

  return (
    <>
      <h2 className="blog_section_header">
        {header.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>
      <div className="blog_section_grid">
        {blogCardsData.map((blogCard, index) => (
          <BlogCard key={index} blogCard={blogCard} />
        ))}
      </div>
    </>
  );
};

export default Blog;
