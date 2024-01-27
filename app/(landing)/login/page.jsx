import AuthForm from '@/components/AuthForm'

export default function Home() {
    return (
        <div className={"flex flex-col items-center h-screen w-full"}>
            <div className="col-6">
                <h1 className="header">Supabase Auth + Storage</h1>
                <p>
                    Experience our Auth and Storage through a simple profile management example. Create a user
                    profile and upload an avatar image. Fast, simple, secure.
                </p>
            </div>
            <div className="w-[30%] auth-widget my-auto">
                <AuthForm />
            </div>
        </div>
    )
}