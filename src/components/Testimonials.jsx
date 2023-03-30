import React from "react";

function Testimonials(props) {
  return (
    <div className="w-3/4  bg-beige rounded-2xl mx-auto border-4 border-black shadow-1 p-12">
      <div className="w-full mx-auto pb-10">
        <h2 className="text-6xl font-source mx-auto w-full h-auto mt-5 ">
          Testimonials
        </h2>
        <br />
      </div>
      <div className=" grid md:grid-cols-2 xs:grid-cols-1">
        <div className="col-span-2">
          <p className="text-l px-12">
            KJ was awesome to have as a member of my team. She never missed a
            meeting, communicated well, and gave accurate timelines for the
            tasks she was working on (which we know is a rarity for a dev). It
            was awesome watching her soak up everything so quickly and she has
            flourished into such a great developer that I'd be thrilled to work
            with again!
            <br />
            <a
              href="https://unnamed.gg/"
              className="font-bold text-xl font-source"
            >
              Aaron - <span className="text-2xl">Unnamed Technology</span>
            </a>
            <br />
            <br />
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-l px-12">
            "KJ gave my website the facelift it so desperately needed and made
            all of the functionalities work seamlessly! I never would have been
            able to figure them out on my own! Thanks to KJ I now feel good
            about my website and it has brought in new clients for me! Highly
            Recommend! KJ is awesome!!"
            <br />
            <br />
            <a
              href="https://www.dotdigitalphoto.com/"
              className="font-bold text-xl font-source"
            >
              Lindsay -{" "}
              <span className="text-2xl">Dot Digital Photography</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
