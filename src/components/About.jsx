import "./src/main.css";

function About() {

  return (
    <iframe
        src="public/index.html" 
                title="Iframe Example"
                width="100%" 
                height="100vh" 
                style={{ border: "none", overflow: "hidden", height: "100vh", margin: 0, padding: 0, display: "block"}}
    ></iframe>
  );
}

export default About