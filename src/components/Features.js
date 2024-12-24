import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faLeaf,
  faTruck,
  faCheckCircle,
  faBoxOpen,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

function FeaturesSection() {
  const features = [
    {
      icon: faFlask,
      title: "Clinically Studied",
      description:
        "All products that we offer have undergone lab and safety tests.",
    },
    {
      icon: faLeaf,
      title: "Vegetarian Friendly",
      description:
        "We have a wide selection of vegetarian products to meet your needs.",
    },
    {
      icon: faSeedling,
      title: "Made In India",
      description:
        "Shop local and explore health products made right here in India.",
    },
    {
      icon: faTruck,
      title: "Free Shipping",
      description:
        "We deliver to your door with no shipping costs on your orders.",
    },
    {
      icon: faCheckCircle,
      title: "No Risk",
      description:
        "We ensure that all products are safe and within their use-by date.",
    },
    {
      icon: faBoxOpen,
      title: "GMO Free",
      description:
        "Natural, no modified products and derivatives for those who need it.",
    },
  ];

  return (
    <section className="-px-20">
      <div className="container mx-auto">
        {/* Background Section */}
        <div
          className="relative text-white py-10 px-6 sm:px-12 lg:px-20"
          style={{
            backgroundColor: "rgba(23, 65, 79, 1)",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        >
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                {/* Icon Wrapper */}
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-md mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-2xl"
                    style={{ color: "rgba(23, 65, 79, 1)" }}
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                {/* Description */}
                <p className="text-sm  text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
