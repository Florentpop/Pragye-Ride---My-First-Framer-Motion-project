import "../App.css";
import { motion, variants } from "framer-motion";

const text = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "45px",
        //paddingBottom: "28px",
        //height: "100%",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <motion.span
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
          style={{ fontSize: 22, color: "#D45", fontWeight: "bold" }}
        >
          Fast & Safe Ride
        </motion.span>
        <motion.span
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.9,
            ease: "easeInOut",
            delay: 2.8,
          }}
          style={{ fontSize: 20, color: "green" }}
        >
          <span style={{ fontWeight: "bold" }}>24</span> / 7 hrs
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default text;
