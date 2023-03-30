import React from "react";

function Testimonials(props) {
  return (
    <div className="w-full p-5 bg-white rounded-l shadow-1  px-10 mt-10">
      <div className="w-full mx-auto">
        <h2 className="md:text-6xl xs:text-4xl font-source mx-auto w-full h-auto my-5 ">
          Testimonials
        </h2>
        <br />
      </div>
      <p>
        KJ was awesome to have as a member of my team. She never missed a
        meeting, communicated well, and gave accurate timelines for the tasks
        she was working on (which we know is a rarity for a dev). It was awesome
        watching her soak up everything so quickly and she has flourished into
        such a great developer that I'd be thrilled to work with again!
      </p>

      <br />

      <a href="https://unnamed.gg/" className="font-bold text-xl font-source">
        Aaron - <span className="text-2xl">Unnamed Technology</span>
      </a>
      <br />
      <br />

      <p className="text-l px-12">
        "KJ gave my website the facelift it so desperately needed and made all
        of the functionalities work seamlessly! I never would have been able to
        figure them out on my own! Thanks to KJ I now feel good about my website
        and it has brought in new clients for me! Highly Recommend! KJ is
        awesome!!"
        <br />
        <br />
        <a
          href="https://www.dotdigitalphoto.com/"
          className="font-bold text-xl font-source"
        >
          Lindsay - <span className="text-2xl">Dot Digital Photography</span>
        </a>
      </p>
    </div>
  );
}
export default Testimonials;
