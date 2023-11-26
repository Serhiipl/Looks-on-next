import Address from "@/components/Address";
import ContactForm from "@/components/ContactForm";
import SocialMedia from "@/components/SocialMedia";
import { marcellusRegular } from "../app/fonts";
import { poiretOneRegular } from "../app/fonts";

export default function TheFooter() {
  return (
    <>
      <footer className={`${marcellusRegular.variable}  footer`}>
        <div className="footer-wrapper">
          <ContactForm />
          <div className="contacts-wrapper">
            <h2 className={`${marcellusRegular.className} form-title`}>
              Kontakt
            </h2>
            <Address />
            <SocialMedia />
          </div>
        </div>
      </footer>
      <div className={`${poiretOneRegular.className} rights-wrapper`}>
        <p className="rights">©2023 badzega corp. All rights Reserved.=)</p>
      </div>
    </>
  );
}
