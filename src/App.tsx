import logo from "./assets/images/logo.svg";
import arrow from "./assets/images/icon-arrow-light.svg";
import phones from "./assets/images/illustration-phones.svg";
import laptopMobile from "./assets/images/illustration-laptop-mobile.svg";
import laptopDesktop from "./assets/images/illustration-laptop-desktop.svg";

function App() {
  return (
    <main>
      <header>
        <nav>
          <picture>
            <img src="" alt="" />
          </picture>
          <ul>
            <li>
              <a href="">Product</a> <img src={arrow} alt="" />
            </li>
            <ul>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Marketplace</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Integrations</a>
              </li>
            </ul>
            <li>
              <a href="">Company</a> <img src={arrow} alt="" />
            </li>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
            <li>
              <a href="">Connect</a> <img src={arrow} alt="" />
            </li>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
            </ul>
          </ul>
          <ul>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </nav>
        <section>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div>
            <button>Start for Free</button>
            <button>Learn More</button>
          </div>
        </section>
      </header>
      <section>
        <h2>Designed for the future</h2>
        <h3>Introducing an extensible editor</h3>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h3>Robust content management</h3>
        <p>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </section>
      <section>
        <h2>State of the Art Infrastructure</h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
        <img src={phones} alt="" />
      </section>
      <section>
        <picture>
          <img src={laptopMobile} alt="" />
          <img src={laptopDesktop} alt="" />
        </picture>
        <div>
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </section>
      <footer>
        <img src={logo} alt="" />
        <ul>
          <li>
            <h2>Product</h2>
          </li>
          <li>
            <a href="">Overview</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Marketplace</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Integrations</a>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Company</h2>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Connect</h2>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Newsletter</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
