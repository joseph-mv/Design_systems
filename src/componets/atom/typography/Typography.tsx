import React from "react";
import { TypographyType } from "./type";

const Typography:React.FC< TypographyType>=({
  tag="p",
  text="text not provided",
  className,
  role,
  aria_label,
  aria_labelledby,
  children,
  style,
})=> {
  return React.createElement(
    tag,
    {
      className,
      style: style,
      role: role,
      "aria-label": aria_label,
      "aria-labelledby": aria_labelledby,
    },
    text,
    children
  );
}

export default Typography;
