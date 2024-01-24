import PinnedCards from "./PinnedCards";
import Calendar from "@/components/Calendar";

import '@/css/Dashboard.css'
const year = 2024;
export default function Dashboard() {
    return (
        <div className={'flex items-center w-full h-full justify-center'}>
            <div className={'w-[80%] space-y-3'}>
                <div className={'flex justify-between'}>
                    <div>
                        <h2>150 CARDS</h2>
                        <p>Daily Average</p>
                    </div>
                    <div>
                        <h2>7 Day</h2>
                        <p>Streak</p>
                    </div>
                    <div>
                        <h2>0 Day</h2>
                        <p>Longest Streak</p>
                    </div>
                </div>
                <div className={'bg-[#d9d9d9] pt-2'}>
                    <Calendar/>
                    <p className={'text-center font-medium text-lg'}>{year}</p>
                </div>
                <h2 className={'text-2xl font-bold'}>DECKS</h2>
                <PinnedCards />
            </div>
        </div>
    );
}