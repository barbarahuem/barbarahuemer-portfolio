import Skills from "../components/Skills";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div>
        <h1>About</h1>
        <p>
          I’m a <span>curious and versatile person</span> with experience in
          packaging technology, prepress, print management, floristry interior
          consulting and web development. Each step shaped how I work, blending
          precision, creativity, and practical solutions. What has always stayed
          the same is my love for creating.
        </p>
        <p>
          Whether with my hands or my laptop,
          <span> I enjoy bringing ideas to life</span>. Over time, this passion
          has led me toward design and digital spaces. For me, good design isn’t
          just about looks: it’s about clarity, usability, and making people
          feel comfortable when they interact with something. That’s why I love
          building websites that balance aesthetic appeal with intuitive user
          experience.
        </p>
        <p>
          Outside the digital world,{" "}
          <span>
            I keep my creativity alive through knitting, sketching, or
            experimenting with new ideas
          </span>
          . I also have a weakness for coffee, enjoy exploring new cities
          (especially their supermarkets), and recharge best while hiking in
          nature.
        </p>
      </div>
      <div>
        <h2>Professional Growth & Experience</h2>
        <p>
          My professional path has evolved from mastering industrial production
          logic to becoming a versatile software engineer. Through my work at{" "}
          <span>Dynatrace</span> and <span>andamp GmbH</span>, I learned how to
          build reusable design systems and scalable web applications using
          React and TypeScript. I also gained experience managing the full
          product lifecycle, which included designing interfaces in{" "}
          <span>Figma</span> and handling deployments and automated testing with
          tools like <span>Jest, Pytest, and Azure</span>. My early career at{" "}
          <span>Mondi Grünburg</span> taught me the fundamentals of workflow
          optimization and strict quality standards. Additionally, my time as a
          tutor and research assistant allowed me to develop a deeper
          understanding of web architecture and providing technical support.
        </p>
      </div>
      <div>
        <h2>Education</h2>
        <h3>Master</h3>
        <p>
          In this Master’s program, I focused on building web applications and
          exploring technologies. I developed scalable backend applications
          using <span>Java and Spring Boot</span>. My studies also provided me
          with hands-on experience in the world of Artificial Intelligence,
          specifically in building, training, and evaluating models. In
          addition, I have gained a strategic understanding of the cloud
          ecosystem and deploy services across <span>AWS, GCP, and Azure</span>{" "}
          to meet specific project needs.
        </p>
        <h3>Bachelor</h3>
        <p>
          During my Bachelor’s at FH Hagenberg, I built a strong foundation in
          digital creation and user-focused technology. I worked on projects
          using modern frontend frameworks like{" "}
          <span>React, Vue, and Next.js</span>, while also learning backend
          basics with <span>PHP and SQL</span>. Beyond web development, I
          learned how to create games using Unity and Unreal Engine, along with
          3D modeling in Maya and Blender. A key focus of my studies was
          applying <span>Human-Computer Interaction principles</span> to ensure
          every interface I design is intuitive and user-centric. I also had the
          chance to broaden my perspective during an{" "}
          <span>exchange semester</span> in Finland.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default About;
