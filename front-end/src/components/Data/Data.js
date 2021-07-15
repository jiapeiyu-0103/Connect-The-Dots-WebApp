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
    const [sunny, setSunny] = useState(0);
    const [cloudy, setCloudy] = useState(0);
    const [rain, setRain] = useState(0);
    const [snow, setSnow] = useState(0);
    const [thundershower, setThundershower] = useState(0);
    const [overcast, setOvercast] = useState(0);

    const [writing, setWriting] = useState(0);
    const [dancing, setDancing] = useState(0);
    const [party, setParty] = useState(0);
    const [show, setShow] = useState(0);
    const [travel, setTravel] = useState(0);
    const [park, setPark] = useState(0);
    const [delicacy, setDelicacy] = useState(0);
    const [sport, setSport] = useState(0);
    const [game, setGame] = useState(0);

    const [grinning, setGrinning] = useState(0);
    const [grin_squint, setGrin_squint] = useState(0);
    const [touched, setTouched] = useState(0);
    const [angry, setAngry] = useState(0);
    const [weary, setWeary] = useState(0);
    const [crying, setCrying] = useState(0);
    const [exploding, setExploding] = useState(0);
    const [fearful, setFearful] = useState(0);
    const [woozy, setWoozy] = useState(0);

    const weather = [sunny, cloudy, rain, snow, thundershower, overcast];

    const activity = [writing, dancing, party, show, travel, park, delicacy, sport, game];

    const feeling = [grinning, grin_squint, touched, angry, weary, crying, exploding, fearful, woozy];


    const handleChange = (value) => {
        let month = value.value;
        setSunny(0);
        setCloudy(0);
        setRain(0);
        setSnow(0);
        setThundershower(0);
        setOvercast(0);
        setWriting(0);
        setDancing(0);
        setParty(0);
        setShow(0);
        setTravel(0);
        setPark(0);
        setDelicacy(0);
        setSport(0);
        setGame(0);
        setGrinning(0);
        setGrin_squint(0);
        setTouched(0);
        setAngry(0);
        setWeary(0);
        setCrying(0);
        setExploding(0);
        setFearful(0);
        setWoozy(0);
        setMonth(month);
        calculateSummary(month);
        console.log("month " + month);
        console.log("weather " + weather);
    }


    const calculateSummary = (month) => {
        api.getOneMonthDairies(month).then(function (res) {
            console.log(res.data);
            res.data.map(function (dairy) {
                console.log(dairy.weather);
                if (dairy.weather === "sunny") {
                    setSunny(sunny + 1);
                    console.log("sunny " + sunny);
                } else if (dairy.weather === "cloudy") {
                    setCloudy(cloudy + 1);
                } else if (dairy.weather === "rain") {
                    setRain(rain + 1);
                } else if (dairy.weather === "snow") {
                    setSnow(snow + 1);
                } else if (dairy.weather === "thundershower") {
                    setThundershower(thundershower + 1);
                } else if (dairy.weather === "overcast") {
                    setOvercast(overcast + 1);
                }

                if (dairy.activity === "writing") {
                    setWriting(writing + 1);
                } else if (dairy.activity === "dancing") {
                    setDancing(dancing + 1);
                } else if (dairy.activity === "party") {
                    setParty(party + 1);
                } else if (dairy.activity === "show") {
                    setShow(show + 1);
                } else if (dairy.activity === "travel") {
                    setTravel(travel + 1);
                } else if (dairy.activity === "park") {
                    setPark(park + 1);
                } else if (dairy.activity === "delicacy") {
                    setDelicacy(delicacy + 1);
                } else if (dairy.activity === "sport") {
                    setSport(sport + 1);
                } else if (dairy.activity === "game") {
                    setGame(game + 1);
                }

                if (dairy.emotion === "grinning") {
                    setGrinning(grinning + 1);
                } else if (dairy.emotion === "grin-squint") {
                    setGrin_squint(grin_squint + 1);
                } else if (dairy.emotion === "touched") {
                    setTouched(touched + 1);
                } else if (dairy.emotion === "angry") {
                    setAngry(angry + 1);
                } else if (dairy.emotion === "weary") {
                    setWeary(weary + 1);
                } else if (dairy.emotion === "crying") {
                    setCrying(crying + 1);
                } else if (dairy.emotion === "exploding") {
                    setExploding(exploding + 1);
                } else if (dairy.emotion === "fearful") {
                    setFearful(fearful + 1);
                } else if (dairy.emotion === "woozy") {
                    setWoozy(woozy + 1);
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
