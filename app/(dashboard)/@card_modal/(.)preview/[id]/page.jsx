"use client";

import Modal from "@/components/Modal";
import { createClient } from "@/utils/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PreviewCard from "@/components/PreviewCard";

const supabase = createClient();
export default function Page({}) {
	const params = useParams();
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
			<PreviewCard deck={deck} isClient={true} router={useRouter()} id={params.id} />
		</Modal>
	);
}
