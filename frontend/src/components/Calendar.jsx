
const calendarData = [];

export default function Calendar() {
    for (let i = 0; i < 364; i++) {
        calendarData.push(Math.floor(Math.random() * 100));
    }

    return (
        <div className={'bg-[#d9d9d9] py-2 px-1 gap-x-0.5 gap-y-1 grid grid-flow-col'} style={{gridTemplateRows: 'repeat(7, 1fr)'}} role={'grid'}>
            {
                calendarData.map((value, index) => {
                    return (
                        <div key={index} className={`${value > 10 ? 'bg-green-500' : 'bg-white'} w-full aspect-square`} />
                    )
                })
            }
        </div>
    );
}