import '../css/CardModal.css';

const boxes = [];
export default function CardModal(props) {
    if (boxes.length === 0) {
        for (let i = 0; i < 28; i++) {
            boxes.push(Math.floor(Math.random() * 100));
        }
    }
    return (
        <>
            <div
                className={"blanket"}
                onClick={() => {
                    props.setIsDeckOpen(false);
                }}/>
            <div
                className={'card-modal'}>
                <div className={'card-info space-y-2'}>
                    <h1>{props.title}</h1>
                    <div className={"deck-stats space-x-10"}>
                        <div>
                            <p>new</p>
                            <p>10</p>
                        </div>
                        <div>
                            <p>in progress</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p>review</p>
                            <p>100</p>
                        </div>
                    </div>
                </div>
                <div className={"deck-bottom-container"}>
                    <div className={"deck-grid"}>
                        {
                            boxes.map((box, index) => {
                                return (
                                    <div key={index} className={"deck-grid-box"}/>
                                );
                            })
                        }
                    </div>
                    <div className={'buttons-container space-y-10'}>
                        <div className={'deck-buttons-container space-x-4'}>
                            <button>ADD</button>
                            <button>EDIT</button>
                        </div>
                        <button onClick={() => props.setPage(props.title)}
                            className={'study-button'}>Study Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}