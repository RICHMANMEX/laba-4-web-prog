import vrData from "../mockData/vrData";

export const VrLeft = ({ vrLeftData: { src, alt } }) => (
  <img src={src} alt={alt} className="vr_section_image" />
);

export const VrRight = ({ vrRightData }) => {
  const {
    subtitle,
    header,
    description,
    button: { href, title },
  } = vrRightData;

  return (
    <div className="vr_section_content">
      <p className="vr_section_subtitle">{subtitle}</p>
      <h2 className="vr_section_header">{header}</h2>
      <p className="vr_section_description">{description}</p>
      <a href={href} className="left_cta">
        {title}
      </a>
    </div>
  );
};

const Vr = () => {
  const { vrLeftData, vrRightData } = vrData;

  return (
    <>
      <div className="vr_section_left">
        <VrLeft vrLeftData={vrLeftData} />
      </div>
      <div className="vr_section_right">
        <VrRight vrRightData={vrRightData} />
      </div>
    </>
  );
};

export default Vr;
