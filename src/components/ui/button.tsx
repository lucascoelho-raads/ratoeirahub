import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-normal rounded-button text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-black hover:bg-brand-primary-hover",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "border border-white/10 bg-transparent hover:bg-white/10 text-white",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/10 text-white",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-12 h-12 px-4 py-2 md:min-h-10 md:h-10",
        sm: "min-h-11 h-11 rounded-md px-3 md:min-h-9 md:h-9",
        lg: "min-h-12 h-12 rounded-button px-8 md:min-h-11 md:h-11 lg:min-h-14 lg:h-14",
        icon: "min-h-12 h-12 w-12 md:min-h-10 md:h-10 md:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
