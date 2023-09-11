import React from 'react'
import styles from "./Curriculum.module.css";
const images = [
    "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image5.webp",
    "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image5.webp",
    "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image5.webp",
    
    
  ];

const Curriculum = () => {
  return (
    <div className={styles.parent_container}>
        <div className={styles.heading}>
            <h1>Best-In-Class <span>Curriculum</span> & Pedagogy</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.left_container}>
               <div >
                <h2>100% <span>Live</span> Distance Learning</h2>
                <p>India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get Real-Time Feedback, Interactive Sessions & A Personalised Learning Experience.</p>
               </div>
               <div>
                <h2>Generative <span>AI Integrated</span> Program</h2>
                <p>Harness & Implement The Power Of AI In Coding & Data Analytics. What’s More? Use Custom AI Tools To Enhance Placement Preparation.</p>
               </div>
               <div>
                <h2><span>Industry Ready</span> Curriculum</h2>
                <p>Our Curriculum Is Regularly Updated Through Industry Feedback. In-Demand Specialisations Are Added To Aid Our Students Launch Sustainable Careers.</p>
               </div>
               <div>
                <h2>Focus On Learning <span>Agility</span></h2>
                <p>We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.</p>
               </div>
               <div>
                <h2>Industry Ready In Just <span>25 - 35 Weeks</span></h2>
                <p>Curriculum At Masai Is Designed To Be Intensive & Extensive. With Our Unique Pedagogy Learn Right In Less Time. All We Ask Is Your Dedication!</p>
               </div>
            </div>
            <div className={styles.right_container}>
                <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/course-image5.webp" alt="" />
            </div>
        </div>
        <div className={styles.button}>
            <button >GET YOUR DREAM JOB</button>
        </div>
    </div>
  )
}

export default Curriculum