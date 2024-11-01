import React from "react";
import { ButtonProps } from "./type";
import classNames from "classnames";

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variants="primary",
  variantType='fill',
  loading,
  ...props
}) => {


 

 
const btnClasses=classNames('p-2 rounded px-5 rounded cursor-pointer flex items-center gap-3',{
  'bg-primary font-bold':variants==='primary' && variantType==='fill',
  'bg-secondary font-bold':variants==='secondary' && variantType==='fill',
  'bg-tertiary font-bold':variants==='tertiary' && variantType==='fill',
  'border-2 border-primary font-bold':variants==='primary' && variantType==='outline',
  'border-2 border-secondary font-bold':variants==='secondary' && variantType==='outline',
  'border-2 border-tertiary font-bold':variants==='tertiary' && variantType==='outline',
  'cursor-not-allowed opacity-50':loading
  
},className)

  return (
    <button  disabled={loading} className={btnClasses } {...props} >
      {loading && <span className="bg-red-300 animate-spin size-4 rounded-full border-t-4  border-blue-500 "></span>}
      {children}

    </button>
  );
};
