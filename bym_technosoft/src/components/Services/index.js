import Button from "../Button";
import "./index.css";

const servicesData = [
  {
    img_url:
      "https://image3.jdomni.in/library/13/67/1D/01C50629EF0533B57C3FF6C8A1_1496245009166_cropped_450X450.jpeg",
    services_name: "Computer Training Institutes For Advanced Java",
    services_info:
      "We are one of the best computer training institute to learn advanced Java at reasonable rates. Call now.",
  },
  {
    img_url:
      "https://image3.jdomni.in/library/F5/46/6C/C52F2D55B23DD995B1E2BF30CE_1496271781571_cropped_450X450.jpeg",
    services_name: "SAP Training Institutes",
    services_info:
      "We provide the best and effective SAP training with SAP modules, courses and professional SAP experts.",
  },
  {
    img_url:
      "https://image1.jdomni.in/library/FA/15/91/B2EF4C2E69B31BC1B236206434_1509715283715_cropped_450X450.jpeg",
    services_name: "Computer Training Institutes For Data Science",
    services_info:
      "Through our trained faculty, we provide the most effective & easy learning training courses for Data Science.",
  },
  {
    img_url:
      "https://image2.jdomni.in/library/C3/34/3B/D84622391D3FF9A95589EC906A_1496334700893_cropped_450X450.jpeg",
    services_name: "Software Testing Institutes",
    services_info:
      "We provide the best software testing institutes, providing best staff skills, education and experience.",
  },
  {
    img_url:
      "https://image3.jdomni.in/library/74/F6/99/6E00ED4166A9619EE28CD203F1_1496332616065_cropped_450X450.jpeg",
    services_name: "Computer Training Institutes For Dot Net",
    services_info:
      "Through our trained faculty, we provide the most effective & easy learning training courses for Dot Net.",
  },
  {
    img_url:
      "https://image1.jdomni.in/library/2F/D4/8C/4795AA492941E580BD9A5E0E0B_1496331307907_cropped_450X450.jpeg",
    services_name: "Computer Training Institutes For Devops",
    services_info:
      "We are leading computer training institute for Devops. Our expert tutors would give you best exposure.",
  },
  {
    img_url:
      "https://image2.jdomni.in/library/E3/8A/0E/925E1EB09EB0EC0BCCF93E4A5D_1496335070458_cropped_450X450.jpeg",
    services_name: "Placement Services (candidate)",
    services_info:
      "We do placements of deserving candidates by churning out their real talent to the suitable companies.",
  },
  {
    img_url:
      "https://image3.jdomni.in/library/33/8A/73/5A4AE393EE808BF6714F3094D8_1509443592454_cropped_450X450.jpeg",
    services_name: "Placement Services For It Industry (candidate)",
    services_info:
      "We are a leading name engaged in providing reliable & trusted candidate placement service for IT industry..",
  },
  {
    img_url:
      "https://image3.jdomni.in/banner/13012022/D5/60/AD/02C4DFCB58B6486701F8A86964_1642094965058.jpg?output-format=webpg",
    services_name: "Animation",
    services_info:
      "Learn to create dynamic websites & graphic designs for clients to publish and market their products /services. Create high-quality visual effects for advertisements, TV, films and also for gaming applications.",
  },
  {
    img_url:
      "https://image3.jdomni.in/banner/14012022/B5/B0/3A/64622FE9522F8368F524CE8C1C_1642156244723.png?output-format=webp",
    services_name: "Diploma In Autocad: 2D & 3D",
    services_info:
      "Improve your website ranking in Google results for keywords that matter in the digital marketing world.",
  },
];

const services = () => {
  return servicesData.map((data) => {
    const { img_url, services_name, services_info } = data;
    return (
      <div className="services_card">
        <div>
          <img src={img_url} alt="services-img" className="services-img" />
          <h1 className="services_name">{services_name}</h1>
          <p className="services_info">{services_info}</p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    );
  });
};

export default services;
