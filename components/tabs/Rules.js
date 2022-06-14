import React from "react";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Rules({rules, setRules}) {
  const [isShowing, setIsShowing] = useState(0); // per transition

  return (
    <div>
      <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
        Rules
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700 text-sm mb-2 ">
        In this section, we ask designers to clearly define the game rules in
        detail.
      </h2>
      <label className="block text-gray-700 text-sm  font-bold mb-2" />
      <TextareaAutosize
        onClick={() => setIsShowing(1)}
        className="w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   sm:text-sm"
        id="rules"
        type="text"
        minRows={4}
        placeholder="Rules"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
      />
    </div>
  );
}

export default Rules;
