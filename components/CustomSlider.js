import Slider from "@mui/material/Slider"
import { createTheme, ThemeProvider } from "@mui/material/styles"
export default function CustomSlider({ data, setState, type, pos }) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFB900'
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="flex-col justify-start w-full">
        <p className="font-semibold text-black">
          {type}:
        </p>
        <Slider
          aria-label={type}
          defaultValue={5}
          // className="text-yellow-gamy"
          // getAriaValueText={valuetext}
          // valueLabelDisplay="on"
          valueLabelDisplay="auto"
          onChange={(e) => {
            setState([e.target.value, pos])
          }}
          step={1}
          marks
          min={1}
          max={10}
          color="secondary"
        />
      </div>
    </ThemeProvider>
  )

}
