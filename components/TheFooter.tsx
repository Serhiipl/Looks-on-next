import Address from "@/components/Address";
import ContactForm from "@/components/ContactForm";
import SocialMedia from "@/components/SocialMedia";
import { kaushanRegular } from "../app/fonts";

const TheFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <ContactForm />
          <div className="contacts-wrapper">
            <h2 className={`${kaushanRegular.className} form-title`}>
              Kontakt
            </h2>
            <Address />
            <SocialMedia />
          </div>
        </div>
      </footer>
      <div className="rights-wrapper">
        <p className="rights">©2023 badzega corp. All rights Reserved.=)</p>
      </div>
    </>
  );
};

export { TheFooter };
