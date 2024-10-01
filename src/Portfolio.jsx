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
          <h2>Frontend Developer</h2>
          <p>
            I am frontend developer specializing on
            <span className="green-text"> React </span> and{" "}
            <span className="green-text">Next.js</span> aplications
          </p>
        </section>
      </div>

      <div className="gradient"></div>

      <div className="other-projects-background">
        <section id="projects">
          <h2>Next.js project</h2>

          <article className="reverse">
            <div className="text">
              <h4>Interview project</h4>
              <h3>To Do App</h3>
              <p className="blackbox">
                The To-Do List Application is a responsive web app developed as
                part of a hiring challenge to demonstrate proficiency in
                building Next.js applications. Users can manage multiple lists,
                add, edit, mark tasks as complete or incomplete, and delete
                items, with priority settings for each task. Data persistence is
                ensured via MockAPI. The application is optimized for mobile
                devices and built with Next.js with efficient use of server-side
                rendering.
                <br /> You can see source code{" "}
                <a href="https://github.com/VcelakMarek/To_Do_App">here</a> and
                application{" "}
                <a href="https://to-do-app-one-hazel.vercel.app/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>React final form</li>
                <li>MockApi</li>
                <li>Axios</li>
                <li>Vercel</li>
              </ul>
            </div>
            <img src="./to-do-app.jpg" alt="Screenshot of To_Do_App." />
          </article>

          <article>
            <div className="text">
              <h4>First Next.js project</h4>
              <h3>Book Collection</h3>
              <p className="blackbox">
                The Book Collection is my Next.js project, developed as part of
                an interview assignment. It retrieves book data from an external
                API and features an admin section (currenty without
                authorization) for editing, deleting and adding books. This
                project provided me with the chance to explore Next.js and
                enhance my proficiency in web development.
                <br /> You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Book_collection">
                  here
                </a>{" "}
                and application{" "}
                <a href="https://book-collection-one.vercel.app/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>React final form</li>
                <li>Axios</li>
                <li>Vercel</li>
              </ul>
            </div>
            <img
              src="./book-collection.jpg"
              alt="Screenshot of Book_Collection."
            />
          </article>
        </section>
      </div>

      <div className="gradient"></div>

      <div className="projects-background">
        <section id="projects">
          <h2>React projects</h2>

          <article className="reverse">
            <div className="text">
              <h4>Interview project</h4>
              <h3>GitHub Finder</h3>
              <p className="blackbox">
                The GitHub Finder is a responsive web application I developed as
                part of an interview project. This app allows users to search
                for GitHub profiles and view their repositories. While building
                it, I had the opportunity to work with some new technologies
                like React Query and MUI. It is written in React using
                TypeScript and includes error handling to ensure a smooth user
                experience. <br /> You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Interview_Project">
                  here
                </a>{" "}
                and application{" "}
                <a href="https://vcelakmarek.github.io/Interview_Project/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
                <li>MUI</li>
                <li>React Query</li>
                <li>Typescript</li>
                <li>Axios</li>
                <li>Vite</li>
                <li>Prettier</li>
              </ul>
            </div>
            <img
              src="./github-finder.jpg"
              alt="Screenshot of IP_Address_Tracker."
            />
          </article>

          <article>
            <div className="text">
              <h4>Current Project</h4>
              <h3>Invoice app</h3>
              <p className="blackbox">
                The Invoice App is designed to help you manage your invoices
                efficiently. With this application, you can create, edit,
                delete, and update the status of your invoices. The form
                includes validation to ensure accuracy when creating new
                invoices. You can also filter invoices by status for easy
                organization. All changes are saved to localStorage, ensuring
                that your data remains available even after closing the browser.
                <br />
                You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Invoice_app">
                  here
                </a>{" "}
                and application{" "}
                <a href="https://vcelakmarek.github.io/Invoice_app/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>React final form</li>
                <li>Yup</li>
                <li>Vite</li>
              </ul>
            </div>
            <img src="./invoice-app.jpg" alt="Screenshot of Invoice_app." />
          </article>

          <article className="reverse">
            <div className="text">
              <h4>Maps Project</h4>
              <h3>IP Address Tracker</h3>
              <p className="blackbox">
                The IP Address Tracker is a web-based tool designed to provide
                users with information about entered IP addresses. Upon opening
                the application, users are greeted with details about their own
                IP address. They can then enter any IP address of interest to
                retrieve information such as geographical location and map
                coordinates.{" "}
                <a href="https://github.com/VcelakMarek/IP_Address_Tracker">
                  here
                </a>{" "}
                and application{" "}
                <a href="https://vcelakmarek.github.io/IP_Address_Tracker/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
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

          <article>
            <div className="text">
              <h4>Data fetch project</h4>
              <h3>GitHub user search app</h3>
              <p className="blackbox">
                This application provides users with detailed information about
                any GitHub user. Primary goal of this project is to learn the
                basics of asynchronous functions and data fetching.
                Additionally, it features a light/dark mode switch. <br /> You
                can see source code{" "}
                <a href="https://github.com/VcelakMarek/GitHub_user_search_app">
                  here
                </a>{" "}
                and application{" "}
                <a href="https://vcelakmarek.github.io/GitHub_user_search_app/">
                  {" "}
                  here.
                </a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
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

          <article className="reverse">
            <div className="text">
              <h4>First React project</h4>
              <h3>Tic Tac Toe</h3>
              <p className="blackbox">
                The Tic Tac Toe application offers players the flexibility to
                choose between playing against another player or challenging the
                CPU. Additionally, players have the option to select their
                preferred mark (X or O). The application also tracks the
                winner's score. <br /> You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Tic_Tac_Toe">here</a>{" "}
                and application{" "}
                <a href="https://vcelakmarek.github.io/Tic_Tac_Toe/"> here.</a>
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
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
                This application is designed to generate passwords based on
                user-selected options and desired length. One of the unique
                features of this project is the dynamic sizing of the password
                font, ensuring that the generated password remains readable and
                does not exceed the available display area. <br />
                You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Password_generator">
                  here
                </a>{" "}
                and application{" "}
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
                This simple calculator marks the beginning of my JavaScript
                learning journey. <br /> You can see source code{" "}
                <a href="https://github.com/VcelakMarek/Calculator">here</a> and
                application{" "}
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
                This project serves as my introduction to CSS basics, showcasing
                responsive design skills. It's a simple pricing component
                allowing users to switch between annual and monthly options.{" "}
                <br /> You can see source code{" "}
                <a href="https://github.com/VcelakMarek/First_Project">here</a>{" "}
                and application{" "}
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
          <p>
            I'm available for new job opportunities in frontend development, and
            I'm particularly interested in roles involving React and Next.js.
            Please don't hesitate to contact me if you have any relevant
            openings.
          </p>
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
          <small> &copy; 2024 Marek Vcelak. All rights reserved. </small>
        </p>
      </footer>
    </>
  );
};

export default Portfolio;
