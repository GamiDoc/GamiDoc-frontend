import { useEffect } from "react";

function NavbarIcon({ value, selected, setSelected, position }) {
  return (
    <div className={`w-15 h-8`} onClick={() => setSelected(position)}>
      <h1 className="text-black font-sans font-bold mx-2 my-0.5 ">{value}</h1>
    </div>
  );
}
export default NavbarIcon;