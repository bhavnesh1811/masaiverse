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
                <p>100% <span>Live</span> Distance Learning</p>
                <p>India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get Real-Time Feedback, Interactive Sessions & A Personalised Learning Experience.</p>
               </div>
               <div>
                <p>Generative <span>AI Integrated</span> Program</p>
                <p>Harness & Implement The Power Of AI In Coding & Data Analytics. What’s More? Use Custom AI Tools To Enhance Placement Preparation.</p>
               </div>
               <div>
                <p><span>Industry Ready</span> Curriculum</p>
                <p>Our Curriculum Is Regularly Updated Through Industry Feedback. In-Demand Specialisations Are Added To Aid Our Students Launch Sustainable Careers.</p>
               </div>
               <div>
                <p>Focus On Learning <span>Agility</span></p>
                <p>We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.</p>
               </div>
               <div>
                <p>Industry Ready In Just <span>25 - 35 Weeks</span></p>
                <p>Curriculum At Masai Is Designed To Be Intensive & Extensive. With Our Unique Pedagogy Learn Right In Less Time. All We Ask Is Your Dedication!</p>
               </div>
            </div>
            <div className={styles.right_container}>
                <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/course-image5.webp" alt="" />
            </div>
        </div>
        <div className={styles.button} style={{margin:"20px auto"}}>
            <button>GET YOUR DREAM JOB</button>
        </div>
    </div>
  )
}

export default Curriculum