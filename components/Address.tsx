import { ColoredLine } from "./SocialMedia";

export function CallTo() {
  return (
    <div className="callTo-wrapper">
      <span className="icon-phone1"></span>
      <a className="callTo" href="tel:+48530540396">
        +48530540396
      </a>
    </div>
  );
}

export function MaillTo() {
  return (
    <div className="maillTo-wrapper">
      <span className="icon-mail"></span>
      <a className="mailTo" href="mailto:katerynasukhovetska@gmail.com">
        katerynasukhovetska@gmail.com
      </a>
    </div>
  );
}

export default function Address() {
  return (
    <>
      <ColoredLine />
      <address className="address-wrapper">
        <span className="icon-map-marker1"></span>
        <p className="footer_addres_paragraf ">
          Antoniego Lendziona 5B/2 <br />
          80-178 Gdańsk
        </p>
      </address>
      <CallTo />
      <MaillTo />
    </>
  );
}
