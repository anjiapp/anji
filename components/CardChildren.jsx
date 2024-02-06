"use client";
import { fsr } from "@/app/api/fsr";
import React from "react";
import Link from "next/link";
import "@/css/CardModal.css";
import { createClient } from "@/utils/supabase/client";

const buttons = ["again", "hard", "good", "easy"];
const buttonStyle = {
	backgroundColor: "white",
	borderRadius: "1.25rem",
	border: "1px solid black",
	padding: ".5rem 1rem",
	marginBottom: "2.5rem",
};

const supabase = createClient();

const CardChildren = ({ deck }) => {
	const [index, setIndex] = React.useState(0);
	const [onFront, setOnFront] = React.useState(true);
	const handleCardClick = async (button) => {
		await fsr(
			deck[index].stability,
			deck[index].difficulty, 
			deck[index].last_reviewed == null
				? 1
				: (Date.now() - deck[index].last_reviewed) / 86400000,
			button
		).then(async (res) => {
			console.log(res, deck[index]);
			const { data, error} = await supabase
				.schema("user_data")
				.from("cards")
				.update({
					difficulty: res.newDifficulty,
					stability: res.newStability,
					scheduled_date: res.nextReviewDate,
					retrievability: res.newRetrievability,
					last_reviewed: Date.now(),
				})
				.eq("id", deck[index].id);
			if (error) {
				console.log(error);
			}
		}).catch((err) => {
			console.log(err);
		});

		setIndex(index + 1);
		setOnFront(true);
	};
	return (
		<>
			<div className={"card-modal"}>
				{index === deck.length ? (
					<>
						<h2 className={"text-center mt-5 text-wrap text-4xl"}>
							Session Finished!
						</h2>
						<Link
							className={
								"absolute bg-[#d9d9d9] px-9 py-4 self-center top-[70%] rounded-3xl"
							}
							href={"/dashboard"}
						>
							<h2>return home</h2>
						</Link>
					</>
				) : (
					<h2 className={"text-center my-auto text-wrap text-4xl"}>
						{onFront ? deck[index].question : deck[index].answer}
					</h2>
				)}
			</div>
			{index !== deck.length && (
				<div className={"absolute bottom-[5vh] self-center"}>
					{onFront ? (
						<button
							style={buttonStyle}
							onClick={() => setOnFront(false)}
						>
							Show Card
						</button>
					) : (
						<div className={"grid grid-cols-4 gap-3"}>
							{buttons.map((button, i) => {
								return (
									<button
										key={i}
										style={buttonStyle}
										onClick={() => handleCardClick(button)}
									>
										{button}
									</button>
								);
							})}
						</div>
					)}
				</div>
			)}
		</>
	);
};
export default CardChildren;
