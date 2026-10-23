import purpleBannerData from "../mockData/purpleBannerData";

const PurpleBanner = () => {
  const {
    subtitle,
    header,
    button: { title },
  } = purpleBannerData;

  return (
    <div className="purple_banner_content">
      <div className="purple_banner_text">
        <p className="purple_banner_subtitle">{subtitle}</p>
        <h2 className="purple_banner_header">{header}</h2>
      </div>
      <button className="purple_banner_btn btn">{title}</button>
    </div>
  );
};

export default PurpleBanner;
