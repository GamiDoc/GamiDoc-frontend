import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function Feedback({
  timing,
  timingDescription,
  setTimingDescription,
  setTiming,
  context,
  contextDescription,
  setContextDescription,
  setContext,
  selectObj1,
  selectObj2,
}) {
  return (
    <div className="flex flex-col py-4 w-[60em]">
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        This section refers to the selection of the kind of feedback used in the
        software. Since feedback works differently across certain domains and
        users, it is important to specify the content and the timing of used
        feedback.
      </h2>
      
        <FormControl>
          <InputLabel>Timing</InputLabel>
          <Select
            className="relative w-full shadow-md "
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
          className="w-full border shadow-md "
          id="username"
          type="text"
          multiline
          rows={3}
          placeholder="Timing description"
          value={timingDescription}
          onChange={(e) => setTimingDescription(e.target.value)}
        />
      
        <FormControl className="top-10">
          <InputLabel>Context</InputLabel>
          <Select
            className=" w-full shadow-md "
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
          className=" top-10  w-full border shadow-md "
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
