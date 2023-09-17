import React from "react";
import "./RideComford.css";
import { Link } from "react-router-dom";

const RideComford = () => {
  return (
    <div>
      <h1>Ride In Comfort</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        rem autem?
      </p>
      <div>
        <div>
          <div>
            <h3>Iteksi Regular</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, in ipsum!
            </p>
            <button>
              <Link>Learn More</Link>
            </button>
          </div>
          <div>
            <img
              className="car-photo"
              src="https://kitpro.site/iteksi/wp-content/uploads/sites/184/2023/08/image-of-a-blue-car-on-different-positions-2022-12-15-22-53-57-utc-1-1024x472.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <h3>Iteksi Regular</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, in ipsum!
            </p>
            <button>
              <Link>Learn More</Link>
            </button>
          </div>
          <div>
            <img
              className="car-photo"
              src="https://kitpro.site/iteksi/wp-content/uploads/sites/184/2023/08/hybrid-car-2022-12-16-01-11-32-utc-1-1024x505.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <h3>Iteksi Regular</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, in ipsum!
            </p>
            <button>
              <Link>Learn More</Link>
            </button>
          </div>
          <div>
            <img
              className="car-photo"
              src="https://kitpro.site/iteksi/wp-content/uploads/sites/184/2023/08/sport-car-2022-12-15-23-01-56-utc-1-1024x454.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideComford;
