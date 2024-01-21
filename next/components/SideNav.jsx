import Link from "next/link";
import {FaPlus} from "react-icons/fa6";
import React from "react";

export default function SideNav() {
    return (
        <nav className={"py-4 px-2 border-gray-500 border-r-[2px] overflow-y-auto resize-x"} id={'nav'}> {/*Create Sidebar here*/}
            <Link href={'/dashboard'}>
                <h1>anji</h1>
            </Link>
            <Link
                className={'w-full text-white bg-[#C4554D] py-3 px-5 inline-flex flex-row items-center space-x-2 font-bold hover:cursor-pointer rounded-xl'}
                href={'#'}>
                <FaPlus/>
                <p> New</p>
            </Link>
        </nav>
    )
}