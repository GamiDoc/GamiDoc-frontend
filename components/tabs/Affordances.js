import Swal from "sweetalert2"
// import { useState, useEffect } from "react"
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

// Add Button for a new game element 
import { createTheme, ThemeProvider } from "@mui/material/styles"
// import Button from '@mui/material/Button'; // dont really need it 
import AddCircle from '@mui/icons-material/Add'; //AddCircleOutline

function Affordances({
  affordances,
  setAffordances,
  affordancesSelection,
  saveDraft
}) {
  let router = useRouter()

  // MUI:i tried wrapping it with themeProvider in the __app but it doesnt work, I really need to fix this  :( 
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFB900',
        font: "bold"
      },
      primary: {
        main: '#374151',
        font: "bold"
      },
      black: {
        main: '#000000',
        font: "bold"
      },
      white: {
        main: '#dddddd',
        font: "bold"
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col w-[60em] py-4 ">
        <label className=" mt-4 block text-gray-700  font-bold mb-2">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
              Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
              saveDraft()
              router.push("documentation#affordances")
            }} />
          </IconButton>
          Game Elements
        </label>
        <h2 className=" mt-4 block text-gray-700  mb-2 ">
          Gamification elements component shows a list of gamified elements used
          in the software. The previous components are useful to better understand
          which gamification elements fit in the proper way. The selected taxonomy
          of possible gamified elements comes from the work of Toda and colleagues
          (Toda, Klock, et al., 2019; Toda, Oliveira, et al., 2019): <br />•
          Performance: Acknowledgement, Level, Progression, Points, Stats; <br />•
          Ecological: Chance, Imposed choice, Economy, Rarity, Time Pressure;{" "}
          <br />
          • Social: Competition, Cooperation, Reputation, Social Pressure; <br />
          • Personal: Novelty, Objectives, Puzzle, Renovation, Sensation; <br />
          • Fictional: Narrative, Storytelling
          <br />
        </h2>
        <div className="w-auto mt-3">
          {(affordances[0]) ?
            affordances.map((item) => {
              return (
                <div>
                  <Select
                    single
                    value={item.type}
                    onChange={(e) => {
                      setAffordances(affordances[item.pos].type = e.target.value)
                    }}
                    input={<OutlinedInput />}
                  >
                    <MenuItem disabled value="">
                      <em className="text-gray-400 font-normal ">Game elements</em>
                    </MenuItem>
                    {affordancesSelection.map((name) => {
                      if (!affordances.find(element => element.type == name))
                        return (<MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>)
                    })}
                  </Select>

                  <TextField
                    type="text"
                    multiline
                    rows={3}
                    value={item.text}
                    onChange={(e) => {
                      setAffordances(affordances[item.pos].text = e.target.value)
                    }}
                  />
                </div>)
            })
            : ""}
          <div
            className="rounded-full bg-yellow-gamy hover:bg-yellow-500 "
            onClick={() => {
              let pos = affordances.lenght
              // if (pos == undefined) pos == 0
              setAffordances(affordances.push({ type: "", text: "", pos: pos }))
            }}
          >
            <AddCircle sx={{ fontSize: "30px" }} color="white" />
          </div>

        </div>
      </div >
    </ThemeProvider>
  );
}

export default Affordances;
