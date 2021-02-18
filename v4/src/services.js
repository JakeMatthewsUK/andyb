import { serviceInfo } from "./serviceInfo";

function fillServiceInfo(service) {
  return (
    <section key={Math.random()} className="serviceCard">
      <article>
        <h2 className="hiddenServiceTitle">{service.heading}</h2>
        <p className="hiddenServiceText">{service.description}</p>
      </article>
      <figure
        className="serviceImage"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <h2 className="serviceTitle">{service.heading}</h2>
      </figure>
    </section>
  );
}

function createCards() {
  const cards = [];

  for (const service in serviceInfo) {
    cards.push(fillServiceInfo(serviceInfo[service]));
  }

  return cards;
}

function services() {
  return (
    <main className="services">
      <h1 className="pageTitle">Services</h1>
      <section className="serviceGrid">{createCards()}</section>
    </main>
  );
}

export default services;
