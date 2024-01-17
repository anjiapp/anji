import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('./ModalChildren'), {ssr: false});

export default function Study_page({params, searchParams}) {
    return (
        <div className={'relative flex flex-col w-full h-full bg-[#d9d9d9] items-center'}>
            <h2 className={"bg-white self-start w-full py-4 px-7"}>{searchParams?.title}</h2>
            <Modal />
        </div>
    );
}