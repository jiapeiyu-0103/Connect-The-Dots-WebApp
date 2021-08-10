import { useState } from 'react'
import moment from 'moment'
// import * as Tags from '../constants/Tags'
import PieChart from "./PieChart";
import React from 'react';
import './data.css';
import * as api from '../../services/api';
import 'antd/dist/antd.css';
import { Select } from 'antd';

function Data(props) {



    const weatherRange = ["#03045E", "#023E8A", "#0077B6", "#0096C7", "#48CAE4", "#90E0EF"];
    const weatherDomain = ["sunny", "cloudy", "rain", "snow", "thundershower", "overcast"];

    const activityRange = ["#000000", "#1B4332", "#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2", "#B7E4C7", "#D8F3DC"];
    const activityDomain = ["writing", "dancing", "party", "show", "travel", "park", "delicacy", "sport", "game"];

    const feelingRange = ["#774936", "#8A5A44", "#9D6B53", "#B07D62", "#C38E70", "#CD9777", "#D69F7E", "#DEAB90", "#EDC4B3"];
    const feelingDomain = ["grinning", "grin-squint", "touched", "angry", "weary", "crying", "exploding", "fearful", "woozy"];

    let pieChartList = [];

    const { Option } = Select;
    const [month, setMonth] = useState(1);
    const [weather, setWeather] = useState([0,0,0,0,0,0]);
    const [activity, setActivity] = useState([0,0,0,0,0,0,0,0,0]);
    const [feeling, setFeeling] = useState([0,0,0,0,0,0,0,0,0]);

    const intialTag = {
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
    };
    const [tags, setTags] = useState(intialTag);

    // let weather = [tags.sunny, tags.cloudy, tags.rain, tags.snow, tags.thundershower, tags.overcast];

   // let activity = [tags.writing, tags.dancing, tags.party, tags.show, tags.travel, tags.park, tags.delicacy, tags.sport, tags.game];

   // let feeling = [tags.grinning, tags.grin_squint, tags.touched, tags.angry, tags.weary, tags.crying, tags.exploding, tags.fearful, tags.woozy];

    const handleChange = (value) => {
        let month = value.value;
        //reset the obj once we select an another month
        setTags(intialTag);
        setMonth(month);
        calculateSummary(month).then(res => {
        });
        // get the right month
    };


    const calculateSummary = async (month) => {

        await api.getOneMonthDairies(month, props.curUser.unique_id).then(function (res) {
            // print data get from back-end(database) -> get the right data
            let sunny = 0;
            let cloudy = 0;
            let rain = 0;
            let snow = 0;
            let thundershower = 0;
            let overcast = 0;
            let writing = 0;
            let dancing = 0;
            let party = 0;
            let show = 0;
            let park = 0;
            let travel = 0;
            let delicacy = 0;
            let sport = 0;
            let game = 0;
            let grinning = 0;
            let grin_squint = 0;
            let touched = 0;
            let angry = 0;
            let weary = 0;
            let crying = 0;
            let exploding = 0;
            let fearful = 0;
            let woozy = 0;
            res.data.map(function (dairy) {
                if (dairy.weather === "sunny") {
                    // setTags(tags.sunny + 1);
                    // cannot really update the corresponding fields. The output is undefined.
                    sunny++;
                } else if (dairy.weather === "cloudy") {
                    cloudy++
                    // setTags(tags.cloudy + 1);
                } else if (dairy.weather === "rain") {
                    rain++;
                    // setTags(tags.rain + 1);
                } else if (dairy.weather === "snow") {
                    snow++;
                    // setTags(tags.snow + 1);
                } else if (dairy.weather === "thundershower") {
                    thundershower++;
                    // setTags(tags.thundershower + 1);
                } else if (dairy.weather === "overcast") {
                    overcast++;
                    // setTags(tags.overcast + 1);
                }

                if (dairy.activity === "writing") {
                    writing++;
                } else if (dairy.activity === "dancing") {
                    dancing++;
                } else if (dairy.activity === "party") {
                    party++;
                } else if (dairy.activity === "show") {
                    show++;
                } else if (dairy.activity === "travel") {
                    travel++;
                } else if (dairy.activity === "park") {
                    park++;
                } else if (dairy.activity === "delicacy") {
                    delicacy++;
                } else if (dairy.activity === "sport") {
                    sport++;
                } else if (dairy.activity === "game") {
                    game++;
                }

                if (dairy.emotion === "grinning") {
                    grinning++;
                } else if (dairy.emotion === "grin-squint") {
                    grin_squint++;
                } else if (dairy.emotion === "touched") {
                    touched++;
                } else if (dairy.emotion === "angry") {
                    angry++;
                } else if (dairy.emotion === "weary") {
                    weary++;
                } else if (dairy.emotion === "crying") {
                    crying++;
                } else if (dairy.emotion === "exploding") {
                    exploding++;
                } else if (dairy.emotion === "fearful") {
                    fearful++;
                } else if (dairy.emotion === "woozy") {
                    woozy++;
                }
            });
            const newTags = Object.create(intialTag);
            newTags.sunny = sunny;
            newTags.cloudy = cloudy;
            newTags.rain = rain;
            newTags.snow = snow;
            newTags.overcast = overcast;
            newTags.thundershower = thundershower;
            newTags.writing = writing;
            newTags.dancing = dancing;
            newTags.party = party;
            newTags.show = show;
            newTags.travel = travel;
            newTags.park = park;
            newTags.delicacy = delicacy;
            newTags.sport = sport;
            newTags.game = game;
            newTags.grinning = grinning;
            newTags.grin_squint = grin_squint;
            newTags.touched = touched;
            newTags.angry = angry;
            newTags.weary = weary;
            newTags.crying = crying;
            newTags.exploding = exploding;
            newTags.fearful = fearful;
            newTags.woozy = woozy;
           // weather = [newTags.sunny, tags.cloudy, tags.rain, tags.snow, tags.thundershower, tags.overcast];
            let localWeather = [newTags.sunny, newTags.cloudy, newTags.rain, newTags.snow, newTags.thundershower, newTags.overcast];
            let localActivity = [newTags.writing, newTags.dancing, newTags.party, newTags.show, newTags.travel, newTags.park, newTags.delicacy, newTags.sport, newTags.game];
            let localFeeling = [newTags.grinning, newTags.grin_squint, newTags.touched, newTags.angry, newTags.weary, newTags.crying, newTags.exploding, newTags.fearful, newTags.woozy];
            setWeather(localWeather);
            setActivity(localActivity);
            setFeeling(localFeeling);
            // pieChartList.push(<PieChart title="Weather Data" data={weather} range={weatherRange} domain={weatherDomain} month={month}/>);
            // pieChartList.push(<PieChart title="Activity Data" data={activity} range={activityRange} domain={activityDomain} month={month}/>);
            // pieChartList.push(<PieChart title="Feeling Data" data={feeling} range={feelingRange} domain={feelingDomain} month={month}/>);
        });
    };
    

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
