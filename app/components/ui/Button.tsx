import React from 'react'
import { VariantProps,cva } from 'class-variance-authority';

const button = cva('px-4 py-2 rounded-full', {
    variants: {
        intent: {
            default:"bg-black text-white",
            primary:"bg-yellow-500 text-black",
            secondary: "bg-transparent text-black"
        }
    },
    defaultVariants: {
        intent: "default"
    }
})

interface ButtonProps extends VariantProps<typeof button>{
    children: React.ReactNode;
}

export default function Button({children, intent}:ButtonProps) {
  return (
    <button className={button({intent})}>
        {children}
    </button>
  )
}
