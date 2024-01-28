'use client';

import PinnedCard from "@/components/PinnedCard";
import CardModal from "@/components/CardModal";
import {useState} from "react";

const cardTitles = ["Philosophy", "Biology", "Japanese", "Calculus", "Chemistry", "French"];

export default function PinnedCards(props) {
    const [isDeckOpen, setIsDeckOpen] = useState(false);
    const [openDeck, setOpenDeck] = useState([]);

    return (
        <>
            <div className={'flex flex-wrap gap-y-5 justify-between'}>
                {
                    props.pinned_decks.length === 0 ?
                        <PinnedCard deck={{title: "No pinned decks", description: "Pin a deck to see it here!"}}
                                    setOpenDeck={() => {}}
                                    setIsDeckOpen={() => {}}/>
                        :
                        <>
                            {
                                props.pinned_decks.map((deck, index) => {
                                    return (
                                        <PinnedCard deck={deck} key={index} setOpenDeck={setOpenDeck}
                                                    setIsDeckOpen={setIsDeckOpen}/>
                                    );
                                })
                            }
                        </>
                }
            </div>
            {
                isDeckOpen &&
                <CardModal deck={openDeck} setIsDeckOpen={setIsDeckOpen}/>
            }
        </>
    )
}