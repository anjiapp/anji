import AuthForm from '@/components/AuthForm'

export default function Home() {
    return (
        <div className={"flex flex-col items-center w-full"}>
            <div className="w-[30%] absolute top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]">
                <AuthForm />
            </div>
        </div>
    )
}