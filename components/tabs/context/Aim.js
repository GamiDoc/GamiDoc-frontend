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


export default function Aim({
  aim,
  setAim,
  aimDescription,
  setAimDescription,
  selectObj2, // Aimo
  saveDraft
}) {
  const router = useRouter();
  return (
    <>
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#aim")
          }} />
        </IconButton>
        Aim
      </label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        The goals of many gamification projects do not appear to have been
        clearly set out before the projects began. The goal of a gamified
        solution may simply be to increase the number of students, to increase
        the cooperation among users or simply to support a behavior change
        towards eco-sustainable behaviors. In order to help researchers and
        practitioners in the reasoning underlying the design and development of
        software, the aim component collects information about the goal of the
        designed software and why it has been thought.
      </h2>
      <FormControl>
        <InputLabel>Aim</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={aim}
          onChange={(e) => setAim(e.target.value)}
          input={<OutlinedInput label="Aim" />}
        >
          {selectObj2.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className="w-full border  shadow-md "
        id="aim"
        type="text"
        multiline
        rows={3}
        placeholder="Describe your Aim"
        value={aimDescription}
        onChange={(e) => setAimDescription(e.target.value)}
      />
    </>
  )
}
