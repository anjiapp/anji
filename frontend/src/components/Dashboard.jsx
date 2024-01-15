import {FaPlus} from "react-icons/fa6";
import PinnedCards from "./PinnedCards";
import Calendar from "./Calendar";

import '../css/Dashboard.css'

const cardTitles = ["Philosophy", "Biology", "Biology"];
export default function Dashboard() {


    return (
        <div className={'w-[70%] space-y-3'}>
            <div className={'flex justify-between'}>
                <h2>STREAK: 7 DAYS</h2>
                <h2>DAILY AVERAGE: 150 CARDS</h2>
                <h2>LONGEST STREAK: 0</h2>
            </div>
            <Calendar />
            <div
                className={'bg-[#d9d9d9] py-3 px-5 inline-flex flex-row items-center space-x-2 font-bold hover:cursor-pointer'}
                onClick={() => {

                }}>
                <FaPlus/>
                <p>New</p>
            </div>
            <h2 className={'text-2xl font-bold'}>STAR DECK</h2>
            <div className={'flex row items-center justify-between space-x-8'}>
                {
                    cardTitles.map((title, index) => {
                        return (
                            <PinnedCards title={title} key={index}/>
                        );
                    })
                }
            </div>
        </div>
    );
}