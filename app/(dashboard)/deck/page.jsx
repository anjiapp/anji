import sample_cards from "./sample_cards";
import ModalChildren from "@/components/ModalChildren";

export default async function StudyPage({params, searchParams}) {
    const id = searchParams?.id;
    const deck = sample_cards[id];
    return (
        <div className={'relative flex flex-col w-full h-full bg-[#d9d9d9] items-center'}>
            <h2 className={"bg-white self-start w-full py-4 px-7"}>{deck.title}</h2>
            <ModalChildren sampleCards={deck.deck} />
        </div>
    );
}