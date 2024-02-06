import PinnedCard from "@/components/PinnedCard";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function PinnedCards({ pinned_decks }) {
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
		</>
	);
}
