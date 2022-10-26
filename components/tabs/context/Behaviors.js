import Swal from "sweetalert2"
import * as React from "react";
// import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
// Mui elements not used:
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";


export default function Behaviors({
  behavior,
  setBehavior,
  discBehavior,
  setDiscBehavior,
  saveDraft
}) {
  const router = useRouter();
  return (
    <>
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#behaviors")
          }} />
        </IconButton>
        Encouraged Behaviors
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        One of the main aspects of gamification is to modify a behavioral
        pattern. The encouraged and avoided behaviors component collects a clear
        definition of what are the behaviors that have to be encouraged and
        which ones need to be avoided.
      </h2>
      <label className="block text-gray-700   font-bold mb-2" />

      <FormControl fullWidth>
        <TextField
          className="w-full border  shadow-md "
          id="Encouraged Behaviors"
          type="text"
          multiline
          rows={3}
          value={behavior}
          onChange={(e) => setBehavior(e.target.value)}
          label="Encouraged Behaviors"
        />
      </FormControl>

      <div className="my-5">
        <FormControl fullWidth>
          <TextField
            className="w-full border  shadow-md "
            id="Discouraged Behaviors"
            type="text"
            multiline
            rows={3}
            value={discBehavior}
            onChange={(e) => setDiscBehavior(e.target.value)}
            label="Discouraged Behaviors"
          />
        </FormControl>
      </div>

    </>
  )
}
