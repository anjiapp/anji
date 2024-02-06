import Link from 'next/link';

export default function PinnedCard({ deck }) {
    return (
        <Link className={'bg-[rgb(217,217,217)] w-[30%] aspect-[7/3] hover:cursor-pointer rounded-xl flex border-black border-1 border'}
            href={`/preview/${deck.deck_id}`}>
            <div className={'inline-block self-end w-full md:py-2 px-4 bg-white'}
            style={{
                borderRadius: '0 0 0.75rem 0.75rem',
                borderTop: '1px solid black'
            }}>
                <h2>{deck.title}</h2>
            </div>
        </Link>
    );
}