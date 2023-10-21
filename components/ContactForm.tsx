"use client";

import React, { FormEvent, useState } from "react";
import { ColoredLine } from "./SocialMedia";

export default function ContactForm() {
  // Declare a state variables...
  const [formName, setformName] = useState("");
  const [formEmail, setformEmail] = useState("");
  const [formTel, setformTel] = useState("");
  const [formMessage, setformMessage] = useState("");
  //  Clear form fields...
  function clearFormFields() {
    setformName("");
    setformEmail("");
    setformTel("");
    setformMessage("");
  }

  //   function emailTest() {
  //     return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formEmail);
  //   }

  //   function telTest() {
  //     return !/^[\d+][\d() -]{6,14}\d$/.test(formTel);
  //   }
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
    // Виконати валідацію полів
    if (!name || !message) {
      // Якщо поля formName або formMessage порожні, вивести помилку
      alert('Поля "Imie" та "Wiadomość" є обовʼязковими');
      return;
    }
    if (!email && !tel) {
      // Якщо обидва поля formEmail і formTel порожні, вивести помилку
      alert('Потрібно заповнити хоча б одне з полів "Email" або "Telefon"');
      return;
    }

    if (/^[\d()+ -]{6,14}$/.test(formTel) || formEmail !== "") {
      console.log("Telefon OK");
    } else {
      console.log("Telefon NOT OK");
    }

    if (
      /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formEmail) ||
      formTel !== ""
    ) {
      console.log("Email OK");
    } else {
      console.log("Email NOT OK");
    }

    // if (!email && !tel) {
    //   // Якщо обидва поля formEmail і formTel порожні, вивести помилку
    //   alert("Należy wypełnić co najmniej jedno z pól „E-mail” lub „Telefon”.");
    //   return;
    // }
    // if (!name || !message) {
    //   // Якщо поля formName або formMessage порожні, вивести помилку
    //   alert("Pola „Imie” i „Wiadomość” są obowiązkowe");
    //   return;
    // }

    // let emailValid = true;
    // let telValid = true;

    // if (!email && !tel) {
    //   // Якщо обидва поля formEmail і formTel порожні, вивести помилку
    //   alert('Потрібно заповнити хоча б одне з полів "Email" або "Telefon"');
    //   emailValid = false;
    //   telValid = false;
    // } else {
    //   if (/^[\d()+ -]{6,14}$/.test(formTel) && formEmail == "") {
    //     console.log("Telefon OK");
    //     // telValid = true;
    //   } else if (/^[\d()+ -]{6,14}$/.test(formTel) && formEmail !== "") {
    //     console.log("Telefon NOT OK");
    //     telValid = false;
    //   }

    //   if (
    //     /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formEmail) &&
    //     formTel == ""
    //   ) {
    //     console.log("Email OK");
    //     // emailValid = true;
    //   } else if (
    //     /^[\w+.-]+@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formEmail) &&
    //     formTel !== ""
    //   ) {
    //     console.log("Email NOT OK");
    //     emailValid = false;
    //   }
    // }
    // if (isValidForm() && (emailValid || telValid)) {
    if (isValidForm()) {
      // Read the form data
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      //   console.log(form.formName.value);

      // You can pass formData as a fetch body directly:
      fetch("/some-api", { method: form.method, body: formData });

      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    } else {
      console.log("Форма не є валідною. Будь ласка, перевірте поля.");
    }
  }
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Napisz nam</h2>
      <ColoredLine />
      <form onSubmit={handleSubmit} method="post">
        <div className="form-item">
          <label htmlFor="formName"></label>
          <input
            value={formName}
            onChange={(e) => setformName(e.target.value)}
            type="text"
            name="formName"
            autoComplete="on"
            id="formName"
            placeholder="Imie"
          />
        </div>
        <div className="form-item">
          <label htmlFor="formEmail"></label>
          <input
            value={formEmail}
            onChange={(e) => {
              setformEmail(e.target.value);
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
            value={formTel}
            onChange={(e) => {
              setformTel(e.target.value);
            }}
            type="tel"
            name="formTel"
            autoComplete="on"
            id="formTel"
            placeholder="Telefon"
          />
        </div>
        <div className="form-item">
          <label htmlFor="formMessage"></label>
          <textarea
            value={formMessage}
            onChange={(e) => {
              setformMessage(e.target.value);
            }}
            name="formMessage"
            id="formMessage"
            cols={40}
            rows={4}
          />
        </div>
        <div className="form-item">
          <input
            type="checkbox"
            name="formConsent"
            id="formConsent"
            defaultChecked={true}
          />
          <label htmlFor="formConsent">Zgoda</label>
          <button className="submit-btn" type="submit">
            Wyslij
          </button>
        </div>
      </form>
    </div>
  );
}
