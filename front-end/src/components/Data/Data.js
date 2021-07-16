import { useState } from 'react'
import moment from 'moment'
// import * as Tags from '../constants/Tags'
import PieChart from "./PieChart";
import React from 'react';
import './data.css';
import * as api from '../../services/api';
import 'antd/dist/antd.css';
import { Select } from 'antd';

function Data() {

    const { Option } = Select;
    const [month, setMonth] = useState(1);
    // how to reduce duplication
    // const [sunny, setSunny] = useState(0);
    // const [cloudy, setCloudy] = useState(0);
    // const [rain, setRain] = useState(0);
    // const [snow, setSnow] = useState(0);
    // const [thundershower, setThundershower] = useState(0);
    // const [overcast, setOvercast] = useState(0);
    //
    // const [writing, setWriting] = useState(0);
    // const [dancing, setDancing] = useState(0);
    // const [party, setParty] = useState(0);
    // const [show, setShow] = useState(0);
    // const [travel, setTravel] = useState(0);
    // const [park, setPark] = useState(0);
    // const [delicacy, setDelicacy] = useState(0);
    // const [sport, setSport] = useState(0);
    // const [game, setGame] = useState(0);
    //
    // const [grinning, setGrinning] = useState(0);
    // const [grin_squint, setGrin_squint] = useState(0);
    // const [touched, setTouched] = useState(0);
    // const [angry, setAngry] = useState(0);
    // const [weary, setWeary] = useState(0);
    // const [crying, setCrying] = useState(0);
    // const [exploding, setExploding] = useState(0);
    // const [fearful, setFearful] = useState(0);
    // const [woozy, setWoozy] = useState(0);
    const [tags, setTags] = useState({
        sunny: 0,
        cloudy: 0,
        rain: 0,
        snow: 0,
        thundershower: 0,
        overcast: 0,
        writing: 0,
        dancing: 0,
        party: 0,
        show: 0,
        travel: 0,
        park: 0,
        delicacy: 0,
        sport: 0,
        game: 0,
        grinning: 0,
        grin_squint: 0,
        touched: 0,
        angry: 0,
        weary: 0,
        crying: 0,
        exploding: 0,
        fearful: 0,
        woozy: 0
    });

    const weather = [tags.sunny, tags.cloudy, tags.rain, tags.snow, tags.thundershower, tags.overcast];

    const activity = [tags.writing, tags.dancing, tags.party, tags.show, tags.travel, tags.park, tags.delicacy, tags.sport, tags.game];

    const feeling = [tags.grinning, tags.grin_squint, tags.touched, tags.angry, tags.weary, tags.crying, tags.exploding, tags.fearful, tags.woozy];


    const handleChange = (value) => {
        let month = value.value;
        // setSunny(0);
        // setCloudy(0);
        // setRain(0);
        // setSnow(0);
        // setThundershower(0);
        // setOvercast(0);
        // setWriting(0);
        // setDancing(0);
        // setParty(0);
        // setShow(0);
        // setTravel(0);
        // setPark(0);
        // setDelicacy(0);
        // setSport(0);
        // setGame(0);
        // setGrinning(0);
        // setGrin_squint(0);
        // setTouched(0);
        // setAngry(0);
        // setWeary(0);
        // setCrying(0);
        // setExploding(0);
        // setFearful(0);
        // setWoozy(0);

        //reset the obj once we select an another month
        setTags({
            sunny: 0,
            cloudy: 0,
            rain: 0,
            snow: 0,
            thundershower: 0,
            overcast: 0,
            writing: 0,
            dancing: 0,
            party: 0,
            show: 0,
            travel: 0,
            park: 0,
            delicacy: 0,
            sport: 0,
            game: 0,
            grinning: 0,
            grin_squint: 0,
            touched: 0,
            angry: 0,
            weary: 0,
            crying: 0,
            exploding: 0,
            fearful: 0,
            woozy: 0
        });
        setMonth(month);
        calculateSummary(month);
        // get the right month
        console.log("month " + month);
        console.log("weather " + weather);
    };


    const calculateSummary = (month) => {
        api.getOneMonthDairies(month).then(function (res) {
            // print data get from back-end(database) -> get the right data
            console.log(res.data);
            res.data.map(function (dairy) {
                console.log(dairy.weather);
                if (dairy.weather === "sunny") {
                    setTags(tags.sunny + 1);
                    // cannot really update the corresponding fields. The output is undefined.
                    console.log("sunny " + tags.sunny);
                } else if (dairy.weather === "cloudy") {
                    setTags(tags.cloudy + 1);
                } else if (dairy.weather === "rain") {
                    setTags(tags.rain + 1);
                } else if (dairy.weather === "snow") {
                    setTags(tags.snow + 1);
                } else if (dairy.weather === "thundershower") {
                    setTags(tags.thundershower + 1);
                } else if (dairy.weather === "overcast") {
                    setTags(tags.overcast + 1);
                }

                if (dairy.activity === "writing") {
                    setTags(tags.writing + 1);
                } else if (dairy.activity === "dancing") {
                    setTags(tags.dancing + 1);
                } else if (dairy.activity === "party") {
                    setTags(tags.party + 1);
                } else if (dairy.activity === "show") {
                    setTags(tags.show + 1);
                } else if (dairy.activity === "travel") {
                    setTags(tags.travel + 1);
                } else if (dairy.activity === "park") {
                    setTags(tags.park + 1);
                } else if (dairy.activity === "delicacy") {
                    setTags(tags.delicacy + 1);
                } else if (dairy.activity === "sport") {
                    setTags(tags.sport + 1);
                } else if (dairy.activity === "game") {
                    setTags(tags.game + 1);
                }

                if (dairy.emotion === "grinning") {
                    setTags(tags.grinning + 1);
                } else if (dairy.emotion === "grin-squint") {
                    setTags(tags.grin_squint + 1);
                } else if (dairy.emotion === "touched") {
                    setTags(tags.touched + 1);
                } else if (dairy.emotion === "angry") {
                    setTags(tags.angry + 1);
                } else if (dairy.emotion === "weary") {
                    setTags(tags.weary + 1);
                } else if (dairy.emotion === "crying") {
                    setTags(tags.crying + 1);
                } else if (dairy.emotion === "exploding") {
                    setTags(tags.exploding + 1);
                } else if (dairy.emotion === "fearful") {
                    setTags(tags.fearful + 1);
                } else if (dairy.emotion === "woozy") {
                    setTags(tags.woozy + 1);
                }
            });

            console.log("activity " + activity);
        });
    };



    const weatherRange = ["#03045E", "#023E8A", "#0077B6", "#0096C7", "#48CAE4", "#90E0EF"];
    const weatherDomain = ["sunny", "cloudy", "rain", "snow", "thundershower", "overcast"];

    const activityRange = ["#000000", "#1B4332", "#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2", "#B7E4C7", "#D8F3DC"];
    const activityDomain = ["writing", "dancing", "party", "show", "travel", "park", "delicacy", "sport", "game"];

    const feelingRange = ["#774936", "#8A5A44", "#9D6B53", "#B07D62", "#C38E70", "#CD9777", "#D69F7E", "#DEAB90", "#EDC4B3"];
    const feelingDomain = ["grinning", "grin-squint", "touched", "angry", "weary", "crying", "exploding", "fearful", "woozy"];


    return (
        <div className="app">
            <h1 className="summary-title">Diary Summary</h1>
            <div className="select">
                <Select
                    labelInValue
                    defaultValue={{ value: 'January' }}
                    style={{ width: 120 }}
                    onChange={handleChange}
                >
                    <Option value="1">January</Option>
                    <Option value="2">February</Option>
                    <Option value="3">March</Option>
                    <Option value="4">April</Option>
                    <Option value="5">May</Option>
                    <Option value="6">June</Option>
                    <Option value="7">July</Option>
                    <Option value="8">August</Option>
                    <Option value="9">September</Option>
                    <Option value="10">October</Option>
                    <Option value="11">November</Option>
                    <Option value="12">December</Option>
                </Select>
            </div>

            <div className="pie-chart">
                <PieChart title="Weather Data" data={weather} range={weatherRange} domain={weatherDomain} month={month}/>
                <PieChart title="Activity Data" data={activity} range={activityRange} domain={activityDomain} month={month}/>
                <PieChart title="Feeling Data" data={feeling} range={feelingRange} domain={feelingDomain} month={month}/>
            </div>
        </div>
    )
}

export default Data
