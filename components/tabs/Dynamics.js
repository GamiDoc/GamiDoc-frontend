import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { TextField } from "@mui/material";

function Dynamics({ dynamics, setDynamics }) {

  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <Link href="/documentation#technology">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Dynamics
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        With dynamics we mean interactions between users and mechanics or other
        game elements, different patterns and behavioral strategies that are
        more complex than the sum of their parts. Thus, most of a game is
        experienced through its dynamics instead of its mechanics (Tekinbas &
        Zimmerman, 2003). Hence, it&apos;s important to outline not only the
        core mechanics and the secondary mechanics, but also how users interact
        with them, and which are users&apos; predictable behaviors. Moreover,
        it&apos; s important to outline which kind of interactions we want to
        avoid.
      </h2>
      <TextField
        className={"flex w-full border  shadow-md mb-4"}
        type="text"
        placeholder="Target user"
        multiline
        rows={4}
        value={dynamics}
        onChange={(e) => setDynamics(e.target.value)}
      />
    </div>
  );
}

export default Dynamics;
