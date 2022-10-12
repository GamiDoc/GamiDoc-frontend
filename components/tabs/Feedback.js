import Swal from "sweetalert2"
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Feedback({

  timing,
  setTiming,
  timingDescription,
  setTimingDescription,
  selectObj1,

  context,
  contextDescription,
  setContextDescription,
  setContext,
  selectObj2,
  saveDraft

}) {
  const router = useRouter();
  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        {/* STRANO CHE FEEDBACK RIPORTI A TECHNOLOGY */}
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#technology")
          }} />
        </IconButton>
        Feedback
      </label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        Feedback component refers to the selection of the kind of feedback used
        in the software. Since there are different ways to provide feedback,
        mainly according to the content and timing, and since feedback work
        differently across certain domains and users (Hassan et al., 2019), this
        section is needed to specify the content and the timing of used
        feedback. Hence, GamiDOC provides a choice according to the timing
        (immediate feedback, late feedback, and personalized feedback), and a
        choice for the content (corrective feedback, explanatory feedback,
        reporting feedback, and personalized feedback).
      </h2>

      <FormControl className="top-3">
        <InputLabel>Timing</InputLabel>
        <Select
          className="relative w-full shadow-md"
          single
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj1.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        className="w-full border  top-4"
        id="username"
        type="text"
        multiline
        rows={3}
        placeholder="Timing description"
        value={timingDescription}
        onChange={(e) => setTimingDescription(e.target.value)}
      />

      <FormControl className="top-10">
        <InputLabel>Content</InputLabel>
        <Select
          className=" w-full  shadow-md"
          single
          value={context}
          onChange={(e) => setContext(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj2.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        className=" top-11  w-full border  "
        id="username"
        type="text"
        multiline
        rows={3}
        placeholder="Context description"
        value={contextDescription}
        onChange={(e) => setContextDescription(e.target.value)}
      />
    </div>
  );
}
