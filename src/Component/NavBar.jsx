import { BsTelephone } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="Nav">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <BsTelephone size={26} />
        <h3 style={{ marginLeft: 10, fontSize: "18px" }}>+233-000-111-2345</h3>
      </div>

      <div style={{ fontWeight: "bold", fontSize: "25px" }}>
        <h2>PRAGYA RIDE</h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IoMdContact size={35} />
        <h3 style={{ marginLeft: 8, fontSize: "16px" }}>Kofi Baah</h3>
      </div>
    </div>
  );
};

export default NavBar;
