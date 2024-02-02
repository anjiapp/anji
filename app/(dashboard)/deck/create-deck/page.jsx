export default function Page({ params, searchParams }) {
	return (
		<div
			className={
				"relative flex flex-col w-full bg-[#d9d9d9] items-center"
			}
		>
			<h2 className={"bg-white self-start w-full py-4 px-7"}>
				folder1/x
			</h2>
			<div className="h-[20vh] flex items-center justify-center">
				Some background
			</div>
			<div className="w-full px-[10%] flex flex-col justify-center">
				<div>
					<div>Some Title</div>
					<form className="flex flex-col">
						<textarea
							placeholder="Description"
							className="min-h-[20vh] w-full rounded-lg px-2 py-1"
						/>
						<div className="flex flex-row space-x-2 self-end">
							<button>Generate</button>
							<button>Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
