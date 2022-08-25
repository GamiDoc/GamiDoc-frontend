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
import Link from "next/link";

export default function Modality({ modality, setModality, selectObj1 }) {
  const router = useRouter();

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <Link href="/documentation#modality">
          <IconButton
            aria-label="Example"
            onClick={() => router.push("/documentation#modality")}
          >
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Type of Modality
      </label>

      <h2 className="mt-4 block text-gray-700  mb-2 ">
        This component is dedicated to the definition of the main modality
        included in the gamification software. Despite the scarcity of evidence
        on cooperative gamification, the few results in literature show
        differences in cooperative and competitive modalities of gamification
        and that different game elements support the different modalities. In
        the identification of different gamification modalities, we decided to
        follow the distinction made by Morschheuser and colleagues between (1)
        individual, (2) cooperative, (3) competitive, and (4)
        cooperative-competitive gamification features, with the last one
        referring to those elements which support users’ cooperation with their
        ingroup (i.e., team mates), and competition with the outgroup (i.e.,
        team competition).
      </h2>
      <FormControl>
        <InputLabel>Modality</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={modality}
          onChange={(e) => setModality(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj1.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
