import PinnedCards from "@/components/PinnedCards";
import Calendar from "@/components/Calendar";
import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";

import '@/css/Dashboard.css'
const year = 2024;
export default async function Dashboard() {
    const supabase = await createClient(cookies());
    let { data: pinned_decks, error: query_error } = await supabase
        .schema('user_data')
        .from('decks')
        .select('*')
        .eq('is_pinned', true);
    if (query_error) {
        console.log("Query Error: ", query_error);
    }
    if (pinned_decks === undefined) {
        pinned_decks = [];
    }

    return (
        <div className={'flex w-full justify-center mt-10'}>
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
                <PinnedCards pinned_decks={pinned_decks} />
            </div>
        </div>
    );
}