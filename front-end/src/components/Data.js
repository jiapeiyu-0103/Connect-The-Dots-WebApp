import { useState } from 'react'
import moment from 'moment'

const Data = () => {

    let today = new Date()
    let curYr = today.getFullYear()
    let curMth = today.getMonth()
    let availTimes = []
    let options = []

    // note: the range of month is [0, 11]

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 12; j++) {
            let year = curMth - j >= 0 ? curYr - i: curYr - i - 1;
            let month =  curMth - j >= 0 ? curMth - j:curMth - j + 12;
            let timeStamp = {
                year: year,
                month: month
            }
            availTimes.push(timeStamp)
            options.push(
                <option key = {"data_date_" + month + "_" + year} value = {JSON.stringify(timeStamp)} > {moment().month(month).format("MMM")} {year} </option>
            )
        }
    }


    const [date, setDate] = useState(JSON.stringify(availTimes[0]))

    return (
        <div>
            <label>Please select a date: </label>
            <select value = {date} onChange = {(e) => setDate(e.target.value)}>
                {options}
            </select>
        </div>
    )
}

export default Data
