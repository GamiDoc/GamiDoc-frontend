import React from "react";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Link from "next/link";

function Rules({
  rules,
  setRules,
  affordances1,
  affordances2,
  affordances3,
  affordances4,
  affordances5,
  affordances6,
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <Link href="/documentation#gamerules">
          <IconButton
            aria-label="Example"
            //onClick={() => router.push("/documentation#gamerules")}
          >
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
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
      <h2
        className={
          affordances1 == ""
            ? " hidden w-[60em] mt-4  text-gray-700  mb-2 "
            : "w-[60em] mt-4 block text-gray-700  mb-2 "
        }
      >
        Clarify the affordances rules.
      </h2>

      <div
        className={
          affordances1 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
      >
        <TextField
          type="text"
          multiline
          rows={3}
          label={affordances1}
          // value={behavior}
          // onChange={(e) => setBehavior(e.target.value)}
        />
      </div>
      <div
        className={
          affordances2 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
      >
        <TextField
          type="text"
          multiline
          rows={3}
          label={affordances2}
          // value={behavior}
          // onChange={(e) => setBehavior(e.target.value)}
        />
      </div>
      <div
        className={
          affordances3 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
      >
        <TextField
          type="text"
          multiline
          rows={3}
          label={affordances3}
          // value={behavior}
          // onChange={(e) => setBehavior(e.target.value)}
        />
      </div>
      <div
        className={
          affordances4 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
      >
        <TextField
          type="text"
          multiline
          rows={3}
          label={affordances4}
          // value={behavior}
          // onChange={(e) => setBehavior(e.target.value)}
        />
      </div>
      <div
        className={
          affordances5 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
      >
        <TextField
          type="text"
          multiline
          rows={3}
          label={affordances5}
          // value={behavior}
          // onChange={(e) => setBehavior(e.target.value)}
        />
      </div>
      <div
        className={
          affordances6 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
      >
        <TextField
          type="text"
          multiline
          rows={3}
          label={affordances6}
          // value={behavior}
          // onChange={(e) => setBehavior(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Rules;
