import React from "react";
import Skeleton from "react-loading-skeleton";
import SCSkeletonCard from "./SkeletonCard.styled";

const SkeletonCard = () => {
  
    return (
      <SCSkeletonCard id="skeleton-container">
          {Array(4)
            .fill()
            .map((item, index) => (
                <div key={index} className="skeleton-box">
                  <Skeleton count={5} />
                </div>
            ))}
      </SCSkeletonCard>
    );
  };

  export default SkeletonCard;