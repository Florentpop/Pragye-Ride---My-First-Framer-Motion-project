import { motion } from "framer-motion";
import pic from "../images/A1.png";
import TextC from "../Component/TextC";

const Home = () => {
  return (
    <div>
      <TextC />
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-evenly",
        }}
      >
        <motion.div
          initial={{
            y: -500,
            //opacity: 0,
          }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.8, ease: "easeInOut" }}
        >
          <h1 style={{ paddingLeft: 50, fontSize: 40, marginBottom: "20px" }}>
            Order a Ride to your{" "}
            <span style={{ color: "green" }}>Destination</span> with
          </h1>
          <span
            style={{
              fontSize: 45,
              fontWeight: "bold",
              color: "#FFF",
              backgroundColor: "#D45",

              padding: 10,
              borderRadius: 7,
            }}
          >
            PRAGYA - KEKE
          </span>
        </motion.div>
        <div>
          <motion.img
            initial={{
              x: 0,
              //opacity: 0,
            }}
            animate={{ x: "40vh" }}
            transition={{
              type: "spring",
              stiffness: 60,
              delay: 1,
              //damping: 5,
            }}
            src={pic}
            height="400"
            width="400"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
