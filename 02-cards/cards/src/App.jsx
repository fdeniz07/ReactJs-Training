import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./assets/images/angular.png";
import Bootstrap5 from "./assets/images/bootstrap.svg";
import ReactJs from "./assets/images/react.png";
import Javascript from "./assets/images/Javascript.png";

function App() {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">KURSLARIM</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vitae necessitatibus dolorum est animi exercitationem saepe. Natus eveniet quisquam ea? Ipsam, beatae. Odio quis sit aliquam magni maiores harum ducimus!"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap5}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vitae necessitatibus dolorum est animi exercitationem saepe. Natus eveniet quisquam ea? Ipsam, beatae. Odio quis sit aliquam magni maiores harum ducimus!"
              />
            </div>
            <div className="column">
              <Course
                image={ReactJs}
                title="ReactJs"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vitae necessitatibus dolorum est animi exercitationem saepe. Natus eveniet quisquam ea? Ipsam, beatae. Odio quis sit aliquam magni maiores harum ducimus!"
              />
            </div>
            <div className="column">
              <Course
                image={Javascript}
                title="Javascript"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vitae necessitatibus dolorum est animi exercitationem saepe. Natus eveniet quisquam ea? Ipsam, beatae. Odio quis sit aliquam magni maiores harum ducimus!"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
