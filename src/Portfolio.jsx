const Portfolio = () => {
  return (
    <>
      <div className="main-page">
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
                <span
                  className="fa-brands fa-linkedin"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/VcelakMarek">
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
            Hi, my name is <span>Marek Vcelak</span>
          </p>
          <h2>React Developer</h2>
          <p>
            I am junior frontend developer specializing on React aplications
          </p>
        </section>
      </div>

      <div className="gradient"></div>

      <div className="projects-background">
        <section id="projects">
          <h2>Projects I'm proud of</h2>
          <article>
            <div className="text">
              <h4>Latest Project</h4>
              <h3>IP Address Tracker</h3>
              <p className="blackbox">
                I choose this project because I dont use any Map API yet. I want
                to learn how to use that. You can see source code{" "}
                <a href="https://github.com/VcelakMarek/IP_Address_Tracker">
                  here
                </a>{" "}
                and aplication{" "}
                <a href="vcelakmarek.github.io/IP_Address_Tracker/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React js</li>
                <li>NPM</li>
                <li>API</li>
              </ul>
            </div>
            <img
              src="assets/IP-Address-Tracker.jpg"
              alt="Screenshot of IP_Address_Tracker."
            />
          </article>

          <article className="reverse">
            <div className="text">
              <h4>Data fetch project</h4>
              <h3>GitHub user search app</h3>
              <p className="blackbox">
                This was my first project witch API. I choose this because I
                want to learn basics of async function and data fetching. This
                project also includes light/dark mode switch. You can see source
                code{" "}
                <a href="https://github.com/VcelakMarek/GitHub_user_search_app">
                  here
                </a>{" "}
                and aplication{" "}
                <a href="vcelakmarek.github.io/GitHub_user_search_app/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React js</li>
                <li>NPM</li>
                <li>API</li>
              </ul>
            </div>
            <img
              src="assets/github-user-search-app.jpg"
              alt="Screenshot of the GitHub_user_search_app."
            />
          </article>

          <article>
            <div className="text">
              <h4>First React project</h4>
              <h3>Tic Tac Toe</h3>
              <p className="blackbox">
                This was my first React project. You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Tic_Tac_Toe">here</a>{" "}
                and aplication{" "}
                <a href="vcelakmarek.github.io/Tic_Tac_Toe/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React js</li>
                <li>CSS</li>
                <li>NPM</li>
              </ul>
            </div>
            <img
              src="./assets/tic-tac-toe.jpg"
              alt="Screenshot Tic_Tac_Toe project."
            />
          </article>
        </section>
      </div>
      {/* 
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
      </div> */}

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
            <a href="https://github.com/VcelakMarek">
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
