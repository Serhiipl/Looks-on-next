import Address from "./Address";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <ContactForm />
        <div className="contacts-wrapper">
          <h2 className="footer-title">Kontakt</h2>
          <Address />
          <SocialMedia />
        </div>
      </div>
      <p className="rights">©2023 badzega corp. All rights Reserved.=)</p>
    </footer>
  );
};

export { TheFooter };
