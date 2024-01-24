export default function Page() {
    return (
        <div className={'relative flex flex-col w-full h-full bg-[#d9d9d9] items-center'}>
            hi
            <form method={"POST"} className={'flex flex-col space-y-2'} action={"/api/login"}>
                <input type={'text'} placeholder={'username'} />
                <input type={'password'} placeholder={'password'} />
                <button type={'submit'}>login</button>
            </form>
        </div>
    );
}