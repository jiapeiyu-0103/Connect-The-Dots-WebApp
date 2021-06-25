import { useState } from 'react'
import moment from 'moment'
// import * as Tags from '../constants/Tags'
import PieChart from "./PieChart";
import React from 'react';
import './data.css';

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


    const [date, setDate] = useState(JSON.stringify(initDate));


    // stub
    // fetch data based on the timestamp and user
    // require implement of DB
    // const fetchData = (curUser, date) => {
    //     //     let data = require('../constants/DairyData.json')
    //     //     let ret = []
    //     //     for(const d of data) {
    //     //         if (d.date.year === JSON.parse(date).year && d.date.month === moment().month(JSON.parse(date).month).format("MMM")) {
    //     //             ret.push(d)
    //     //         }
    //     //     }
    //     //     return ret
    //     // }

    // let attrs = [{emotion: Tags.EMOTIONS}]
    // let total
    // let summary = {}


    // const analyzeData = () => {
    //
    //     let data = fetchData(props.curUser, date)
    //     total = data.length
    //     for (let i = 0; i < attrs.length; i++) {
    //         let keys = Object.values(Object.values(attrs[i])[0])
    //         let temp = {}
    //         for (const k of keys) {
    //             temp[k] = 0
    //         }
    //         for (const d of data) {
    //             for (var key of keys) {
    //                 if (d.tags.includes(key)){
    //                     temp[key] ++
    //                 }
    //             }
    //         }
    //         summary[Object.keys(attrs[i])[0]] = temp
    //     }
    // }
    //
    // analyzeData();

    const weather = [
        {id: "sunny", value:2},
        {id: "cloudy", value:8},
        {id: "rain", value:12},
        {id: "snow", value:1},
        {id: "thundershower", value:1},
        {id: "overcast", value:2}
    ];

    const activity = [
        {id: "writing", value:3},
        {id: "dancing", value:12},
        {id: "party", value:20},
        {id: "show", value:1},
        {id: "travel", value:1},
        {id: "park", value:9},
        {id: "delicacy", value:29},
        {id: "sport", value:16},
        {id: "game", value:9}
    ];

    const feeling = [
        {id: "grinning", value:19},
        {id: "grin-squint", value:10},
        {id: "touched", value:25},
        {id: "angry", value:8},
        {id: "weary", value:3},
        {id: "crying", value:2},
        {id: "exploding", value:20},
        {id: "fearful", value:4},
        {id: "woozy", value:1}
    ];


    const weatherRange = ["#03045E", "#023E8A", "#0077B6", "#0096C7", "#48CAE4", "#90E0EF"];
    const weatherDomain = ["sunny", "cloudy", "rain", "snow", "thundershower", "overcast"];
    const weatherX = [20, 120, 250, 20, 120, 250];
    const weatherY = [18, 18, 18, 48, 48, 48];

    const activityRange = ["#000000", "#1B4332", "#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2", "#B7E4C7", "#D8F3DC"];
    const activityDomain = ["writing", "dancing", "party", "show", "travel", "park", "delicacy", "sport", "game"];
    const activityX = [20, 120, 250, 20, 120, 250, 20, 120, 250];
    const activityY= [18, 18, 18, 48, 48, 48, 78, 78, 78];

    const feelingRange = ["#774936", "#8A5A44", "#9D6B53", "#B07D62", "#C38E70", "#CD9777", "#D69F7E", "#DEAB90", "#EDC4B3"];
    const feelingDomain = ["grinning", "grin-squint", "touched", "angry", "weary", "crying", "exploding", "fearful", "woozy"];


    return (
        <div className="app">
            <PieChart title="Weather Data" data={weather} range={weatherRange} domain={weatherDomain} legendX={weatherX} legendY={weatherY}/>
            <PieChart title="Activity Data" data={activity} range={activityRange} domain={activityDomain} legendX={activityX} legendY={activityY}/>
            <PieChart title="Feeling Data" data={feeling} range={feelingRange} domain={feelingDomain} legendX={activityX} legendY={activityY}/>
        </div>
    )
};

export default Data
