import {MdOutlineClose} from "react-icons/md";
import Link from "next/link";
import '@/css/CardModal.css'

let boxes = [];
export default function PreviewCard(props) {
    if (boxes.length === 0) {
        for (let i = 0; i < 28; i++) {
            boxes.push(Math.floor(Math.random() * 100));
        }
    }
    return (
        <>
            <div className={"card-info space-y-2"}>
                <div className={"flex flex-row justify-between items-center"}>
                    <h1>{props.deck.title}</h1>
                    {
                        props.isClient && <button
                            onClick={props.router.back}
                            className={"hover:cursor-pointer"}
                        >
                            <MdOutlineClose
                                size={40}
                                className={
                                    "close-button hover:cursor-pointer h-full"
                                }
                            />
                        </button>
                    }
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
                        return <div key={index} className={"deck-grid-box"}/>;
                    })}
                </div>
                <div className={"buttons-container space-y-10"}>
                    <div className={"deck-buttons-container space-x-4"}>
                        <button>ADD</button>
                        <Link href={`/${props.id}/edit`}>EDIT</Link>
                    </div>
                    <Link
                        href={`/${props.id}`}
                        className={"study-button"}
                    >
                        Study Now
                    </Link>
                </div>
            </div>
        </>
    )
}