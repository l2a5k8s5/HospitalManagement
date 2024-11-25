import React , {useState}from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const [hoveredIndex , setHoveredIndex] = useState(null);

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
      description: "Pediatrics is dedicated to the comprehensive care of infants, children, and adolescents. Our team specializes in both preventive healthcare and the diagnosis and treatment of a wide range of childhood illnesses",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
      description: "Orthopedics focuses on the musculoskeletal system, providing advanced treatment for conditions affecting bones, joints, ligaments, tendons, and muscles. Whether it's a fracture or sports injury",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
      description: "Cardiology is devoted to the health of your heart and vascular system. Our cardiologists offer cutting-edge treatments for heart disease ensuring your heart is in the best hands.",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
      description: "Neurology deals with the disorders of the nervous system, including the brain and peripheral nerves. Our neurologists provide expert care for conditions such as neurodegenerative diseases.",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
      description: "Oncology is the branch of medicine that focuses on the management of cancer.Our department offers personalized treatment plans ,chemotherapy, and targeted therapies to fight cancer effectively.",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
      description: "Radiology uses advanced imaging technologies like X-rays and ultrasounds to treat various conditions. Our radiologists are highly skilled in providing accurate diagnoses and guide treatments.",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
      description: "Physical Therapy focuses on the rehabilitation of patients recovering from surgery or chronic conditions.Therapists use specialized equipment to help restore mobility, strength, and function.",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
      description: "Dermatology specializes in the treatment of skin, hair, and nail conditions. Our dermatologists provide medical and cosmetic solutions to keep your skin healthy and vibrant.",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
      description:"The (Ear, Nose, and Throat) department offers specialized care for conditions affecting the ears, nose, throat, head, and neck.Our ENT specialists provide comprehensive treatment options.",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            "medium" ,"small"
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} 
              className="card"
              onMouseEnter={()=> setHoveredIndex(index)}
              onMouseLeave={()=> setHoveredIndex(null)}
              >
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt={depart.name} />
                {hoveredIndex == index && (
                  <div className="depart-description">{depart.description}</div>
                )}
              </div>
            );
          })}
        </Carousel>;
      </div>
    
  );
};

export default Departments;