import {FaPlus} from "react-icons/fa6";
import PinnedCards from "./PinnedCards";
import Calendar from "./Calendar";
import CardModal from "./CardModal";
import {useState} from "react";

import '../css/Dashboard.css'

const cardTitles = ["Philosophy", "Biology", "Japanese", "Calculus", "Chemistry", "French"];
export default function Dashboard() {
    const [isDeckOpen, setIsDeckOpen] = useState(false);
    const [openDeck, setOpenDeck] = useState(''); // Use Deck id later for scaling

    return (
        <>
            <div className={'w-[80%] space-y-3'}>
                <div className={'flex justify-between'}>
                    <div>
                        <h2>150 CARDS</h2>
                        <p>Daily Average</p>
                    </div>
                    <div>
                        <h2>7 Day</h2>
                        <p>Streak</p>
                    </div>
                    <div>
                        <h2>0 Day</h2>
                        <p>Longest Streak</p>
                    </div>
                </div>
                <Calendar/>
                {/*<div*/}
                {/*    className={'bg-[#d9d9d9] py-3 px-5 inline-flex flex-row items-center space-x-2 font-bold hover:cursor-pointer'}*/}
                {/*    onClick={() => {*/}

                {/*    }}>*/}
                {/*    <FaPlus/>*/}
                {/*    <p>New</p>*/}
                {/*</div>*/}
                <h2 className={'text-2xl font-bold'}>DECKS</h2>
                <div className={'grid grid-cols-3 gap-x-5 gap-y-7'}>
                    {
                        cardTitles.map((title, index) => {
                            return (
                                <PinnedCards title={title} key={index} setOpenDeck={setOpenDeck}
                                             setIsDeckOpen={setIsDeckOpen}/>
                            );
                        })
                    }
                </div>
            </div>
            {
                isDeckOpen &&
                <CardModal title={openDeck} setIsDeckOpen={setIsDeckOpen} />
            }
        </>
    );
}