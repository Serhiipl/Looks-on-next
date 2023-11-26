"use client";
import Image from "next/image";
import { marcellusRegular } from "@/app/fonts";
import { poiretOneRegular } from "@/app/fonts";

export default function OfferList() {
  return (
    <section className="offer-wrapper">
      <div className="offer-hero">
        <div className="offer-title-wrapper">
          <h2 className={`${marcellusRegular.className} offer-title`}>
            Uslugi
          </h2>
        </div>
      </div>
      <div
        className={`${poiretOneRegular.variable} ${marcellusRegular.variable} services-container`}
      >
        <div className="service">
          <Image
            className="service-image"
            src="/images/offer/1700688324313.jpg"
            width={180}
            height={180}
            alt=""
          />
          <h3 className="service-title">Chce spać</h3>
          <article className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id
            facere architecto alias soluta sunt minus, itaque eius cum earum
            quas, autem, vitae modi! Reprehenderit, incidunt. Cupiditate aliquam
            nihil culpa?
          </article>
        </div>
        <div className="service">
          <Image
            className="service-image"
            src="/images/offer/1700688324313.jpg"
            width={200}
            height={200}
            alt=""
          />
          <h3 className="service-title">Regulacja brwi</h3>
          <article className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id
            facere architecto alias soluta sunt minus, itaque eius cum earum
            quas, autem, vitae modi! Reprehenderit, incidunt. Cupiditate aliquam
            nihil culpa?
          </article>
        </div>
        <div className="service">
          <Image
            className="service-image"
            src="/images/offer/1700688324313.jpg"
            width={200}
            height={200}
            alt=""
          />
          <h3 className="service-title">Farbowanie brwi</h3>
          <article className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id
            facere architecto alias soluta sunt minus, itaque eius cum earum
            quas, autem, vitae modi! Reprehenderit, incidunt. Cupiditate aliquam
            nihil culpa?
          </article>
        </div>
      </div>
    </section>
  );
}
