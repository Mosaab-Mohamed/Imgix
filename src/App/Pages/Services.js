import camera from "../../Assets/images/camera.svg";
import wedding from "../../Assets/images/wedding.svg";
import cat from "../../Assets/images/cat.svg";
import picture from "../../Assets/images/picture.svg";
import travel from "../../Assets/images/travel.svg";
import video from "../../Assets/images/video.svg";
import ServiceCard from "../Components/ServiceCard";

const servicesArr = [
  {
    url: camera,
    name: "Camera",
    price: 29,
  },
  {
    url: wedding,
    name: "Wedding Photography",
    price: 46,
  },
  {
    url: cat,
    name: "Animal",
    price: 24,
  },
  {
    url: picture,
    name: "Portrait",
    price: 40,
  },
  {
    url: travel,
    name: "Travel",
    price: 35,
  },
  {
    url: video,
    name: "Video Editing",
    price: 15,
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1 className="services_header">Our Services</h1>
        <div className="row">
          {servicesArr.map((service, index) => {
            return (
              <div className="col-12 col-lg-6 col-xl-4 mb-5" key={index}>
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
