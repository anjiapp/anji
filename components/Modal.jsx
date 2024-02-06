"use client";
import "@/css/CardModal.css";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
	const router = useRouter();
	return (
		<>
			<button
				className={"blanket cursor-default"}
				onClick={router.back}
			/>
			<div className={"card-modal"}>{children}</div>
		</>
	);
}
