'use client';

import PinnedCard from "@/components/PinnedCard";
import CardModal from "@/components/CardModal";
import {useState} from "react";

const cardTitles = ["Philosophy", "Biology", "Japanese", "Calculus", "Chemistry", "French"];

export default function PinnedCards() {
    const [isDeckOpen, setIsDeckOpen] = useState(false);
    const [openDeck, setOpenDeck] = useState(''); // Use Deck id later for scaling

    return (
        <>
            <div className={'flex flex-wrap gap-y-5 justify-between'}>
                {
                    cardTitles.map((title, index) => {
                        return (
                            <PinnedCard title={title} key={index} setOpenDeck={setOpenDeck}
                                         setIsDeckOpen={setIsDeckOpen}/>
                        );
                    })
                }
            </div>
            {
                isDeckOpen &&
                <CardModal title={openDeck} setIsDeckOpen={setIsDeckOpen}/>
            }
        </>
    )
}