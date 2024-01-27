import '@/css/globals.css'
import Link from "next/link";
import SideNav from "@/components/SideNav";

export const metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={'h-screen relative flex flex-row'}>
        <SideNav>
            <Link href={'/login'} className={'my-3'}>Login</Link>
        </SideNav>
        {
            children
        }
        </body>
        </html>
    )
}