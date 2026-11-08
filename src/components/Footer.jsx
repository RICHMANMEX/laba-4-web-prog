import footerData from "../mockData/footerData";

export const FooterAbout = ({ footerAboutData: { logo, address, rights } }) => (
  <div className="footer_column">
    <h3 className="footer_logo">{logo}</h3>
    <p className="footer_address">
      {address.map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
    <p className="footer_rights">{rights}</p>
  </div>
);

export const FooterLinks = ({ linksColumn: { title, links } }) => (
  <div className="footer_column">
    <h4 className="footer_title">{title}</h4>
    <ul className="footer_links">
      {links.map(({ title, href }, index) => (
        <li key={index}>
          <a href={href}>{title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export const FooterContacts = ({ footerContactsData }) => {
  const { title, address, phone, email } = footerContactsData;

  return (
    <div className="footer_column">
      <h4 className="footer_title">{title}</h4>
      <p className="footer_address">{address}</p>
      <p className="footer_phone">
        <a href={phone.href}>{phone.title}</a>
      </p>
      <p className="footer_email">
        <a href={email.href}>{email.title}</a>
      </p>
    </div>
  );
};

const Footer = () => {
  const {
    footerAboutData,
    footerLinksData,
    footerContactsData,
    footerBottomData,
  } = footerData;

  return (
    <>
      <div className="footer_container">
        <FooterAbout footerAboutData={footerAboutData} />
        {footerLinksData.map((linksColumn, index) => (
          <FooterLinks key={index} linksColumn={linksColumn} />
        ))}
        <FooterContacts footerContactsData={footerContactsData} />
      </div>
      <div className="footer_bottom">
        <p>{footerBottomData}</p>
      </div>
    </>
  );
};

export default Footer;
