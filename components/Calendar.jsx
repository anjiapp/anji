import '@/css/Calendar.css';
const calendarData = [];

export default function Calendar() {
    if (calendarData.length === 0) {
        for (let i = 0; i < 364; i++) {
            calendarData.push(Math.floor(Math.random() * 101));
        }
    }

    return (
            <div className={'calendar'}>
                {
                    calendarData.map((value, index) => {
                        return (
                            <div key={index}
                                 className={`calendar-day`} style={{
                                     backgroundColor: value/100.0 < .1 ? '#edebeb' : `rgb(0, ${255-(value/100.0)*190}, 0)`
                            }}>
                                <div className={'calendar-day-text'}> {/*Change to a tooltip later*/}
                                    <p className={'text-center'}>{value}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    );
}