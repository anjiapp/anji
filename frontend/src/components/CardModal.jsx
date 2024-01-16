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
                className={"absolute !mt-0 top-0 left-0 w-screen h-screen bg-black opacity-50 flex items-center justify-center"}
                onClick={() => {
                    props.setIsDeckOpen(false);
                }}/>
            <div
                className={'bg-white rounded-xl opacity-100 h-[60vh] w-[50vw] p-10 absolute border-black border flex flex-col'}>
                <h1>{props.title}</h1>
                <div className={"flex flex-row font-bold text-lg space-x-10 text-right"}>
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
                <div className={"mt-auto mb-0 flex items-baseline justify-between"}>
                    <div className={"grid grid-cols-7 bg-[#d9d9d9] w-[50%]"}>
                        {
                            boxes.map((box, index) => {
                                return (
                                    <div key={index} className={"border border-black aspect-square"}/>
                                );
                            })
                        }
                    </div>
                    <div className={'self-end flex items-end flex-col space-y-10 w-[35%]'}>
                        <div className={'space-x-4 flex flex-row font-bold text-xl'}>
                            <button>ADD</button>
                            <button>EDIT</button>
                        </div>
                        <button className={'bg-black text-white rounded-xl w-full aspect-[6/1] px-5 py-3 text-3xl font-extrabold'}>Study Now</button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}