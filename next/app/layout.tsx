import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import Link from "next/link";
import {FaPlus} from "react-icons/fa6";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'h-screen relative flex flex-row'}>
        <div className={"py-4 px-2 border-gray-500 border-r-[2px] overflow-y-auto w-[250px]"}> {/*Create Sidebar here*/}
            <Link href={'/dashboard'}>
                <h1>anji</h1>
            </Link>
            <Link
                className={'text-white bg-[#C4554D] py-3 px-5 inline-flex flex-row items-center space-x-2 font-bold hover:cursor-pointer rounded-xl'}
                href={'#'}>
                <FaPlus/>
                <p> New</p>
            </Link>
            <div className={'flex flex-col border-[solid] mt-6'}>
                <Link
                    className={'truncate'}
                    href={'#'}>
                    Placeholder decks
                </Link>
                <Link
                    className={'truncate'}
                    href={'#'}>
                    Longer Deck Name Longer Deck Name Longer Deck Name Longer Deck Name
                </Link>
            </div>
        </div>
        {
            children
        }
        </body>
        </html>
    )
}
