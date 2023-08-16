import Container from '@/app/components/ui/Container'
import React from 'react'
import Image from 'next/image'
import heroData from "@/app/data/english.json"
import Button from '@/app/components/ui/Button'

export default function Hero() {
  return (
    <Container>
        <div className='flex mt-16'>
            <div className='w-6/12'>
                illustration
            </div>
            <div className='w-6/12'>
                {heroData.map((eng, index) => {
                    return <div>
                    <div className='space-y-10'>
                        <div className="space-y-6">
                            <h2 className="text-6xl font-semibold">{eng.hero.hero_headline}</h2>
                            <h3 className="text-lg text-gray-400">{eng.hero.hero_subline}</h3>
                        </div>
                        <div className='flex space-x-3'>
                            <Button intent={"primary"}>{eng.hero.actions.open}</Button>
                            <Button intent={'secondary'} modifier={'slim'}>{eng.hero.actions.generate}</Button>
                        </div>
                    </div>
                    <div className="flex mt-12">
                    <div className='flex -space-x-2 pr-6 w-4/12'>
                        <div className='rounded-full h-10 w-10 ring-2 ring-white'>
                            <Image
                             src={eng.hero.users.headmoji.james}
                             alt='user head'
                             width="100"
                             height="50"
                            ></Image>
                        </div>
                        <div className='rounded-full h-10 w-10 ring-2 ring-white'>
                        <Image
                             src={eng.hero.users.headmoji.john}
                             alt='user head'
                             width="100"
                             height="50"
                            ></Image>
                        </div>
                        <div className='rounded-full h-10 w-10 ring-2 ring-white'>
                        <Image
                             src={eng.hero.users.headmoji.jill}
                             alt='user head'
                             width="100"
                             height="50"
                            ></Image>
                        </div>
                    </div>
                    <div className='space-y-3 w-8/12'>
                        <div className="flex space-x-1">
                        <i className="ri-arrow-drop-up-fill text-5xl text-teal-300"></i>
                        <h3 className="text-5xl font-medium">{eng.hero.users.numbers}</h3>
                        </div>
                        
                        <h4 className="text-gray-400 lg">{eng.hero.users.comment}</h4>
                    </div>
                </div>
                </div>
                })}
            </div>
        </div>
    </Container>
  )
}
