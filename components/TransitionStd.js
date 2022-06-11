import React from "react";
import { Fragment } from "react";
import Transition from "@headlessui/react";

function TransitionStd({ selected, content }) {
  return (
    <Transition
      show={selected}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {content}
    </Transition>
  );
}
export default TransitionStd;
