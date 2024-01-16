export default function PinnedCards(props) {
    return (
        <div className={'bg-[#d9d9d9] w-[30%] aspect-[7/3] hover:cursor-pointer rounded-xl flex border-black border-1 border'} onClick={() => {
            props.setOpenDeck(props.title);
            props.setIsDeckOpen(true);
        }}>
            <div className={'inline-block self-end w-full py-2 px-4 bg-white'}
            style={{
                borderRadius: '0 0 0.75rem 0.75rem',
                borderTop: '1px solid black'
            }}>
                <h2 className={'font-bold'}>{props.title}</h2>
            </div>
        </div>
    );
}