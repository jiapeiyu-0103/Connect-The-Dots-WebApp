import { useState } from 'react'
import moment from 'moment'
import * as Tags from '../../constants/Tags'

const Data = (props) => {

    let today = new Date()
    let curYr = today.getFullYear()
    let curMth = today.getMonth()
    let initDate = {}
    let options = []

    // note: the range of month is [0, 11] => (Jan ... Dec)

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 12; j++) {
            let year = curMth - j >= 0 ? curYr - i: curYr - i - 1;
            let month =  curMth - j >= 0 ? curMth - j:curMth - j + 12;
            let timeStamp = {
                year: year,
                month: month
            }
            if (i === 0 && j === 0) {
                initDate = timeStamp
            }

            options.push(
                <option key = {"data_date_" + month + "_" + year} value = {JSON.stringify(timeStamp)} > {moment().month(month).format("MMM")} {year} </option>
            )
        }
    }


    const [date, setDate] = useState(JSON.stringify(initDate))


    // stub
    // fetch data based on the timestamp and user
    // require implement of DB
    const fetchData = (curUser, date) => {
        let data = require('../../constants/DairyData.json')
        let ret = []
        for(const d of data) {
            if (d.date.year === JSON.parse(date).year && d.date.month === moment().month(JSON.parse(date).month).format("MMM")) {
                ret.push(d)
            }
        }
        return ret
    }

    let attrs = [{emotion: Tags.EMOTIONS}]
    let total
    let summary = {}


    const analyzeData = () => {
    
        let data = fetchData(props.curUser, date)
        total = data.length
        for (let i = 0; i < attrs.length; i++) {
            let keys = Object.values(Object.values(attrs[i])[0])
            let temp = {}
            for (const k of keys) {
                temp[k] = 0
            }
            for (const d of data) {
                for (var key of keys) {
                    if (d.tags.includes(key)){
                        temp[key] ++
                    } 
                }
            }
            summary[Object.keys(attrs[i])[0]] = temp
        }
    }

    analyzeData()

    console.log(summary)
    

    return (
        <div>
            <label>Please select a date: </label>
            <select value = {date} onChange = {(e) => setDate(e.target.value)}>
                {options}
            </select><br/><br/>

            <div>
                <h3>In {moment().month(JSON.parse(date).month).format("MMMM")} {JSON.parse(date).year}, you have written totally {total} {total === 1? "diary": "diaries"}: </h3><br/>
                <h3>Below is the detail summary:</h3>
            </div>

        </div>
    )
}

export default Data
