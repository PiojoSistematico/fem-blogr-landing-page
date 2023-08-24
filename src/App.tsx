import logo from "./assets/images/logo.svg";
import phones from "./assets/images/illustration-phones.svg";
import laptopMobile from "./assets/images/illustration-laptop-mobile.svg";
import laptopDesktop from "./assets/images/illustration-laptop-desktop.svg";
import editorMobile from "./assets/images/illustration-editor-mobile.svg";
import editorDesktop from "./assets/images/illustration-editor-desktop.svg";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <section className="hero-section">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="flex-row">
            <button className="btn-filled">Start for Free</button>
            <button className="btn-transparent">Learn More</button>
          </div>
        </section>
        <section className="design-section">
          <h2>Designed for the future</h2>
          <div>
            <img src={editorMobile} alt="" className="mobile" />
            <img src={editorDesktop} alt="" className="desktop" />
          </div>

          <div className="design-section-text">
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </section>
        <section className="art-section">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
          <div>
            <img src={phones} alt="" className="img-phones" />
          </div>
        </section>
        <section>
          <div>
            <img src={laptopMobile} alt="" className="mobile" />
            <img src={laptopDesktop} alt="" className="desktop" />
          </div>
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
      </main>

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
    </>
  );
}

export default App;
