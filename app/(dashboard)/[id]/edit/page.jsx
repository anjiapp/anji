import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";

export default async function Page({params, searchParams}) {
    const supabase = createClient(cookies());
    const {
        data: deck,
        error: deckError
    } = await supabase.schema('user_data').from('decks').select('title, description, cards(question, answer)').eq('deck_id', params.id).single();
    if (deckError) {
        console.error(deckError);
        return <div>Failed to load deck</div>;
    }
    return (
        <div
            className={
                "w-full bg-[#d9d9d9] items-center"
            }
        >
            <h2 className={"bg-white self-start w-full py-4 px-7"}>
                folder1/{deck.title}
            </h2>
            <div className="h-[20vh] flex items-center justify-center">
                Some background
            </div>
            <div className="w-full px-[10%] flex flex-col justify-center">
                <div>
                    <div>{deck.title}</div>
                    <form className="flex flex-col">
						<textarea
                            placeholder={deck.description}
                            className="min-h-[20vh] w-full rounded-lg px-2 py-1"
                        />
                        <div className="flex flex-row space-x-2 self-end">
                            <button>Generate</button>
                            <button>Create</button>
                        </div>
                    </form>
                    <div className={'space-y-3 my-5'}>
                        {
                            deck.cards.map((card, index) => {
                                return (
                                    <div key={index} className="w-full bg-black rounded-lg grid grid-cols-2 gap-[2px] aspect-[5/1]">
                                        <div className={'bg-white p-2'}>
                                            {card.question}
                                            <div className={'h-20'}>
                                                Blank
                                            </div>
                                        </div>
                                        <div className={'bg-white p-2'}>{card.answer}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
