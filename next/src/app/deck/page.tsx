import SampleCards from './sample_cards.json';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import Button from '../Button';

import '../css/CardModal.css';

const sampleCards = SampleCards;
const buttons = ['again', 'hard', 'good', 'easy'];
const buttonStyle = {
    backgroundColor: 'white',
    borderRadius: '1.25rem',
    border: '1px solid black',
    padding: '.5rem 1rem',
    marginBottom: '2.5rem',
}

export default function Study_page({ params, searchParams }) {
    let index = 0;
    let onFront = true;

    const flipCard = async () => {
        'use server';
        onFront = false;
    }

    const nextCard = async () => {
        'use server';
        ++index;
        onFront = false;
    }

    return (
        <div className={'relative flex flex-col w-full h-full bg-[#d9d9d9] items-center'}>
            <h2 className={"bg-white self-start w-full py-4 px-7"}>{searchParams?.title}</h2>
            <div className={'card-modal'}>
                {index === sampleCards.length ?
                    <>
                        <h2 className={'text-center mt-5 text-wrap text-4xl'}>Session Finished!</h2>
                        <Link className={"absolute bg-[#d9d9d9] px-9 py-4 self-center top-[70%] rounded-3xl"}
                              href={'/dashboard'}>
                            <h2>return home</h2>
                        </Link>
                    </>
                    :
                    <h2 className={'text-center my-auto text-wrap text-4xl'}>
                        {onFront ? sampleCards[index].question : sampleCards[index].answer}
                    </h2>
                }
            </div>
            {index !== sampleCards.length &&
                <div className={'absolute bottom-[5vh] self-center'}>
                    {
                        onFront ?
                            <Button style={buttonStyle} action={flipCard}>Show Card</Button>
                            :
                            <div className={'grid grid-cols-4 gap-3'}>
                                {
                                    buttons.map((button, i) => {
                                        return (
                                            <Button key={i} style={buttonStyle} action={nextCard}>{button}</Button>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
            }
        </div>
    );
}