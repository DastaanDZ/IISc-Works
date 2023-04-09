import Head from "next/head";
import styles from "./modeChoice.module.css";
import { useContext, useEffect, useState } from "react";
import ModeDistanceContext from "../../../contexts/ModeDistance";
import { useRouter } from "next/router";

import data0 from "../../../assets/data/sample_db_0km.json";
import data1 from "../../../assets/data/sample_db_5km.json";
import data2 from "../../../assets/data/sample_db_10km.json";
import data3 from "../../../assets/data/sample_db_15km.json";
import data4 from "../../../assets/data/sample_db_20km.json";
import data5 from "../../../assets/data/sample_db_25km.json";

import {BsFillTrainFreightFrontFill} from 'react-icons/bs'
import {FcAutomotive} from 'react-icons/fc'
import {MdTwoWheeler} from 'react-icons/md'
import {AiFillCar} from 'react-icons/ai'
import {IoMdBicycle} from 'react-icons/io'
import {BsFillBusFrontFill} from 'react-icons/bs'
import {MdEventSeat} from 'react-icons/md'
import {MdSensorOccupied} from 'react-icons/md'
import {MdAirlineSeatReclineExtra} from 'react-icons/md'
export default function Table() {

  const router = useRouter()
  const { mode, changeMode, distance, changeDistance } =
    useContext(ModeDistanceContext);

    useEffect(()=>{
      console.log(distance, mode)
      if(distance == '' || mode==''){
        router.push('/')
      }
    },[distance, mode, router])
    
    if(distance == '' || mode==''){
      return <div></div>
    }

  const Mode0_15_20 = {
    1: ["Bus Type 1"],
    2: ["Bus Type 2"],
    3: ["Walk / Bicycle"],
    4: ["Own Two-wheeler", "Own Car"],
    5: ["Ride-hailing Car", "Ride-hailing Two-wheeler", "Auto"],
  };
  const Mode5_10_25 = {
    1: ["Bus Type 1"],
    2: ["Bus Type 2"],
    3: ["Bus Type 3"],
    4: ["Metro / Train"],
    5: ["Own Two-wheeler", "Own Car"],
    6: ["Ride-hailing Car", "Ride-hailing Two-wheeler", "Auto"],
  };

  let data;

  switch (distance) {
    case "less-than-5":
      data = data0;
      // extractModeWalkTimeWaitTimeSum(data)
      break;
    case "5-10":
      data = data1;
      // extractModeWalkTimeWaitTimeSum(data)
      break;
    case "10-15":
      data = data2;

      // extractModeWalkTimeWaitTimeSum(data)
      break;
    case "15-20":
      data = data3;
      // extractModeWalkTimeWaitTimeSum(data)
      break;
    case "20-25":
      data = data4;
      // extractModeWalkTimeWaitTimeSum(data)
      break;
    case "greater-than-25":
      data = data5;
      // extractModeWalkTimeWaitTimeSum(data)
      break;
    default:
      break;
  }
  const extractedMode = extractMode(distance);
  const { ivttValues, tVariab, tCost, tCrowd, tServ } = extractValues(
    data,
    extractedMode
  );
  const modeWalkWaitTimeSumArr = extractModeWalkTimeWaitTimeSum(data,extractedMode.length)

  function extractMode(distanceState) {
    let mode2;
    if (
      distanceState === "less-than-5" ||
      distanceState === "15-20" ||
      distanceState === "20-25"
    ) {
      mode2 = Mode0_15_20;
    } else if (
      distanceState === "5-10" ||
      distanceState === "10-15" ||
      distanceState === "greater-than-25"
    ) {
      mode2 = Mode5_10_25;
    }

    let extractedMode = [];
    for (let key in mode2) {
      if (mode2.hasOwnProperty(key)) {
        if (mode2[key].indexOf(mode) !== -1) {
          extractedMode.push(mode);
        } else {
          extractedMode.push(mode2[key][0]);
        }
      }
    }
    return extractedMode;
  }

  function extractValues(data, extractedMode) {
    console.log(extractedMode);
    let ivttValues = Array(5).fill(0);
    let tVariab = Array(5).fill(0);
    let tCost = Array(5).fill(0);
    let tCrowd = Array(5).fill(0);
    let tServ = Array(5).fill(0);

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;
    let index5 = 0;

    for (const mode in data.Data[0]) {
      if (mode.startsWith("mode_") && mode.endsWith(".ivtt")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          ivttValues[index1] = data.Data[0][mode];
          index1++;
        }
      }
      if (mode.startsWith("mode_") && mode.endsWith(".tvariab")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          tVariab[index2] = data.Data[0][mode];
          index2++;
        }
      }
      if (mode.startsWith("mode_") && mode.endsWith(".tcost")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          tCost[index3] = data.Data[0][mode];
          index3++;
        }
      }
      if (mode.startsWith("mode_") && mode.endsWith(".crowd")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          tCrowd[index4] = data.Data[0][mode];
          index4++;
        }
      }
      if (mode.startsWith("mode_") && mode.endsWith(".serv")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          tServ[index5] = data.Data[0][mode];
          index5++;
        }
      }
    }
    console.log({ ivttValues, tVariab, tCost, tCrowd, tServ });
    return { ivttValues, tVariab, tCost, tCrowd, tServ };
  }

  function extractModeWalkTimeWaitTimeSum(data,len) {
    console.log('data',data.Data[0]);
    const modeWalkWaitTimeSumArr = Array(5).fill(0);;
    let index1 = 0;
    let walktime = 0
    let waittime = 0
    for (const mode in data.Data[0]) {
      if (mode.startsWith("mode_") && mode.endsWith(".walktime")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          walktime = data.Data[0][mode];
        }
      }
      if (mode.startsWith("mode_") && mode.endsWith(".waittime")) {
        if (extractedMode.includes(data.Data[0][mode.slice(0, 6)])) {
          waittime= data.Data[0][mode];
          const modeWalkWaitTimeSum = walktime + waittime;
          modeWalkWaitTimeSumArr[index1] = (modeWalkWaitTimeSum);
          index1++;
          console.log('walktime',walktime)
          console.log('waittime',waittime)
          console.log('modeWalkWaitTimeSum',modeWalkWaitTimeSum)

        }
      }
    }

    // for (let i = 1; i <= len; i++) {
    //   const mode3 = `mode_${i}`;
    //   console.log('mode3',mode3)
    //   const walkTimeKey = `${mode3}.walktime`;
    //   const waitTimeKey = `${mode3}.waittime`;
      
    //   const modeWalkTime = data.Data[0][walkTimeKey];
    //   const modeWaitTime = data.Data[0][waitTimeKey];

    //   const modeWalkWaitTimeSum = modeWalkTime + modeWaitTime;
    //   modeWalkWaitTimeSumArr.push(modeWalkWaitTimeSum);
    // }

    return modeWalkWaitTimeSumArr;
  }

  return (
    <>
    <div className={styles.container}> 
      <p className={styles.heading}>Mode Choice</p>
      <table className={styles.contentTable}>
        <thead>
          <tr >
          <td style={{'color' : 'white', 'font-family' : '"Raleway", sans-serif','font-size': '1rem','font-weight': '400'}}>Modes</td>
            {extractedMode?.map((item) => (
              <td style={{'color' : 'white'}}>
              {item === "Bus Type 1" || item === "Bus Type 2" || item === "Bus Type 3"? <BsFillBusFrontFill/> : item ==="Walk / Bicycle" ? <IoMdBicycle/> : item === "Ride-hailing Car" || item === "Own Car" ? <AiFillCar/> : item === "Ride-hailing Two-wheeler" || item === "Own Two-wheeler" ? <MdTwoWheeler/> : item === "Auto"? <FcAutomotive/> : item === "Metro / Train"? <BsFillTrainFreightFrontFill/> : ""}
                <p>{item}</p>
                <input type="radio" name="radio" id={item} />
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Total time spent while inside the vehicle</td>
            {ivttValues.map((item) => (
              <td>{`${item} min`}</td>
            ))}
          </tr>
          <tr>
          <td>Time spent outside the vehicle</td>
          {modeWalkWaitTimeSumArr.map((item) => (
            <td>{`${item} min`}</td>
          ))}
          </tr>
          <tr>
          <td>Possible delay due to traffic congestion or other uncertainities</td>
            {tVariab.map((item) => (
              <td>{`... up to ${item} min more`}</td>
            ))}
          </tr>
          <tr>
          <td>Total one-way cost of travel</td>
            {tCost.map((item) => (
              <td>{`Rs. ${item}`}</td>
            ))}
          </tr>
          <tr>
          <td>Extent of crowding in the vehicle</td>
            {tCrowd.map((item) => (
              <td>{item == 1 ? <MdEventSeat/> : item == 2? <MdEventSeat/> : item == 3? <MdSensorOccupied/> : '' }
              {item == 1 ? 'Many seats available' : item == 2? 'Some seats available' : item == 3? 'All Seats occupied' : '' }</td>
            ))}
          </tr>
          <tr>
          <td>Service Type</td>
            {tServ.map((item) => (
              <td>{item == 1 ? <MdAirlineSeatReclineExtra/> : item == 2? <MdAirlineSeatReclineExtra/> : item == 3? <MdAirlineSeatReclineExtra/>: '' } 
              {item == 1 ? 'Ordinary' : item == 2? 'Express None-AC': item == 3? 'Express AC': '' }</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
