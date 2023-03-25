function States({ change, count, setCount, dayBagasMentoring, setDayBagasMentoring }) {
    return <>
        <h1>Vite + React | total update state: {change}</h1>
        <div className="card">
            <p>{count}</p>
            <button onClick={() => setCount((count) => count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prev) => prev - 1)}>
                Decrement
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <div className="card">
            <ul>
                {dayBagasMentoring.map((value, index) => {
                    return (
                        // kalo pake fungsi .map, jangan lupa pasang attribute "key" di element terluar
                        <li key={index}>{value}</li>
                    )
                })}
            </ul>
            {/*
        ...prev maksudnya = spread operator untuk variable 'prev'
        spread operator = dari object/array,
                          return semua datanya di tempat spread operator digunakan
                          
                          prev = ['day-23', 'day-24', 'day-25']
                          [...prev, "day-xx"] => ['day-23', 'day-24', 'day-25', 'day-xx']
         */}
            <button onClick={() => setDayBagasMentoring((prev) => [...prev, "day-xx"])}>
                Add New Day
            </button>
            {/*
        Gimana caranya ngehapus elemen dari array di dalam state react hooks???? 
         */}
            <button onClick={() => setDayBagasMentoring((prev) => {
                // error Reference
                // Gabisa update variable dengan reference yang sama
                // harus buat variable baru dengan nilai yang sama persis, tetapi tidak mereferensi ke variable yang lama
                // contoh: 
                //  - const oldArray = prev       -------   oldArray ambil dari referensi 'prev', jadi masih mereferensi ke variable yang lama
                //  - const oldArray = [...prev]  -------   oldArray bikin nilai baru, tidak mengambil referensi sama persis dari variable yang lama
                // walaupun nilainya sama persis dengan 'prev', tetapi karena bikin array baru, maka dianggap dia tidak mengambil referensi yang sama

                // before: buggy
                // const oldArray = prev

                // after: aman
                const oldArray = [...prev]
                oldArray.pop()
                // oldArray.splice(prev.length - 1, 1);
                return oldArray
            })}>
                Remove Last Day
            </button>
        </div>
    </>
}

export default States
