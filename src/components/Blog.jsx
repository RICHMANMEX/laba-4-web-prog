import blogData from "../mockData/blogData";

export const BlogCard = ({ card }) => {
  const {
    src,
    alt,
    date,
    title,
    link: { href, title: linkTitle },
    isLarge,
  } = card;

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

export const BlogCards = ({ blogCardsData }) => {
  return blogCardsData.map((card, index) => (
    <BlogCard key={index} card={card} />
  ));
};

const Blog = () => {
  const { header, blogCardsData } = blogData;

  return (
    <>
      <h2 className="blog_section_header">{header}</h2>
      <div className="blog_section_grid">
        <BlogCards blogCardsData={blogCardsData} />
      </div>
    </>
  );
};

export default Blog;
