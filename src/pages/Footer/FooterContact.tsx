import footerContactData from "../../data/FooterContactData";
import FooterContactDataLoopOver from "./FooterContactDataLoopOver";

const FooterContact = () => {
  return (
    <div className="py-10 md:flex  justify-between px-10 md:px-14 md:gap-x-2 xl:px-40">
      <FooterContactDataLoopOver
        Heading="Company Info"
        infoData={footerContactData.CompanyInfo}
      />
      <FooterContactDataLoopOver
        Heading="Legal"
        infoData={footerContactData.Legal}
      />
      <FooterContactDataLoopOver
        Heading="Resources"
        infoData={footerContactData.Resources}
      />
      <FooterContactDataLoopOver
        Heading="Get In Touch"
        infoData={footerContactData.GetInTouch}
      />
    </div>
  );
};

export default FooterContact;
