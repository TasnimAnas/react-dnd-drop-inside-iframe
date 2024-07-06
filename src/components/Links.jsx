import LinkButton from "./LinkButton";

const Links = () => {
  const links = [
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.facebook.com",
    "https://www.amazon.com",
    "https://www.wikipedia.org",
    "https://www.twitter.com",
    "https://www.instagram.com",
    "https://www.linkedin.com",
    "https://www.netflix.com",
    "https://www.reddit.com",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
        justifyContent: "center",
      }}
    >
      {links.map((link, index) => (
        <LinkButton key={index} link={link} />
      ))}
    </div>
  );
};
export default Links;
