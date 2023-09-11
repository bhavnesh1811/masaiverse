import React from "react";
import styles from "./Certification.module.css";
const Certification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_div}>
        <img
          src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"
          alt="Certificate"
        />
      </div>
      <div className={styles.right_div}>
        <h1><span>Certification</span> By The N.S.D.C</h1>
        <p>
          NSDC Certification is a prestigious recognition for students who have
          completed accredited skill-based training programs. It validates their
          expertise, demonstrating their dedication to practical skills. This
          certification provides a competitive edge in the job market,
          showcasing proficiency and adherence to industry standards. NSDC
          certifications are widely accepted, unlocking rewarding career
          opportunities and personal growth.
        </p>
      </div>
    </div>
  );
};

export default Certification;
