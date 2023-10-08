import Address from "./Address";
import SocialMedia from "./SocialMedia";

const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <h2 className="footer-title">footer</h2>
        <Address />
        <SocialMedia />
      </div>
      <p className="rights">©2023 badzega corp. All rights Reserved.=)</p>
    </footer>
  );
};

export { TheFooter };
