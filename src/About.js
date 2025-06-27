const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 text-white" data-aos="fade-up">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
        About <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent font-extrabold">Me</span>
      </h2>

      <section className="space-y-6 text-base sm:text-lg leading-relaxed">
        <p>
          Hello! My name is <b className="text-cyan-300">Mithun</b>, and I am an aspiring <b>Full Stack Developer</b> with a passion 
          for creating seamless and dynamic web applications. I'm currently honing my skills in 
          both front-end and back-end development, eager to bring innovative ideas to life through code.
        </p>

        <p>
          I am pursuing a B.Tech in Information Technology at <b>Chennai Institute of Technology</b>, Chennai. 
          My coursework has provided a strong foundation in computer science principles, software 
          development, and modern web technologies.
        </p>

        <p>
          I'm driven by curiosity and a desire to build applications that solve real-world problems. 
          Full Stack Development excites me because it allows me to contribute across the entire development stack — 
          from designing responsive user interfaces to building robust backend systems.
        </p>

        <p>
          Outside of coding, I enjoy playing <b className="text-cyan-300">cricket</b>, which helps me stay balanced and inspired. 
          I'm also an avid learner, always exploring new challenges and opportunities to grow both personally and professionally.
        </p>
      </section>
    </div>
  );
};

export default About;
