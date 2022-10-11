import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { TextField } from "@mui/material";

function Personalization({ personalization, setPersonalization, saveDraft }) {

  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        {/* STRANO CHE PERSONALIZATION RIPORTI A TECHNOLOGY */}
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            saveDraft()
            router.push("documentation#technology")
          }} />
        </IconButton>
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
