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
              <a href="https://cz.linkedin.com/in/marek-v%C4%8Del%C3%A1k-6176bb1b0">
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
              <a href="./Resume.pdf" className="button">
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
          <h2>Main projects</h2>
          <article>
            <div className="text">
              <h4>Latest Project</h4>
              <h3>IP Address Tracker</h3>
              <p className="blackbox">
                This application displays informations about entered IP adress
                and show location on map. After opening this application it will
                be displayed informatins about your IP address. You can see
                source code{" "}
                <a href="https://github.com/VcelakMarek/IP_Address_Tracker">
                  here
                </a>{" "}
                and aplication{" "}
                <a href="https://vcelakmarek.github.io/IP_Address_Tracker/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React js</li>
                <li>SASS</li>
                <li>Ipifi API</li>
                <li>Leaflet maps</li>
                <li>Vite</li>
                <li>Prettier</li>
              </ul>
            </div>
            <img
              src="./IP-Address-Tracker.jpg"
              alt="Screenshot of IP_Address_Tracker."
            />
          </article>

          <article className="reverse">
            <div className="text">
              <h4>Data fetch project</h4>
              <h3>GitHub user search app</h3>
              <p className="blackbox">
                This aplication display details about any user on GitHub. I
                choose this because I want to learn basics of async function and
                data fetching. This project also includes light/dark mode
                switch. You can see source code{" "}
                <a href="https://github.com/VcelakMarek/GitHub_user_search_app">
                  here
                </a>{" "}
                and aplication{" "}
                <a href="https://vcelakmarek.github.io/GitHub_user_search_app/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React js</li>
                <li>API</li>
                <li>Vite</li>
                <li>Prettier</li>
              </ul>
            </div>
            <img
              src="./github-user-search-app.jpg"
              alt="Screenshot of the GitHub_user_search_app."
            />
          </article>

          <article>
            <div className="text">
              <h4>First React project</h4>
              <h3>Tic Tac Toe</h3>
              <p className="blackbox">
                This was my first React project and also my most complex project
                yet. You can choose mark and play with another player or play
                agains CPU. Aplication counts each player wins. You can see
                source code{" "}
                <a href="https://github.com/VcelakMarek/Tic_Tac_Toe">here</a>{" "}
                and aplication{" "}
                <a href="https://vcelakmarek.github.io/Tic_Tac_Toe/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React js</li>
                <li>CSS</li>
                <li>Vite</li>
                <li>Prettier</li>
              </ul>
            </div>
            <img
              src="./tic-tac-toe.jpg"
              alt="Screenshot Tic_Tac_Toe project."
            />
          </article>
        </section>
      </div>

      <div className="gradient"></div>

      <div className="other-projects-background">
        <section id="projects">
          <h2>Other projects</h2>
          <article>
            <div className="text">
              <h4>Another JS project</h4>
              <h3>Password generator</h3>
              <p className="blackbox">
                This application create a password according to the selected
                options and length. You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Password_generator">
                  here
                </a>{" "}
                and aplication{" "}
                <a href="https://vcelakmarek.github.io/Password_generator/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </div>
            <img
              src="./password-generator.jpg"
              alt="Screenshot of Password_generator."
            />
          </article>

          <article className="reverse">
            <div className="text">
              <h4>First JS project</h4>
              <h3>Calculator</h3>
              <p className="blackbox">
                This is just normal Calculator. You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Calculator">here</a> and
                aplication{" "}
                <a href="https://vcelakmarek.github.io/Calculator//"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </div>
            <img src="./calculator.jpg" alt="Screenshot of the Calculator." />
          </article>

          <article>
            <div className="text">
              <h4>First CSS project</h4>
              <h3>Pricing component</h3>
              <p className="blackbox">
                This was my first CSS project. You can see source code{" "}
                <a href="https://github.com/VcelakMarek/First_Project">here</a>{" "}
                and aplication{" "}
                <a href="https://vcelakmarek.github.io/First_Project/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </div>
            <img
              src="./pricing-component.jpg"
              alt="Screenshot pricing_component."
            />
          </article>
        </section>
      </div>

      <div className="gradient"></div>

      <div className="contact-background">
        <section id="contact">
          <h2>Contact me</h2>
          <p>I am interested about new job opportunities.</p>
          <a href="mailto:vcelak.marek@gmail.com">Email me</a>
        </section>
      </div>

      <div className="gradient"></div>

      <footer>
        <h2>Marek Vcelak &middot; Developer</h2>
        <ul>
          <li>
            <a href="https://cz.linkedin.com/in/marek-v%C4%8Del%C3%A1k-6176bb1b0">
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
            <a href="mailto:vcelak.marek@gmail.com">
              <span className="fa-solid fa-envelope" aria-hidden="true"></span>
              <span className="sr-only">Mail</span>
            </a>
          </li>
        </ul>
        <p>
          <small> &copy; 2023 Marek Vcelak. All rights reserved. </small>
        </p>
      </footer>
    </>
  );
};

export default Portfolio;
