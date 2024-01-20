import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Link from "next/link";
import {FaChevronDown, FaChevronRight, FaEllipsis, FaFolder, FaPlus} from "react-icons/fa6";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    /* Need to figure out folders data structure */
    // const [folders, setFolders] = useState([]);

    function handleFolders(someSortOfId) {
        /* Find id in folders and update boolean value to show/hide tasks */
    }

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
            {/* convert this section to a sidenav client component or else updates won't work */}
            <div className={'flex flex-col mt-6'}>
                <div className={'bg-[#0000000D] py-1 px-3 inline-flex flex-row items-center space-x-2 font-bold rounded-l'}>
                    <button><FaChevronDown className={'text-[x-small] font-black'}/></button>
                    <FaFolder/>
                    <p className={'truncate'} >Selected Folder</p>
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
                    <p className={'truncate'} >Tutorial</p>
                    <span className={'flex-1 min-w-0'}></span>
                    <FaEllipsis className={''}/>
                </div>
            </div>
        </div>
        {
            children
        }
        </body>
        </html>
    )
}
