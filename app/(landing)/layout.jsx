import '@/css/globals.css'
import Link from "next/link";
import TopNav from "@/components/TopNav";

export const metadata = {
    title: 'anji',
    description: 'Flash Card Web App',
}

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={'h-screen relative bg-[#FBF8F4]'}>
        <TopNav />
        {
            children
        }
        </body>
        </html>
    )
}