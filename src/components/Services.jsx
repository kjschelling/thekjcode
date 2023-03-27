import React from "react";
//we use hooks to make functional components equalivent in functionality as class components

function Services(props) {
  return (
    <div
      id="services"
      className="max-w-sm w-full lg:max-w-full shadowlg xs:mx-auto bg-white rounded-l border p-5"
    >
      <div className="w-full mx-auto">
        <h2 className="md:text-6xl xs:text-4xl font-source mx-auto w-full h-auto my-5">
          Services
        </h2>
      </div>

      {/* services grid container */}
      <div className=" ">
        {/* row 1 container */}
        <div className="md:flex xs:grid-cols-1 mb-4">
          <br />
          {/* WIX DEVELOPMENT */}
          <div className="w-1/2 h-auto xs:w-full">
            <ul className="">
              <h2 className="text-2xl font-bold">Wix Website Development</h2>
              <br />
              <li className="text-xl"> Basic Website (5 pages): $800</li>
              <br />
              <li className="text-xl">
                Advanced Website (5-10 pages, eCommerce): $1,500
              </li>
              <br />
              <li className="text-xl">
                Custom Wix Apps Integration: $300 per app
              </li>
            </ul>
          </div>
          <br />

          {/* WORDPRESS DEVELOPMENT */}
          <div className="w-1/2 h-auto xs:w-full">
            <ul>
              <h2 className="text-2xl font-bold">
                WordPress Website Development
              </h2>
              <br />
              <li className="text-xl"> Basic Website (5 pages): $1000</li>
              <br />
              <li className="text-xl">
                Advanced Website (5-10 pages, eCommerce): $2000
              </li>
              <br />
              <li className="text-xl">
                Custom WordPress Plugin Development: $800 per plugin
              </li>
              <br />
              <li className="text-xl">
                WordPress Maintenance and Security: $100 per month
              </li>
              <br />
            </ul>
          </div>
        </div>

        {/* row 2 container  */}
        <div className="md:flex mb-4 xs:grid-cols-1">
          {/* SQUARESPACE DEVELOPMENT */}
          <div className="w-1/2 h-auto xs:w-full">
            <ul>
              <h2 className="text-2xl font-bold">
                SquareSpace Website Development
              </h2>
              <br />
              <li className="text-xl"> Basic Website (5 pages): $800</li>
              <br />
              <li className="text-xl">
                Advanced Website (5-10 pages, eCommerce): $1,500
              </li>
              <br />
              <li className="text-xl">
                Custom SquareSpace Add-ons: $300 per add-on
              </li>
              <br />
            </ul>
          </div>

          {/* JAVASCRIPT DEVELOPMENT */}
          <div className="w-1/2 h-auto xs:w-full">
            <ul>
              <h2 className="text-2xl font-bold">
                Custom JavaScript Web Applications
              </h2>
              <br />
              <li className="text-xl">
                Basic Web App (1-2 main features): $3,000
              </li>
              <br />
              <li className="text-xl">
                Advanced Web App (3-5 main features): $5,000
              </li>
              <br />
              <li className="text-xl">
                Complex Web App (6+ main features): $10,000+
              </li>
              <br />
            </ul>
          </div>
        </div>

        {/* row 3 container */}
        <div className="md:flex mb-4 xs:grid-cols-1 ">
          {/* REACT DEVELOPMENT */}
          <div className="w-1/2 h-auto xs:w-full">
            <ul>
              <h2 className="text-2xl font-bold">React Web Development</h2>
              <br />
              <li className="text-xl">
                Basic React App (1-2 main features): $3,500
              </li>
              <br />
              <li className="text-xl">
                Advanced React App (3-5 main features): $6,000
              </li>
              <br />
              <li className="text-xl">
                Complex React App (6+ main features): $12,000+
              </li>
              <br />
            </ul>
          </div>

          {/* COPYWRITING SERVICES */}
          <div className="w-1/2 h-auto xs:w-full">
            <ul>
              <h2 className="text-2xl font-bold">Copywriting Services</h2>
              <br />
              <li className="text-xl">
                Website copy - estimated cost: $500-$1,500, depending on the
                size and complexity of the website.
              </li>
              <br />
              <li className="text-xl">
                Blog posts - estimated cost: $150-$500 per post, depending on
                the length and research required.
              </li>
              <br />
              <li className="text-xl">
                Product descriptions - estimated cost: $50-$100 per product,
                depending on the complexity and number of products.
              </li>
              <br />
              <li className="text-xl">
                Social media posts - estimated cost $25-$50 per post.
              </li>
              <br />
              <li className="text-xl">
                Email marketing campaigns - estimated cost: $500-$1,500 per
                campaign, depending on the complexity and number of emails.
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
