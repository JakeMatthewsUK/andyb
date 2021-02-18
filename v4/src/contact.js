function Contact() {
  return (
    <main className="contact">
      <h1 className="pageTitle">Contact</h1>
      <section>
        <p>Owner: Andrew Brian Walton</p>
        <p>Email: andybgardenservices@gmail.com</p>
        <p>Mobile: 07799 063905</p>
        <p>Landline: 01989 568726</p>
      </section>
      <iframe
        title="mapIframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147707.04755936348!2d-2.659518894828566!3d51.881444558410884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871b1756ca2fa75%3A0x91c96edc37f6b665!2sCoughton%2C%20Ross-on-Wye%20HR9%205SE!5e0!3m2!1sen!2suk!4v1611786442379!5m2!1sen!2suk"
        style={{
          height: "60vh",
          width: "80vh",
          border: "2px solid black",
          margin: "auto auto 50px auto",
        }}
      />
    </main>
  );
}

export default Contact;
