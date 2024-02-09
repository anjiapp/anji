import CardChildren from "@/components/CardChildren";
import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";

export default async function StudyPage({params, searchParams}) {
    const supabase = createClient(cookies());
    const { data: deck, error: deck_error } = await supabase
		.schema("user_data")
		.from("decks")
		.select(
			"title, cards(id, scheduled_date, card_state, difficulty, stability, retrievability, answer, question)"
		)
		.eq("deck_id", params.id)
		.single();
    if (deck_error) {
        console.log(deck_error);
        return <div>error</div>
    }
    return (
		<div
			className={
				"relative flex w-full h-screen bg-[#d9d9d9] justify-center items-center"
			}
		>
			<h2 className={"bg-white self-start w-full py-4 px-7"}>
				{deck.title}
			</h2>
			<CardChildren deck={deck.cards} />
		</div>
	);
}