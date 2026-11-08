import vrData from "../mockData/vrData";

export const VrImage = ({ vrImage: { src, alt } }) => (
  <div className="vr_section_left">
    <img src={src} alt={alt} className="vr_section_image" />
  </div>
);

export const VrContent = ({ vrContent }) => {
  const {
    subtitle,
    header,
    description,
    button: { href, title },
  } = vrContent;

  return (
    <div className="vr_section_right">
      <div className="vr_section_content">
        <p className="vr_section_subtitle">{subtitle}</p>
        <h2 className="vr_section_header">
          {header.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className="vr_section_description">{description}</p>
        <a href={href} className="left_cta">
          {title}
        </a>
      </div>
    </div>
  );
};

const Vr = () => {
  const { vrImage, vrContent } = vrData;

  return (
    <>
      <VrImage vrImage={vrImage} />
      <VrContent vrContent={vrContent} />
    </>
  );
};

export default Vr;
