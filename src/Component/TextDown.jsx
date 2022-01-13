import { motion } from "framer-motion";
import { FaCcVisa, FaAlipay, FaEthereum, FaBitcoin } from "react-icons/fa";

const TextDown = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "28px",
        paddingBottom: "28px",
        //height: "100%",
      }}
    >
      <div
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
          transition={{
            type: "spring",
            duration: 1.9,
            ease: "easeInOut",
            delay: 3.2,
          }}
          style={{
            fontSize: 18,
            fontWeight: "bold",
            padding: 8,
            backgroundColor: "#D45",
            color: "white",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Book Ride Now
        </motion.span>
        <span
          style={{
            fontSize: 18,
            fontWeight: "bold",
            //padding: 10,
            //backgroundColor: "#EE1",
            color: "green",
            //borderRadius: 5,
          }}
        >
          <FaBitcoin size={30} style={{ marginRight: 5 }} />
          <FaEthereum size={30} style={{ marginRight: 5 }} />
          <FaCcVisa size={30} style={{ marginRight: 5 }} />
          <FaAlipay size={30} />
        </span>
      </div>
    </div>
  );
};

export default TextDown;
