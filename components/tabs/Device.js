import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

function Device({ device, setDevice, DeviceSelection }) {
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
        <Link href="/documentation#technology">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Device
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        The technology component takes into account hardware, software, input
        and output devices, any other technological component involved in the
        software development, and the kind of device in which the software will
        be used. Since there are several different devices that can be used for
        gamified solutions, it is important to comprehend if the selected
        choices could fit the context information (i.e. device type, game
        engine, etc), and then if the selected gamified elements are optimal for
        the selected device.
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
