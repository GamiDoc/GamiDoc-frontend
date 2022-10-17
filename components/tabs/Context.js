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

function Context({
  behavior,
  setBehavior,
  discBehavior,
  setDiscBehavior,

  domain,
  setDomain,
  domainDescription,
  setDomainDescription,

  aim,
  setAim,
  aimDescription,
  setAimDescription,

  targetAge,
  setTargetAge,
  targetUser,
  setTargetUser,
  targetCategory,
  setTargetCategory,

  selectObj1, // L'oggetto che contiene i campi del select
  selectObj2, // Aimo
  selectObj3, // Target categories
  selectObj4, // Categories selection
  saveDraft
}) {
  const router = useRouter();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTargetAge(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeDomain = (event) => {
    setDomain(event.target.value);
  };


  return (
    <div className="flex flex-col py-4 w-[60em]">
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
          onChange={handleChangeDomain}
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

      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#target")
          }} />
        </IconButton>
        Target user
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Several documents in the gamification field suggest that users &apos;
        individual differences and preferences are crucial for the success of
        gamified solution.
      </h2>
      <div className="my-5">
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            className="relative w-full shadow-md "
            multiple
            value={targetAge}
            onChange={handleChange}
            input={<OutlinedInput label="Age" />}
          >
            {selectObj3.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          className="relative w-full shadow-md "
          value={targetCategory}
          onChange={(event) => { setTargetCategory(event.target.value) }}
          input={<OutlinedInput label="Category" />}
        >
          {selectObj4.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        className="w-full border  shadow-md top-5"
        id="username"
        type="text"
        multiline
        rows={3}
        value={targetUser}
        onChange={(event) => setTargetUser(event.target.value)}
        placeholder="Target user"
      />
    </div>
  );
}

export default Context;
