"use client";

import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ColoredLine } from "@/components/SocialMedia";
// import FormTooltip from "@/components/FormToolTip";
import { Tooltip } from "react-tooltip";

export default function ContactForm() {
  // Declare a state variables...
  const [formName, setformName] = useState("");
  const [formEmail, setformEmail] = useState("");
  const [formTel, setformTel] = useState("");
  const [formMessage, setformMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isOpenName, setIsOpenName] = useState(false);
  const [isOpenTel, setIsOpenTel] = useState(false);

  //  Clear form fields...
  function clearFormFields() {
    setformName("");
    setformEmail("");
    setformTel("");
    setformMessage("");
  }

  function isValidForm() {
    const isNameValid = formName.trim() !== "";
    const isMessageValid = formMessage.trim() !== "";
    const isEmailValid = /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(
      formEmail
    );
    const isTelValid = /^[\d()+ -]{6,14}$/.test(formTel);

    const isAtLeastOneFieldFilled = isEmailValid || isTelValid;

    return isNameValid && isMessageValid && isAtLeastOneFieldFilled;
  }
  // Отримати значення полів форми
  const name = formName;
  const email = formEmail;
  const tel = formTel;
  const message = formMessage;

  function handleSubmit(e: FormEvent) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Clear previous errors
    setNameError(false);
    setMessageError(false);
    setEmailError(false);
    setTelError(false);

    // Performing field validation
    if (!name) {
      setNameError(true);
      setIsOpenName(true);
      setTimeout(() => {
        setIsOpenName(false);
      }, 6000);
    }

    if (!message) {
      setMessageError(true);
    }

    if (!tel) {
      setTelError(true);
    }

    // if (!name || !message) {
    //   // Якщо поля formName або formMessage порожні, вивести помилку
    //   // alert('Поля "Imie" та "Wiadomość" є обовʼязковими');

    //   return;
    // }
    if (!email && !tel) {
      // Якщо обидва поля formEmail і formTel порожні, вивести помилку
      // alert('Потрібно заповнити хоча б одне з полів "Email" або "Telefon"');
      setIsOpenTel(true);
      setTimeout(() => {
        setIsOpenTel(false);
      }, 6000);
      return;
    }
    if (!isConsentChecked) {
      alert("Для відправки форми необхідна ваша згода");
      setIsConsentChecked(false);
      return;
    }

    if (/^[\d()+ -]{6,14}$/.test(formTel) || formEmail !== "") {
      console.log("Telefon OK");
      setTelError(false);
    } else {
      console.log("Telefon NOT OK");
      setTelError(true);
    }

    if (
      /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formEmail) ||
      formTel !== ""
    ) {
      console.log("Email OK");
      setEmailError(false);
    } else {
      console.log("Email NOT OK");
      setEmailError(true);
    }

    const form = e.target as HTMLFormElement;
    if (isValidForm()) {
      // Додайте перевірку, чи form дійсно є HTMLFormElement
      if (form instanceof HTMLFormElement) {
        emailjs
          .sendForm(
            "service_g1n511f",
            "template_m9senrp",
            form,

            "bQojWtV3rQeW7m3EL"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    } else {
      console.log("Форма не є валідною. Будь ласка, перевірте поля.");
    }
  }
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Napisz nam</h2>
      <ColoredLine />
      <form
        onSubmit={handleSubmit}
        //   method="post"
      >
        <div className="form-item">
          <label htmlFor="formName"></label>
          <input
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Pola Imie i Wiadomość są obowiązkowe"
            data-tooltip-place="top-start"
            className={"form-input " + (nameError ? "error" : "")}
            value={formName}
            onChange={(e) => {
              setformName(e.target.value);
              setNameError(false);
              setIsOpenName(false);
            }}
            type="text"
            name="formName"
            autoComplete="on"
            id="formName"
            placeholder="Imie (obowiązkowe)"
          />
          <Tooltip
            id="my-tooltip"
            isOpen={isOpenName}
            className="tooltip-for-name"
          />
        </div>
        <div className="form-item">
          <label htmlFor="formEmail"></label>
          <input
            className={"form-input " + (emailError ? "error" : "")}
            value={formEmail}
            onChange={(e) => {
              setformEmail(e.target.value);
              setEmailError(false);
              setIsOpenTel(false);
            }}
            type="email"
            name="formEmail"
            autoComplete="on"
            id="formEmail"
            placeholder="Email"
          />
        </div>
        <div className="form-item">
          <label htmlFor="formTel"></label>
          <input
            data-tooltip-id="tel-tooltip"
            data-tooltip-content="Wypelnij pole Telefon lub Email"
            data-tooltip-place="bottom"
            className={"form-input " + (telError ? "error" : "")}
            value={formTel}
            onChange={(e) => {
              setformTel(e.target.value);
              setTelError(false);
              setIsOpenTel(false);
            }}
            type="tel"
            name="formTel"
            autoComplete="on"
            id="formTel"
            placeholder="Telefon"
          />
          <Tooltip
            id="tel-tooltip"
            isOpen={isOpenTel}
            className="tooltip-for-tel"
          />
        </div>
        <div className="form-item">
          <label htmlFor="formMessage"></label>
          <textarea
            className={"form-input " + (messageError ? "error" : "")}
            value={formMessage}
            onChange={(e) => {
              setformMessage(e.target.value);
              setMessageError(false);
            }}
            name="formMessage"
            id="formMessage"
            cols={40}
            rows={4}
            placeholder="Wiadomość (obowiązkowe)"
          />
        </div>
        <div className="form-item">
          <input
            className={"form-checkbox " + (isConsentChecked ? "" : "error")}
            type="checkbox"
            name="formConsent"
            id="formConsent"
            // defaultChecked={true}
            checked={isConsentChecked}
            onChange={(e) => setIsConsentChecked(e.target.checked)}
          />
          <label htmlFor="formConsent">Zgoda</label>
          <button className="submit-btn" type="submit" value="Send">
            Wyslij
          </button>
        </div>
      </form>
    </div>
  );
}
