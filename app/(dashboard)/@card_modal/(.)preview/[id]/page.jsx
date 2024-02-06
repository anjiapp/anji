"use client";

import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import Modal from "@/components/Modal";
import { createClient } from "@/utils/supabase/client";
import { useRouter, useParams } from "next/navigation";
import "@/css/CardModal.css";
import { useEffect, useState } from "react";

let boxes = [];
const supabase = createClient();
export default function Page({}) {
	const params = useParams();
	if (boxes.length === 0) {
		for (let i = 0; i < 28; i++) {
			boxes.push(Math.floor(Math.random() * 100));
		}
	}
	const router = useRouter();
	const [deck, setDeck] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		const getDeck = async () => {
			const { data: deck, error: deck_error } = await supabase
				.schema("user_data")
				.from("decks")
				.select("title")
				.eq("deck_id", params.id)
				.single();
			if (deck_error) {
				console.log(deck_error);
			}
			return new Promise((resolve, reject) => {
				resolve(deck);
			});
		};
		getDeck().then((deck) => setDeck(deck));	
		console.log(params.id, deck);

		setLoading(!deck);
	}, []);

	if (loading) {
		return <div>loading</div>;
	}

	return (
		<Modal>
			<div className={"card-info space-y-2"}>
				<div className={"flex flex-row justify-between items-center"}>
					<h1>{deck.title}</h1>
					<button
						onClick={router.back}
						className={"hover:cursor-pointer"}
					>
						<MdOutlineClose
							size={40}
							className={
								"close-button hover:cursor-pointer h-full"
							}
						/>
					</button>
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
					<div className={"deck-stats-text-container !border-none"}>
						<p>review</p>
						<p>100</p>
					</div>
				</div>
			</div>
			<div className={"deck-bottom-container"}>
				<div className={"deck-grid"}>
					{boxes.map((box, index) => {
						return <div key={index} className={"deck-grid-box"} />;
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
		</Modal>
	);
}
