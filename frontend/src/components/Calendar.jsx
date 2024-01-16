import '../css/Calendar.css';
const calendarData = [];
const year = 2024;

export default function Calendar() {
    if (calendarData.length === 0) {
        for (let i = 0; i < 364; i++) {
            calendarData.push(Math.floor(Math.random() * 100));
        }
    }

    return (
        <div className={'bg-[#d9d9d9] pt-2'}>
            <div className={'calendar'}>
                {
                    calendarData.map((value, index) => {
                        return (
                            <div key={index}
                                 onMouseEnter={() => console.log(value)}
                                 className={`calendar-day`} style={{
                                     backgroundColor: `rgb(0, ${255-(value/100.0)*200}, 0)`
                            }}>
                                <div className={'calendar-day-text'}> {/*Change to a tooltip later*/}
                                    <p className={'text-center'}>{value}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={'text-center'}>{year}</p>
        </div>
    );
}