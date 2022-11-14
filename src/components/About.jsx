import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I enjoy solving front-end problems and creating the best user
          experience. I also spend time learning new technologies and best
          practices to become a better engineer. I really to collaborate with
          new opportunities and challenges
        </p>

        <br />

        <p className="text-xl">
          Education:{" "}
          <i>
            <strong>University of transport and communications</strong>
          </i>
          <br />
          <br />
          Major:{" "}
          <strong>
            <i>Infomation of Technology</i>
          </strong>
          <br />
          <br />
          Contact me: <u>0966574376</u>
        </p>
      </div>
    </div>
  );
};

export default About;
