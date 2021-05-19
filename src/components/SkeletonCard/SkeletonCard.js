import React from "react";
import Skeleton from "react-loading-skeleton";
import "./SkeletonCard.css"

const SkeletonCard = () => {
    return (
      <section id="skeleton-container">
          {Array(4)
            .fill()
            .map((item, index) => (
                <div key={index} className="skeleton-box">
                  <Skeleton count={5} />
                </div>
            ))}
      </section>
    );
  };

  export default SkeletonCard;