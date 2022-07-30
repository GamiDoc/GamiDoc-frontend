import { useState } from "react";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";


function Device({ device, setDevice, DeviceSelection }) {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(0); // per transition
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
        <IconButton
          aria-label="Example"
          onClick={() => router.push("/documentation#technology")}
        >
          <InfoOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        Device
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Gamification elements work differently in relation to context. In this
        section, we ask designers to list the applicational device.
      </h2>
      <FormControl>
        <InputLabel>Device</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={device}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {DeviceSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Device;
