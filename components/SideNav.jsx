import Link from "next/link";
import {
    FaChevronDown,
    FaChevronRight,
    FaEllipsis,
    FaFolder,
    FaPlus,
} from "react-icons/fa6";

export default function SideNav(props) {
    return (
        <nav
            className={
                "h-full fixed top-0 py-4 px-2 border-gray-500 border-r-[2px] overflow-y-auto w-[15vw] bg-[#F7F7F5] flex flex-col"
            }
        >
            <Link href={"/dashboard"} className={"text-center"}>
                <h1>anji</h1>
            </Link>

            <Link
                href={"/auth/signout"}
                className={"flex flex-row items-center my-3 space-x-2"}
            >
                <img src={props.pfp} alt={"user_pfp"} width={40}/>
                <p>{props.user.user_metadata.full_name}</p>
            </Link>

            <Link
                className={
                    "text-white bg-[#C4554D] w-[80%] aspect-[3/1] py-3 px-5 inline-flex flex-row items-center justify-between font-bold hover:cursor-pointer rounded-xl"
                }
                href={"/deck/create-deck"}
            >
                <text>New Deck</text>
                <FaPlus/>
            </Link>

            <div
                className={
                    "bg-[#0000000D] py-1 px-3 inline-flex flex-row items-center space-x-2 font-bold rounded-l mt-6"
                }
            >
                <button>
                    <FaChevronDown className={"text-[x-small] font-black"}/>
                </button>
                <FaFolder/>
                <text className={"truncate"}>Selected Folder</text>
                <span className={"flex-1 min-w-0"}></span>
                <FaEllipsis/>
            </div>
            <div className={"flex flex-col pl-7"}>
                <Link className={"truncate"} href={"#"}>
                    Placeholder decks
                </Link>
                <Link className={"truncate"} href={"#"}>
                    Longer Deck Name Longer Deck Name Longer Deck Name Longer
                    Deck Name
                </Link>
            </div>
            <div
                className={
                    "py-1 px-3 inline-flex flex-row items-center space-x-2 font-bold rounded-l"
                }
            >
                <FaChevronRight className={"text-[x-small] font-black"}/>
                <FaFolder/>
                <text className={"truncate"}>Tutorial</text>
                <span className={"flex-1 min-w-0"}></span>
                <FaEllipsis className={""}/>
            </div>
            {props.decks.map((deck, i) => {
                return (
                    <Link
                        key={i}
                        href={`/preview/${deck.deck_id}`}
                        className={"flex flex-col pl-7"}
                        passHref
                    >
                        <text className={"truncate"}>{deck.title}</text>
                    </Link>
                );
            })}
        </nav>
    );
}
