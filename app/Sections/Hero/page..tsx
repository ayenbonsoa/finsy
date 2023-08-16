import Container from '@/app/components/ui/Container'
import React from 'react'
import heroData from "@/app/data/english.json"

export default function Hero() {
  return (
    <Container>
        <div className='flex mt-16'>
            <div className='w-6/12'>
                illustartion
            </div>
            <div className='w-6/12'>
                {heroData.map((eng, index) => {
                    return <div className='space-y-6'>
                        <div className="space-y-6">
                            <h2 className="text-6xl font-semibold">{eng.hero.hero_headline}</h2>
                            <h3 className="text-lg text-gray-400">{eng.hero.hero_subline}</h3>
                        </div>
                        <div>
                            buttons
                        </div>
                    </div>
                })}
            </div>
        </div>
    </Container>
  )
}
