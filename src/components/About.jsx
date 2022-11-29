import React from "react";

const About = () => {
  return (
    <div name="acerca" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Acerca</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          asperiores nobis sunt sit? Recusandae expedita voluptas eveniet,
          quaerat accusantium, cupiditate itaque quisquam quas repudiandae animi
          nobis earum nisi ab ut.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          repellendus provident, facere suscipit corrupti magni commodi? Qui
          recusandae tenetur accusamus corporis esse impedit expedita odio velit
          earum ullam? Tenetur, excepturi.
        </p>
      </div>
    </div>
  );
};

export default About;
