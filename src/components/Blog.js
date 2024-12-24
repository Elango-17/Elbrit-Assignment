import React from "react";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

function Blog() {
  const blogs = [
    {
      title: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: blog1,
      size: "medium",
    },
    {
      title: "The Covid-19 Epidemic In 2023 Is Back",
      date: "20 APR",
      img: blog2,
      size: "small",
    },
    {
      title: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: blog3,
      size: "medium",
    },
    {
      title: "The Covid-19 Epidemic In 2023 Is Back",
      date: "20 APR",
      img: blog3,
      size: "medium",
    },
    {
      title: "Hac hendrerit mus nunc semper suspendisse",
      date: "17 MAR",
      img: blog2,
      size: "small",
    },
    {
      title: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: blog1,
      size: "small",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2
          className="text-xl text-center mb-2"
          style={{ color: "rgba(23, 65, 79, 1)" }}
        >
          OUR BLOG
        </h2>
        <h2
          className="text-3xl text-center font-bold mb-6"
          style={{ color: "rgba(23, 65, 79, 1)" }}
        >
          Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`relative rounded shadow hover:shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
                blog.size === "large"
                  ? "col-span-2 row-span-2 h-96"
                  : blog.size === "medium"
                  ? "row-span-2 h-72"
                  : "h-40"
              }`}
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 py-2">
                <span
                  className="text-xs font-semibold py-1 px-3 rounded"
                  style={{
                    backgroundColor: "rgba(0, 53, 105, 1)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {blog.date}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 transition-opacity duration-300 opacity-100 hover:opacity-90">
                <h3 className="text-sm font-bold text-white">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
