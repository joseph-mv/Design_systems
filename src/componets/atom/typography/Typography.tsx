import React from "react";
import { TypographyType } from "./type";

const Typography=({
  tag="p",
  text="text not provided",
  className,
  role,
  aria_label,
  aria_labelledby,
  children,
  style,
}: TypographyType)=> {
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
