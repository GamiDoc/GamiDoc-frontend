import React from "react";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

function Rules({ rules, setRules }) {
  const router = useRouter();

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <a href="/documentation#gamerules">
        <IconButton
          aria-label="Example"
          //onClick={() => router.push("/documentation#gamerules")}
        >
          <InfoOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton></a>
        Rules
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        In this section, we ask designers to clearly define the game rules in
        detail.
      </h2>
      <label className="block text-gray-700   font-bold mb-2" />
      <TextField
        className="  w-full border shadow-md "
        id="username"
        type="text"
        multiline
        rows={3}
        placeholder="Rules"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
      />
    </div>
  );
}

export default Rules;
