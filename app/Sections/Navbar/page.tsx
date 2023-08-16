import Container from '@/app/components/ui/Container'
import React from 'react'
import Link from 'next/link'
import data from "@/app/data/english.json"
import Button from '@/app/components/ui/Button'

export default function Navbar() {
  return (
    <Container>
      { data.map((eng, index) => {
        return <div className='flex justify-between py-4'>
            <div className="w-3/12 items-center">Logo</div>
            <div className="w-6/12 flex justify-center items-center">
            <ul className="list-none flex space-x-6">
              <li>
                <Link href={eng.navbar.links.products}>{eng.navbar.links.products}</Link>
              </li>
              <li>
                <Link href={eng.navbar.links.company}>{eng.navbar.links.company}</Link>
              </li>
              <li>
                <Link href={eng.navbar.links.features}>{eng.navbar.links.features}</Link>
              </li>
              <li>
                <Link href={eng.navbar.links.pricing}>{eng.navbar.links.pricing}</Link>
              </li>
              <li>
                <Link href={eng.navbar.links.support}>{eng.navbar.links.support}</Link>
              </li>
            </ul>
            </div>
            <div className="w-3/12 flex justify-end">
              <div className="flex space-x-6">
                <Button intent={"secondary"}>{eng.navbar.actions.login}</Button>
                <Button>{eng.navbar.actions.newAccount}</Button>
              </div>
            </div>
        </div>
      })}
    </Container>
  )
}
