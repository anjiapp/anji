import '@/css/globals.css'
import SideNav from "@/components/SideNav";
import React from "react";
import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";

export const metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default async function RootLayout({children}) {
    const supabase = await createClient(cookies());
    const {data: {user}, error: data_error} = await supabase.auth.getUser()
    const {data: decks, error: decks_error} = await supabase.schema('user_data').from('decks').select('*');
    let {data: pfp, error: pfp_error} = await supabase.storage.from('profile_pictures').download(`${user.id}/pfp.png`);
    if (data_error) {
        console.log("No user found:", data_error);
    }
    if (decks_error) {
        console.log("No decks found:", decks_error);
    }
    if (pfp_error) {
        console.log("No pfp found:", pfp_error);
        pfp = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
    }
    /* Need to figure out folders data structure */

    // const [folders, setFolders] = useState([]);

    function handleFolders(someSortOfId) {
        /* Find id in folders and update boolean value to show/hide tasks */
    }

    return (
        <html lang="en">
        <body className={'h-screen relative flex flex-row'}>
        <SideNav decks={decks} pfp={pfp} user={user} />
        {
            children
        }
        </body>
        </html>
    )
}