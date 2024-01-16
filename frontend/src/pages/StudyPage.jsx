import {useLocation} from 'react-router-dom';
import SampleCards from './sample_cards.json';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import './css/CardModal.css';

const sampleCards = SampleCards;
const buttons = ['again', 'hard', 'good', 'easy'];
const buttonStyle = {
    backgroundColor: 'white',
    borderRadius: '1.25rem',
    border: '1px solid black',
    padding: '.5rem 1rem',
    marginBottom: '2.5rem',
}
export default function () {
    const location = useLocation();
    const {title} = location.state;
    const [index, setIndex] = useState(0);
    const [onFront, setOnFront] = useState(true);

    return (
        <div className={'relative flex flex-col w-full h-full bg-[#d9d9d9] items-center'}>
            <h2 className={"bg-white self-start w-full py-4 px-7"}>{title}</h2>
            <div className={'card-modal'}>
                {index === sampleCards.length ?
                    <>
                        <h2 className={'text-center mt-5 text-wrap text-4xl'}>Session Finished!</h2>
                        <Link className={"absolute bg-[#d9d9d9] px-9 py-4 self-center top-[70%] rounded-3xl"} to={'/'}>
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
                            <button style={buttonStyle} onClick={() => setOnFront(false)}>Show Card</button>
                            :
                            <div className={'grid grid-cols-4 gap-3'}>
                                {
                                    buttons.map((button, i) => {
                                        return (
                                            <button key={i} style={buttonStyle} onClick={() => {
                                                setIndex(index + 1);
                                                setOnFront(true);
                                            }}>{button}</button>
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