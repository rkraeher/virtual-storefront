import React from "react";
import Navbar from "./Navigation";

// replace this component with a Routes component that contains all routes, nav and provider wrapper
function App() {
  return (
    <div>

      {/* Navigation */}
      <Navbar />

      {/* Heroic Banner */}
      <section>
        {/* banner background image */}
        <div>
          <h1>Headline/Banner</h1>
          <h2>Descriptive text</h2>
          <button>Solutions</button>
        </div>
      </section>

      {/* Services  */}
      <section>
        <h1>Services</h1>
        <div>
          <div>
            <p>Service One</p>
          </div>
          <div>
            <p>Service Two</p>
          </div>
          <div>
            <p>Service Three</p>
          </div>
        </div>
      </section>

      {/*About me*/}
      <section>
        <h1>About Me</h1>
        <div>
          <h2>Personal story</h2>
          <p>Consectetur non aute occaecat eiusmod anim culpa Lorem cillum. Adipisicing excepteur voluptate id dolor sunt adipisicing reprehenderit commodo. Pariatur qui sint cillum tempor labore do Lorem adipisicing fugiat sit exercitation id tempor ullamco. Labore eu qui incididunt non magna ea incididunt ex amet.</p>
          <button>Read More</button>
        </div>
      </section>

      {/* Testimonial */}
      <section>
        <h2>Testimonial</h2>
        <h3>
          <p>Helped me solve my problem. <br></br>
          -- Some client
          </p>
        </h3>
      </section>

      {/* Projects */}
      <section className="text-left-project">
        <h1>Projects</h1>
        <div>
          <h2>Title 1</h2>
          <p>Description</p>
          <button>Visit site</button>
          <button>Contact</button>
        </div>
        <div>
          <img src="#"
            alt="project description"
            className="project-x"
          />
        </div>
      </section>

      <section className="text-right-project">
        <div>
          <h2>Title 2</h2>
          <p>Description</p>
          <button>Visit site</button>
          <button>Contact</button>
        </div>
        <div>
          <img src="#"
            alt="project description"
            className="project-x"
          />
        </div>
      </section>

      {/* Contact */}
      <section>
        <h1>Contact Me</h1>
        <div>
          <form>
            <input type="text"
              name="name"
              placeholder="name etc"
            />
            <button>Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h1>Footer</h1>
        <div>
          <ul>
            <li>
              Social links
            </li>
            <li>
              Copyright
            </li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </footer>

    </div>
  );
}
export default App;
