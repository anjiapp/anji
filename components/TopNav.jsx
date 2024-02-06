import Link from "next/link";

export default function TopNav() {
    return (
        <nav className={'w-full flex flex-row justify-between border-b border-black py-3 px-8 items-center'}>
            <Link href={'/'} className={'text-center'}>
                <h1>anji</h1>
            </Link>

            <div className={'space-x-2'}>
                <Link href={'/auth'} className={'border-r border-black px-3'}>Log In</Link>
                <Link href={'/auth?signup'} className={'bg-black rounded-xl text-white font-bold py-2 px-3'}>Sign Up</Link>
            </div>
        </nav>
    )
}