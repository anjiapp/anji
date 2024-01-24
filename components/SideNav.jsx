'use client';
import Link from "next/link";
import {FaChevronDown, FaChevronRight, FaEllipsis, FaFolder, FaPlus} from "react-icons/fa6";
import React from "react";

export default function SideNav() {
    return (
        <nav className={'flex flex-col mt-6'}>
            <div className={'bg-[#0000000D] py-1 px-3 inline-flex flex-row items-center space-x-2 font-bold rounded-l'}>
                <button><FaChevronDown className={'text-[x-small] font-black'}/></button>
                <FaFolder/>
                <p className={'truncate'}>Selected Folder</p>
                <span className={'flex-1 min-w-0'}></span>
                <FaEllipsis/>
            </div>
            <div className={'flex flex-col pl-7'}>
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
            <div className={'py-1 px-3 inline-flex flex-row items-center space-x-2 font-bold rounded-l'}>
                <FaChevronRight className={'text-[x-small] font-black'}/>
                <FaFolder/>
                <p className={'truncate'}>Tutorial</p>
                <span className={'flex-1 min-w-0'}></span>
                <FaEllipsis className={''}/>
            </div>
        </nav>
    )
}