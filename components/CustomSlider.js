import Slider from "@mui/material/Slider"
export default function CustomSlider({ setState, type, pos }) {

  return (
    < div className="flex-col justify-start w-full" >
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
    </div >
  )

}
