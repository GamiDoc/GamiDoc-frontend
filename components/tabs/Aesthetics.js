import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Aesthetics(aesthetics, setAesthetics) {
  return (
    <div>
      <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
        Aesthetics
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700 text-sm mb-2 ">
        This section contains all the information related to the aesthetic
        component of the software. Aesthetics has a direct relationship with the
        users’ experience: the more beautiful the aesthetic part is, the more
        interesting and compelling the users will find it. Hence, this leads to
        better levels of motivation and engagement. We ask designers to describe
        and add all the information related to the aesthetic experience, user
        interface, and so forth.
      </h2>
      <label className="block text-gray-700 text-sm  font-bold mb-2" />
      <TextareaAutosize
        className="w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   sm:text-sm"
        id="aesthetics"
        type="text"
        minRows={4}
        placeholder="Aesthetics"
        value={aesthetics}
        onChange={(e) => setAesthetics(e.target.value)}
      />
    </div>
  );
}

export default Aesthetics;
