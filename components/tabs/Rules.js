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
        Game behavior component refers to the clarification of the game rules,
        game mechanics, game progression, and its graphical representation
        through game loop diagrams. The game rules determine, just like in any
        other game, how the game inside the application is played. The mechanics
        describe what happens when a player does something in the game in order
        to achieve the game&apos;s goal. Progression is defined through a subset
        of game mechanics that describe how the game overall progresses like,
        for example, player levels advancing and, thereby, unlocking new things
        for the game.
        <br />
        <br /> The final output consists of a list of the game rules and their
        links, in which mechanics and progression are specified. Moreover, this
        part is linked to the dynamics subcomponent, which provides a list of
        possible dynamics that can emerge runtime or after a certain number of
        runs. This allows researchers and practitioners to (1) monitor the
        interaction between users and mechanics, and (2) to modify the design in
        order to avoid inadequate interactions and behaviors.
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
      {/* <h2
        className={
          affordances1 == ""
            ? " hidden w-[60em] mt-4  text-gray-700  mb-2 "
            : "w-[60em] mt-4 block text-gray-700  mb-2 "
        }
      >
        Clarify the affordances rules.
      </h2>

      <TextField
        type="text"
        className="hidden"
        multiline
        rows={3}
        label={affordances1}
        // value={behavior}
        // onChange={(e) => setBehavior(e.target.value)}
      />

      <TextField
        type="text"
        className={
          affordances2 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        multiline
        rows={3}
        label={affordances2}
        // value={behavior}
        // onChange={(e) => setBehavior(e.target.value)}
      />

      <TextField
        type="text"
        className={
          affordances3 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        multiline
        rows={3}
        label={affordances3}
        // value={behavior}
        // onChange={(e) => setBehavior(e.target.value)}
      />

      <TextField
        type="text"
        className={
          affordances4 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        multiline
        rows={3}
        label={affordances4}
        // value={behavior}
        // onChange={(e) => setBehavior(e.target.value)}
      />

      <TextField
        type="text"
        className={
          affordances5 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        multiline
        rows={3}
        label={affordances5}
        // value={behavior}
        // onChange={(e) => setBehavior(e.target.value)}
      />

      <TextField
        type="text"
        className={
          affordances6 == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        multiline
        rows={3}
        label={affordances6}
        // value={behavior}
        // onChange={(e) => setBehavior(e.target.value)}
      /> */}
    </div>
  );
}
export default Rules;
