import '@/css/globals.css'
import Link from "next/link";
import {FaPlus} from "react-icons/fa6";
import SideNav from "@/components/SideNav";

export const metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={'h-screen relative flex flex-row'}>
        <div
            className={"py-4 px-2 border-gray-500 border-r-[2px] overflow-y-auto w-[250px] flex flex-col"}> {/*Create Sidebar here*/}
            <Link href={'/dashboard'} className={'text-center'}>
                <h1>anji</h1>
            </Link>
            <a href="/dashboard">Login</a>
            <Link
                className={'text-white bg-[#C4554D] w-[80%] aspect-[3/1] py-3 px-5 inline-flex flex-row items-center justify-between font-bold hover:cursor-pointer rounded-xl'}
                href={'#'}>
                <p>New Deck</p>
                <FaPlus/>
            </Link>

            <SideNav/>
        </div>
        {
            children
        }
        </body>
        </html>
    )
}