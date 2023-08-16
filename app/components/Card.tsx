import React, { ReactNode } from 'react'
import Badge from './ui/Badge'

interface cardProps {
    fullWidth: boolean
    icon: string,
    headline: string,
    subline: string,
    illustration: ReactNode
}

export default function Card({
    fullWidth, 
    icon, 
    headline, 
    subline, 
    illustration
}:cardProps) {
  return (
    <div>
       card
    </div>
  )
}
