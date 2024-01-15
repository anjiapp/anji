export default function PinnedCards(props) {
    return (
        <div className={'bg-[#d9d9d9] p-4 h-[15vh] w-[20vw] hover:cursor-pointer'} onClick={() => {

        }}>
            <h2 className={'font-bold'}>{props.title}</h2>
        </div>
    );
}