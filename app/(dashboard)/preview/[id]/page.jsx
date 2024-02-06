import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import "@/css/CardModal.css";

const boxes = [];
export default async function StudyPage({ params, searchParams }) {
	if (boxes.length === 0) {
		for (let i = 0; i < 28; i++) {
			boxes.push(Math.floor(Math.random() * 100));
		}
	}
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
		return <div>error</div>;
	}
	return (
		<div
			className={
				"relative flex flex-col w-full h-full bg-[#d9d9d9] items-center"
			}
		>
			<h2 className={"bg-white self-start w-full py-4 px-7"}>
				{deck.title}
			</h2>
			<div className="card-modal">
				<div className={"card-info space-y-2"}>
					<div
						className={"flex flex-row justify-between items-center"}
					>
						<h1>{deck.title}</h1>
						{/* <button
						onClick={router.back}
						className={"hover:cursor-pointer"}
					>
						<MdOutlineClose
							size={40}
							className={
								"close-button hover:cursor-pointer h-full"
							}
						/>
					</button> */}
					</div>
					<div className={"deck-stats-container space-x-5"}>
						<div className={"deck-stats-text-container"}>
							<p>new</p>
							<p>10</p>
						</div>
						<div className={"deck-stats-text-container"}>
							<p>in progress</p>
							<p>0</p>
						</div>
						<div
							className={"deck-stats-text-container !border-none"}
						>
							<p>review</p>
							<p>100</p>
						</div>
					</div>
				</div>
				<div className={"deck-bottom-container"}>
					<div className={"deck-grid"}>
						{boxes.map((box, index) => {
							return (
								<div key={index} className={"deck-grid-box"} />
							);
						})}
					</div>
					<div className={"buttons-container space-y-10"}>
						<div className={"deck-buttons-container space-x-4"}>
							<button>ADD</button>
							<button>EDIT</button>
						</div>
						<Link
							href={{
								pathname: `/${params.id}`,
							}}
							className={"study-button"}
						>
							Study Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
