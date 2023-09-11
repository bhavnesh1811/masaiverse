import React from "react";
import styles from "./ElevateCarrier.module.css";
const ElevateCarrier = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          <span>Elevate</span> Your Career Possibilities
        </h1>
        <h3>
          It doesn’t matter where you come from, we know how to get you to your
          dream career.
        </h3>
        <p>
          Our graduates consistently outperform students from top Indian
          engineering colleges & universities. 70% of companies who have hired 1
          Masai graduate come back to us with their hiring mandates.
        </p>
        <div className={styles.button}>
            <button>Apply Now</button>
        </div>
      </div>
      <div className={styles.right_container}>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/Ji0ICdxTdqc"
          title="No Matter Your Background, Get Your Dream Career | Skilled By Masai"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        
      </div>
      <div className={styles.forSmallScreen}>
            <button >Apply Now</button>
        </div>
    </div>
  );
};

export default ElevateCarrier;
