import Swal from "sweetalert2"
import React from "react";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router"

function Rules({
  rules,
  setRules,
  saveDraft
}) {
  const router = useRouter()

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#gamerules")
          }} />
        </IconButton>
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

      {/*MENU CON FRECCE IN CUI ALLA FINE C'ERANO I GAME ELEMENTS*/}
      {/*   <TextField */}
      {/*     className=" -top-2 w-31 border shadow-md " */}
      {/*     id="username" */}
      {/*     type="text" */}
      {/*     multiline */}
      {/*     placeholder="Game action" */}
      {/*     value={value1} */}
      {/*     onChange={(e) => setValue1(e.target.value)} */}
      {/*   /> */}
      {/*   <Image */}
      {/*     loader={sanityIoImageLoader} */}
      {/*     src="image-src" */}
      {/*     alt="GamiDoc" */}
      {/*     height={34} */}
      {/*     width={85} */}
      {/*   /> */}
      {/*   <TextField */}
      {/*     className=" -top-2 w-31 border shadow-md " */}
      {/*     id="username" */}
      {/*     type="text" */}
      {/*     multiline */}
      {/*     placeholder="Condition" */}
      {/*     value={value2} */}
      {/*     onChange={(e) => setValue2(e.target.value)} */}
      {/*   /> */}
      {/*   <Image */}
      {/*     loader={sanityIoImageLoader} */}
      {/*     className="top-4" */}
      {/*     src="image-src" */}
      {/*     alt="GamiDoc" */}
      {/*     height={34} */}
      {/*     width={85} */}
      {/*   /> */}
      {/*   <FormControl className="relative w-60 shadow-md mb-4 -top-2"> */}
      {/*     <Select */}
      {/*       single */}
      {/*       value={value3} */}
      {/*       onChange={(e) => setValue3(e.target.value)} */}
      {/*       input={<OutlinedInput />} */}
      {/*     > */}
      {/*       <MenuItem disabled value=""> */}
      {/*         <em className="text-gray-400 font-normal ">Game elements</em> */}
      {/*       </MenuItem> */}
      {/*       {affordancesSelection.map((name) => ( */}
      {/*         <MenuItem key={name} value={name}> */}
      {/*           {name} */}
      {/*         </MenuItem> */}
      {/*       ))} */}
      {/*     </Select> */}
      {/*   </FormControl> */}
    </div>
  );
}
// States, loaders and callbacks for the arrow menu 
// const sanityIoImageLoader = ({ src, width, quality }) => {
//   return `https://i.imgur.com/jUFe5JY.png`;
// };
// const [value1, setValue1] = useState("")
// const [value2, setValue2] = useState("")
// const [value3, setValue3] = useState("")
// useEffect(() => {
//   if (value1 && value2 && value3) return
//   setAffordances(value1 + "=>" + value2 + "=>" + value3)
// }, [value1, value2, value3])
// useEffect(() => {
//   let aff = affordances.split("=>")
//   setValue1(aff[0])
//   setValue2(aff[1])
//   setValue3(aff[2])
// }, [])

export default Rules;
