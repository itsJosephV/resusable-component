import {ButtonHTMLAttributes, ReactNode} from "react";
import {VariantProps, cva} from "class-variance-authority";

import {cn} from "../cn";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({children, className, variant, size, ...props}: Props) => {
  return (
    <button className={cn(buttonVariants({variant, size, className}))} {...props}>
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary:
        "cursor-pointer bg-blue-400 text-blue-100 border-blue-300 rounded-md border p-1 px-2",
      secondary: "cursor-pointer border border-green-400 bg-green-300 text-green-600 p-1 px-2",
      danger: "cursor-pointer border border-red-400 bg-red-300 text-red-100",
    },
    size: {
      sm: "text-sm px-1.5 py-0.5",
      md: "text-base px-2 py-1",
      lg: "text-lg px-4 py-2",
    },
    defaulVariants: {
      variant: "primary",
      size: "md",
    },
  },
});
