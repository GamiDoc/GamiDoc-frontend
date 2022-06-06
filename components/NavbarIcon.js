import { useEffect } from "react";

function NavbarIcon({ value, selected, setSelected, position }) {
  return (
    <div className={`w-15 h-8 `} onClick={() => setSelected(position)}>
      <button className="text-black items-center font-sans font-bold mx-2 my-0.5 active:text-3xl">{value}</button>
    </div>
  );
}
export default NavbarIcon;

