const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img className="service_img" src={service.url} alt="service" />
      <h4 className="service_name">{service.name}</h4>
      <p className="service_content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        exercitationem quae id dolorum debitis.
      </p>
      <p className="service_price">{`$${service.price}`}</p>
      <button className="service_btn">Book Now</button>
    </div>
  );
};

export default ServiceCard;
