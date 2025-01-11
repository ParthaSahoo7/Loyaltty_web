import React from "react";

const benefits = [
  {
    title: "Keep your customers returning to you with a modern and Branded Loyalty Program",
    description: "Don't let your customers move to your competitors after their first visit! Build a powerful, mobile-first, and engaging loyalty program that turns your first-time visitors into repeat customers.",
    buttonText: "Learn More",
    linkText: "See loyalty library",
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sales-representative-illustration_23-2149347412.jpg?t=st=1736243444~exp=1736247044~hmac=157727654c11482ac955565be687f247a212588002b3c8124d841b784c463b69&w=996", // Replace with actual image URL
  },
  {
    title: "Bring new customers from your existing loyal customers with a Referral Marketing Program",
    description: "Design your own referral program, share exciting referral rewards, and let your customers bring you new customers. A sure-shot way to get more customers even when you're asleep!",
    buttonText: "Learn More",
    image: "https://img.freepik.com/free-vector/boxing-day-sale-instagram-stories-collection_23-2148734034.jpg?t=st=1736243247~exp=1736246847~hmac=2a25d3d60ea7fa5721307172f8067d7a2fb17e28664f4a46fdd1833dcdb0760b&w=996", // Replace with actual image URL
  },
  {
    title: "Earn more 5-star online reviews and boost your Online Reputation, automatically.",
    description: "Take your customers’ positive reviews online and let the world know how well your business is doing. An automatic way to boost your online reputation, attract new customers and get some more sales.",
    buttonText: "Learn More",
    image: "https://img.freepik.com/free-vector/isometric-self-service-cashier_23-2148562612.jpg?t=st=1736243723~exp=1736247323~hmac=9b89f096061800ad6f97b6f6a5bcdb7a6abec9dce6f6eb8baf30d9f9ebd49a9a&w=740", // Replace with actual image URL
  },
];

const BenefitCard = ({ title, description, buttonText, linkText, image }) => (
  <div style={styles.card}>
    <img src={image} alt={title} style={styles.image} />
    <div style={styles.textContent}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <div style={styles.actions}>
        <button style={styles.button}>{buttonText}</button>
        {linkText && <a href="#" style={styles.link}>{linkText}</a>}
      </div>
    </div>
  </div>
);

const Benefit = () => (
  <div style={styles.container}>
    <h2 style={styles.heading}>All the tools and insights you need for</h2>
    <h1 style={styles.mainTitle}>More customers. More sales. Stronger brand.</h1>
    <div style={styles.cardsContainer}>
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} {...benefit} />
      ))}
    </div>
  </div>
);

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "18px",
    color: "#555",
  },
  mainTitle: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fff",
    textAlign: "left",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "800px",
    gap: "20px",
  },
  image: {
    width: "40%",
    height: "auto",
    borderRadius: "8px",
  },
  textContent: {
    width: "60%",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  link: {
    fontSize: "14px",
    color: "#007BFF",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Benefit;