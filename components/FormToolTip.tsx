import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function FormTooltip() {
  return (
    <>
      <a data-tip="" data-for="my-tooltip" data-place="top" data-effect="solid">
        Hover over me
      </a>
      <Tooltip id="my-tooltip" content="Hello world!" />
    </>
  );
}
