import { useState } from "react";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { TextField } from "@mui/material";

function Personalization({ personalization, setPersonalization }) {
  const router = useRouter();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDevice(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <Link href="/documentation#technology">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Personalization
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Several solutions in the gamification field suggest a personalization or
        adaptation of the gamified solutions according to several individual
        differences and preferences, such as the player type, personality
        traits, motivation and goal (Fortes Tondello et al., 2018), and so
        forth. For this, we decided to add a part related to the selection of a
        personalization modality and a possible adaptation feature.
      </h2>
      <TextField
        className={"flex w-full border  shadow-md mb-4"}
        type="text"
        placeholder="Personalization"
        multiline
        rows={3}
        value={personalization}
        onChange={(e) => setPersonalization(e.target.value)}
      />
    </div>
  );
}

export default Personalization;
