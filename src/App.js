import logo from "./logo.svg";
import myPic from "./mypic.JPG";
import "./App.css";
import app1 from "./app1.png";
import app2 from "./app2.png";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-xxl">
        <a href="#about" class="navbar-brand">
          <span class="fw-bold text-secondary">Khalid Gobin - The Pro</span>
        </a>
        {/*toggle button for mobile nav */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/*navbar links*/}
        <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About Khalid
              </a>
            </li>
            <li class="nav-item">
              <a href="#projects" class="nav-link">
                His Projects
              </a>
            </li>
            <li class="nav-item">
              <a href="#interests" class="nav-link">
                Interests
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function AboutMe() {
  return (
    <section id="about">
      <div class="container-fluid bg-dark">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5 text-center text-md-start">
            <h1>
              <div class="display-2 text-white">Khalid's Portfolio</div>
              <div class="display-5 text-muted">Software Engineer</div>
            </h1>
            <p class="lead my-4 text-muted ">Delivering fast, efficient and effective software solutions.</p>
          </div>
          <div class="col-md-5 text-center d-none d-md-block">
            <img class="img-fluid p-5" src={myPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section id="projects">
      <div className="container-fluid bg-light">
        <div class="justify-content-center align-items-center text-center p-5 display-5">Some of my Projects</div>
      </div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tax Calculator" key="1">
          <div class="container-fluid">
            <div className="row justify-content-center align-items-center text-center p-3">
              <h2>Motor Vehicle Tax Calculator</h2>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col text-center">
                <img class="img-fluid p-5" src={app2} alt="" />
              </div>
              <div className="col text-center">
                <img class="img-fluid p-5" src={app1} alt="" />
              </div>
              <div className="col text-center">
                <p> Written with Java and created with android studio, this app makes calculating import duties for Guyana easy!</p>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Mini Soccer" key="2">
          <div class="container-fluid">
            <div className="row justify-content-center align-items-center text-center p-3">
              <h2>Mini Soccrer Game</h2>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col text-center">
                <img class="img-fluid p-5" src={app2} alt="" />
              </div>
              <div className="col text-center">
                <img class="img-fluid p-5" src={app1} alt="" />
              </div>
              <div className="col text-center">
                <p> Created with Java swing and utilizing knowledge of software deign patterns</p>
                <a href="https://github.com/kgobin2000/miniSoccer">Github</a>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="DecentraLease" key="3">
          <div class="container-fluid">
            <div className="row justify-content-center align-items-center text-center p-3">
              <h2>DecentraLease - Currently in Progress</h2>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col text-center">
                <img class="img-fluid p-5" src={app2} alt="" />
              </div>
              <div className="col text-center">
                <img class="img-fluid p-5" src={app1} alt="" />
              </div>
              <div className="col text-center">
                <p> An application that tracks the lifecycle of a car with the use of an etheruem testnet blockchain. Requires Metamask</p>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </section>
  );
}
function App() {
  return (
    <div class="App">
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
