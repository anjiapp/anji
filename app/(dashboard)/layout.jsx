import "@/css/globals.css";
import SideNav from "@/components/SideNav";
import React from "react";
import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";

export const metadata = {
    title: "anji",
    description: "Flash Card Web App",
};

export default async function RootLayout({children, card_modal}) {
    const supabase = await createClient(cookies());
    const {
        data: {user},
        error: data_error,
    } = await supabase.auth.getUser();
    const {data: decks, error: decks_error} = await supabase
        .schema("user_data")
        .from("decks")
        .select("*");
    const {data: storage_pfp, error: pfp_error} = await supabase.storage
        .from("profile_pictures")
        .download(`${user.id}/pfp.png`);
    const pfp =
        user.user_metadata.avatar_url !== undefined
            ? user.user_metadata.avatar_url
            : !pfp_error
                ? storage_pfp
                : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

    if (data_error) {
        console.log("No user found:", data_error);
    }
    if (decks_error) {
        console.log("No decks found:", decks_error);
    }
    /* Need to figure out folders data structure */

    // const [folders, setFolders] = useState([]);

    function handleFolders(someSortOfId) {
        /* Find id in folders and update boolean value to show/hide tasks */
    }

    return (
        <html lang="en">
        <body className={""}>
        <SideNav decks={decks} pfp={pfp} user={user}/>
        <div className={'w-[85vw] ml-auto mr-0'}>
            {children}
        </div>
        {card_modal}
        </body>
        </html>
    );
}
