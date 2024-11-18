import React from "react";
import './WorkingPage.css'
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { motion } from 'framer-motion';
import ButtonSuprise from "./components/button_suprise.jsx";


function WorkingPage() {
    const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };
    const navigate = useNavigate();
    const new_page = () => {
      return navigate('/running')
  }

    return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.9 }} // Duration of the animation
            >
                <div className="suprise">
                    <div className="suprise_context">
                        <div className="picture_working">
                            <h1 className="suprise_text">You worked a lot to achieve own goals<br/>Not gonna lie - sometimes I worried about you a lot</h1>
                        </div>
                    </div>
                    <div className="suprise_button_container">
                        <ButtonSuprise onClick={new_page} />
                    </div>
                </div>
            </motion.div>
        );
};

export default WorkingPage;