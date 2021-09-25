import phhoto0 from "../../Assets/images/photographer0.jpg";
import phhoto1 from "../../Assets/images/photographer1.jpg";
import phhoto2 from "../../Assets/images/photographer2.jpg";
import phhoto3 from "../../Assets/images/photographer3.jpg";

const history = [
  {
    date: 2010,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus",
    image: phhoto1,
  },
  {
    date: 2015,
    content:
      "repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam face",
    image: phhoto2,
  },
  {
    date: 2019,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus adipisicing elit. Possimus vel tenetur",
    image: phhoto3,
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1 className="about_header">About Us</h1>
        <div className="row mb-5">
          <div className="col-12 col-md-6 mb-5">
            <img className="about_image" src={phhoto0} alt="person" />
          </div>
          <div className="col-12 col-md-6">
            <div className="about_content">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus vel tenetur explicabo necessitatibus, ad soluta
                consectetur illo qui voluptatem. Quis soluta maiores eum. Iste
                modi voluptatum in repudiandae fugiat suscipit dolorum harum,
                porro voluptate quis? Alias repudiandae dicta doloremque
                voluptates soluta repellendus, unde laborum quo nam, ullam
                facere voluptatem similique.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_history">
        <div className="container">
          {history.map((phase, index) => {
            return (
              <div className="row justify-content-around" key={index}>
                <div className="col-1 mb-4 mb-lg-0">
                  <div className="history_date">{phase.date}</div>
                </div>
                <div className="col-12 col-lg-4 mb-5">
                  <p className="history_content">{phase.content}</p>
                </div>
                <div className="col-12 col-lg-4 mb-5">
                  <img
                    className="history_image"
                    src={phase.image}
                    alt="person"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
