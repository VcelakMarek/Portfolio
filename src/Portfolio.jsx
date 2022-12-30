const Portfolio = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <h1>
              <a href="index.html">
                <span className="fa-solid fa-code"></span>
                <span>Marek Vcelak</span>
              </a>
            </h1>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.github.com">
              <span
                className="fa-brands fa-github-square"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="resumelink" className="button">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <section id="intro">
        <p className="name">
          Hi, my name is <span>Marek Vcelak.</span>
        </p>
        <h2>I develop the front end of websites.</h2>
        <p>I'm a developer specializing in HTML, CSS and JS.</p>
        <p>Currently, I'm working at Inventec as IT technician.</p>
      </section>

      <div className="gradient"></div>

      <div className="projects-background">
        <section id="projects">
          <h2>Projects I'm proud of</h2>
          <article>
            <div className="text">
              <h4>Latest Project</h4>
              <h3>Wall of Wonder</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
                  this
                </a>
                , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <img
              src="img/wall of wonder.png"
              alt="Screenshot of the Wall of Wonder."
            />
          </article>

          <article className="reverse">
            <div className="text">
              <h4>Bootcamp Project</h4>
              <h3>Feed-A-Star-Mole Game</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywherein the description. A link looks like
                <a href="https://frontendmasters.github.io/bootcamp/mole">
                  this
                </a>
                , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <img
              src="img/Feed-A-Star-Mole Game.png"
              alt="Screenshot of the Frontend Masters Bootcamp."
            />
          </article>

          <article>
            <div className="text">
              <h4>Photography Project</h4>
              <h3>Wall of Wonder Collection</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/grid-figure-figcaption">
                  this
                </a>
                , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Grid</li>
              </ul>
            </div>
            <img
              src="img/Wall of Wonder Collection.png"
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </section>
      </div>

      <div className="gradient"></div>

      <div className="contact-background">
        <section id="contact">
          <h2>Contact me</h2>
          <p>
            I'm always interested in hearing about new teaching opportunities,
            writing curricula, or instructional design work.
          </p>
          <a href="mailto:mail@example.com">Email me</a>
        </section>
      </div>

      <div className="gradient"></div>

      <footer>
        <h2>Marek Vcelak &middot; Developer</h2>
        <ul>
          <li>
            <a href="https://linkedin.com">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.github.com">
              <span
                className="fa-brands fa-github-square"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="mailto:mail@example.com">
              <span className="fa-solid fa-envelope" aria-hidden="true"></span>
              <span className="sr-only">Mail</span>
            </a>
          </li>
        </ul>
        <p>
          <small> &copy; 2021 Marek Vcelak. All rights reserved. </small>
        </p>
      </footer>
    </>
  );
};

export default Portfolio;
