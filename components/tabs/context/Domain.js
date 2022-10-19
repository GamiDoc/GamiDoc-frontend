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


export default function Domain({
  domain,
  setDomain,
  domainDescription,
  setDomainDescription,
  selectObj1, // Domain select array 
  saveDraft
}) {
  const router = useRouter();


  return (
    <>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        The context component allows researchers and practitioners to design the
        gamification system keeping track of contextual information. This
        section provides four subcomponents to be considered: application
        domain, aim of the software, definition of target users, and the
        selection of encouraged and avoided behaviors
      </h2>

      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#domain")
          }} />
        </IconButton>
        Domain
      </label>
      <h2 className=" mt-4  block text-gray-700  mb-2 ">
        The domain component collects the application domain in which the
        gamified solution will be used. For the taxonomy of possible domains, we
        chose the list included in Koivisto & Hamari, 2019:
      </h2>
      <FormControl>
        <InputLabel>Domain</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={domain}
          onChange={(event) => {
            setDomain(event.target.value)
          }}
          input={<OutlinedInput label="Domain" />}
        >
          {selectObj1.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className="w-full border  shadow-md "
        id="domain"
        type="text"
        multiline
        rows={3}
        placeholder="Describe your Domain"
        value={domainDescription}
        onChange={(e) => setDomainDescription(e.target.value)}
      />

    </>
  )
}
