import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const bigBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-10 py-3 text-xs font-semibold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BigBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bigBadgeVariants> {}

function BigBadge({ className, variant, ...props }: BigBadgeProps) {
  return (
    <div className={cn(bigBadgeVariants({ variant }), className)} {...props} />
  )
}

export { BigBadge, bigBadgeVariants }
