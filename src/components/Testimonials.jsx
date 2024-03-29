import React from "react";

function Testimonials(props) {
  return (
    <div className="w-3/4   rounded-2xl mx-auto  shadow-2  p-12">
      <div className="w-full mx-auto pb-10">
        <h2 className=" drop-shadow-md xs:text-4xl md:text-6xl font-source mx-auto w-full h-auto mt-5 ">
          Testimonials
        </h2>
        <br />
      </div>
      {/* grid container */}
      <div className=" grid md:grid-cols-2 xs:grid-cols-1">
        <div className="col-span-2">
          <p className="text-xl md:px-12">
            "KJ was awesome to have as a member of my team. She never missed a
            meeting, communicated well, and gave accurate timelines for the
            tasks she was working on (which we know is a rarity for a dev). It
            was awesome watching her soak up everything so quickly and she has
            flourished into such a great developer that I'd be thrilled to work
            with again!"
          </p>
          <br />
          <a
            href="https://unnamed.gg/"
            className="font-bold text-xl font-source"
          >
            Aaron - Founder
            <br />
            <span className="text-2xl">Unnamed Technology</span>
          </a>
          <br />
          <br />
        </div>
        <div className="col-span-2">
          <p className="text-xl md:px-12">
            "KJ gave my website the facelift it so desperately needed and made
            all of the functionalities work seamlessly! I never would have been
            able to figure them out on my own! Thanks to KJ I now feel good
            about my website and it has brought in new clients for me! Highly
            Recommend! KJ is awesome!!"
            <br />
            <br />
          </p>
          <a
            href="https://www.dotdigitalphoto.com/"
            className="font-bold text-xl font-source"
          >
            Lindsay - Owner <br />
            <span className="text-2xl">Dot Digital Photography</span>
          </a>
          <br />
          <br />
        </div>
        <div className="col-span-2">
          <p className="text-xl md:px-12">
            "I hired KJ originally to revamp our SEO. After consulting with her
            about the possibilities and redesign of the website, I decided to
            bring her on to do a complete rebuild. She worked efficiently and
            communicated each step as she went. It was great working with her
            and I recommend her to anyone who needs a competent developer on
            their team."
            <br />
            <br />
          </p>
          <a
            href="https://www.uglyduckstudios.com/"
            className="font-bold text-xl font-source"
          >
            Sam - Owner
            <br />
            <span className="text-2xl">Ugly Duck Studios</span>
          </a>
          <br />
          <br />
        </div>

        <div className="col-span-2">
          <p className="text-xl md:px-12">
            "KJ is a fantastic person to work with. My website was really
            sluggish, having had too many people work on it. KJ was able to
            clean it up (quite impressive knowledge of all sorts of quirky
            add-ons I didn’t need) and got it running at speeds well beyond what
            I thought possible. She also responds very quickly, is fair about
            her time, and a really nice person, too. Hire her! "
            <br />
            <br />
          </p>
          <a
            href="https://abandofvoters.org/"
            className="font-bold text-xl font-source"
          >
            Joey - Non-profit Founder and Filmmaker <br />
            <span className="text-2xl">A Band of Voters</span>
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
