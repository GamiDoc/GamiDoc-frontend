import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { useRouter } from "next/router";

const steps = ["Context", "Technology", "Core", "Personalization", "Game"];

export default function Sidebar() {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState();
  const handleStep = (step) => () => {
    setActiveStep(step);
    switch (step) {
      case 0:
        router.push("#context");
        // code block
        break;
      case 1:
        router.push("#technology");
        // code block
        break;
      case 2:
        router.push("#core");
        break;
      case 3:
        router.push("#personalization");
        break;
      case 4:
        router.push("#game");
        break;
      default:
      // code block
    }
  };

  return (
    <Box sx={{ width: "100%" }} className="sticky top-10 w-full flex ">
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
