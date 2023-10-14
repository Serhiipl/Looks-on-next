import React from "react";
import { useState } from "react";
import { ColoredLine } from "./SocialMedia";

export default function ContactForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Napisz nam</h2>
      <ColoredLine />
      <form action="" method="post">
        <div className="form-item">
          <label htmlFor="form-name"></label>
          <input
            type="text"
            name="form-name"
            autoComplete="on"
            id="form-name"
            placeholder="Imie"
          />
        </div>
        <div className="form-item">
          <label htmlFor="form-email"></label>
          <input
            type="email"
            name="form-email"
            autoComplete="on"
            id="form-email"
            placeholder="Email"
          />
        </div>
        <div className="form-item">
          <label htmlFor="form-tel"></label>
          <input
            type="tel"
            name="form-tel"
            autoComplete="on"
            id="form-tel"
            placeholder="Telefon"
          />
        </div>
        <div className="form-item">
          <label htmlFor="form-message"></label>
          <textarea name="form-message" id="form-message" cols={40} rows={6} />
        </div>
        <div className="form-item">
          <input type="checkbox" name="form-consent" id="form-consent" />
          <label htmlFor="form-consent">Zgoda</label>
          <button className="submit-btn" type="submit">
            Wyslij
          </button>
        </div>
      </form>
    </div>
  );
}
