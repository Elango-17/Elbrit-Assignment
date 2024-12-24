import React from "react";
import vitaminc from "../assets/images/vitaminc.png";
import vitaminb3 from "../assets/images/vitaminb3.png";
import magnesium from "../assets/images/magnesium.png";
import hyaluronicAcid from "../assets/images/hyaluronic-acid.png";
import lactobacillus from "../assets/images/lactobacillus.png";

function Ingredients() {
  const ingredients = [
    // {
    //   name: "Vitamin C",
    //   img: vitaminc,
    //   desc: "Vitamin C as ascorbic acid",
    // },
    {
      name: "Vitamin B3",
      img: vitaminb3,
      desc: "Niacin for healthy gut and skin",
    },
    {
      name: "Magnesium",
      img: magnesium,
      desc: "Boost energy and support muscle function",
    },
    {
      name: "Hyaluronic Acid",
      img: hyaluronicAcid,
      desc: "For smooth, supple and soft skin!",
    },
    {
      name: "Lactobacillus",
      img: lactobacillus,
      desc: "Invigorate your gut microbiome",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Heading section with a card below */}
          <div className="lg:col-span-1">
            <h2
              className="text-lg font-bold mb-5"
              style={{ color: "rgba(23, 65, 79, 1)" }}
            >
              INGREDIENTS
            </h2>
            <h2
              className="text-3xl font-bold mb-5"
              style={{ color: "rgba(23, 65, 79, 1)" }}
            >
              Better Ingredients
            </h2>
            <p className="text-gray-600 mb-20 text-justify">
              Only the best when you choose products offered on our platform
              high-quality ingredients for high-quality products!
            </p>

            {/* Card below the heading */}
            <div
              className=" p-6 rounded-lg shadow hover:shadow-lg text-left"
              style={{ backgroundColor: "rgba(226,245,251,255)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "rgba(23, 65, 79, 1)" }}
              >
                Vitamin C
              </h3>
              <p className="mb-4" style={{ color: "rgba(23, 65, 79, 1)" }}>
                Vitamin C as ascorbic acid
              </p>
              <img
                src={vitaminc}
                alt="Vitamin C"
                className="w-20 h-20 mx-auto mb-4"
              />
              <button
                className="font-semibold hover:underline"
                style={{ color: "rgba(23, 65, 79, 1)" }}
              >
                SEE MORE
              </button>
            </div>
          </div>

          {/* Cards section */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow hover:shadow-lg text-left"
                style={{ backgroundColor: "rgba(226,245,251,255)" }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "rgba(23, 65, 79, 1)" }}
                >
                  {ingredient.name}
                </h3>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "rgba(23, 65, 79, 1)" }}
                >
                  {ingredient.desc}
                </p>
                <img
                  src={ingredient.img}
                  alt={ingredient.name}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <button
                  className="font-semibold hover:underline"
                  style={{ color: "rgba(23, 65, 79, 1)" }}
                >
                  SEE MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
