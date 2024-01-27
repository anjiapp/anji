import '@/css/globals.css'
import SideNav from "@/components/SideNav";
import React from "react";
import Link from "next/link";
import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";

export const metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default async function RootLayout({children}) {
    const supabase = await createClient(cookies());
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user);
    let {pfp, error} = await supabase.storage.from('profile_pictures').download(`${user.id}.png`);
    if (error) {
        console.log(error);
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
        <SideNav>
            <Link href={'/auth/signout'} className={"flex flex-row items-center my-3 space-x-2"}>
                <img src={pfp} alt={"user_pfp"} width={40}/>
                <p>{user.user_metadata.full_name}</p>
            </Link>
        </SideNav>
        {
            children
        }
        </body>
        </html>
    )
}