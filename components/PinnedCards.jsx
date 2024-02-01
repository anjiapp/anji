import PinnedCard from "@/components/PinnedCard";
import CardModal from "@/components/CardModal";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function PinnedCards({
	pinned_decks,
	searchParams,
}) {
	const supabase = createClient(cookies());
	const {data: deck, error} = await supabase
		.schema("user_data")
		.from("decks")
		.select("*")
		.eq("deck_id", searchParams.deck_id)
        .single();
    const deck_id = searchParams.deck_id === undefined ? null : searchParams.deck_id;

	return (
		<>
			<div className={"flex flex-wrap gap-y-5 justify-between"}>
				{pinned_decks.length === 0 ? (
					<PinnedCard
						deck={{
							title: "No pinned decks",
							description: "Pin a deck to see it here!",
						}}
					/>
				) : (
					<>
						{pinned_decks.map((deck, index) => {
							return <PinnedCard deck={deck} key={index} />;
						})}
					</>
				)}
			</div>
			{deck_id !== null && <CardModal deck={deck} />}
		</>
	);
}
