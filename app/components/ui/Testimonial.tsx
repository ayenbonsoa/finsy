import React from 'react'

interface testimonialProps {
    message: string
    author: string,
    author_picture: string
}

export default function Testimonial({message, author, author_picture}: testimonialProps) {
  return (
    <div>Testimonial</div>
  )
}
