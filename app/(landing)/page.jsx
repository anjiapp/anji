import Link from "next/link";
import {FaArrowRightLong} from "react-icons/fa6";

export default function Home() {
    return (
        <div className={'w-full flex flex-col items-center'}>
            <div className={'w-[60%] mt-14 space-y-10'}>
                <div className={'grid grid-cols-2'}>
                    <div className={'space-y-2'}>
                        <h1 className={'text-7xl'}>STUDY</h1>
                        <div className={'flex flex-row items-center space-x-2'}>
                            <h2 className={'text-3xl line-through'}>tool</h2>
                            <FaArrowRightLong size={20} className={'text-3xl'}/>
                            <h2 className={'text-3xl'}>system.</h2>
                        </div>
                        <h3 className={'font-bold text-lg'}>Unlock smarter learning with Anji</h3>
                        <p className={'flex-wrap'}>Intelligent flashcards that adapt, connect, and evolve with you for a
                            truly personalized learning
                            experience.</p>
                        <div className={'!mt-9'}>
                            <Link href={'/login?signup'}
                                  className={'bg-black text-white font-bold rounded-xl px-3 py-2'}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className={'bg-gray-500'}>

                    </div>
                </div>
                <div className={'grid grid-cols-3 gap-x-3 w-full'}>
                    <div style={styles.info_box}>
                        <h2>Decks</h2>
                    </div>
                    <div style={styles.info_box}>
                        <h2>Cards</h2>
                    </div>
                    <div style={styles.info_box}>
                        <h2>Study</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    info_box: {
        borderRadius: '.75rem',
        border: '1px solid black',
        padding: '1rem 2rem',
    }
}