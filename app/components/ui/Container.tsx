import React from 'react'
import { VariantProps, cva } from 'class-variance-authority';

const container = cva('', {
  variants: {
    intent: {
      default: "px-4 md:px-6 max-w-6xl mx-auto"
    }
  },
  defaultVariants: {
    intent: "default"
  }
})

interface ContainerProps extends VariantProps<typeof container> {
  children: React.ReactNode;
}

export default function Container({children, intent}:ContainerProps) {
  return (
    <div className={container({intent})}>
      {children}
    </div>
  )
}
