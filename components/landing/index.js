import avatar from '../../assets/images/avatar.png'
import travel from "../../assets/images/travel.png";

import styles from "./landing.module.css";

import {AiOutlineArrowRight} from 'react-icons/ai'

import { useState } from "react";

import { useContext } from 'react';
import ModeDistanceContext from '../../contexts/ModeDistance';
import Link from 'next/link';

const index = () => {

  const {mode, modeChange, distance, distanceChange} = useContext(ModeDistanceContext);

  console.log(avatar);
  return (
    <div className={styles.parent_container}>
    <div className={styles.travel_container}>
          <img src={travel.src} alt="Travel Png" className={styles.travel} />
        </div>
        <div className={styles.container}>
          <div className={styles.avatar_container}>
            <img src={avatar.src} alt="Avatar" className={styles.avatar} />
          </div>
          <div className={styles.form_container}>
            <form action="">
              <p className={styles.heading}>Respondent Travel profile</p>
              <label htmlFor="">What is your most frequently used means of travel from your home to work location?</label>
              {/* kjsbdcsd */}
              <div className={styles.radio_buttons}>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='bus' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-biking"></i>
              <h3>Bus</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='metro' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-futbol"></i>
              <h3>Metro</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='own-two-wheeler' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-table-tennis"></i>
              <h3>Own Two-Wheeler</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='own-car' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>Own Car</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='walk' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>Walk/Bicycle</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='auto' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>Auto</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio" id='ola' onChange={(e)=>{
            modeChange(e.target.id)
          }}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>App based ride hailing cab services including Ola/Uber</h3>
            </div>
          </span>
        </label>
      </div>

                <label htmlFor="">What is the total distance between your home and workplace?</label>
                <div className={styles.radio_buttons}>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio2" id='less-than-5' onChange={ (e) => {distanceChange(e.target.id)}}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-biking"></i>
              <h3>Less than 5</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio2" id='5-10' onChange={ (e) => {distanceChange(e.target.id)}}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-futbol"></i>
              <h3>5-10km</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio2" id='10-15' onChange={ (e) => {distanceChange(e.target.id)}}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-table-tennis"></i>
              <h3>10-15km</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio2" id='15-20' onChange={ (e) => {distanceChange(e.target.id)}}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>15-20km</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio2" id='20-25' onChange={ (e) => {distanceChange(e.target.id)}}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>20-25km</h3>
            </div>
          </span>
        </label>
        <label className={styles.custom_radio}>
          <input type="radio" name="radio2" id='greater-than-25' onChange={ (e) => {distanceChange(e.target.id)}}/>
          <span className={styles.radio_btn}
            ><i className="las la-check"></i>
            <div className={styles.hobbies_icon}>
              <i className="las la-ellipsis-h"></i>
              <h3>Greater Than 25Km</h3>
            </div>
          </span>
        </label>
      </div>
            </form>
          </div>
          <div className={styles.btn_container}>
          <Link href='/mode_choice' className={styles.btn}>See Mode Choices <AiOutlineArrowRight/>
          </Link> 
          </div>
        </div>
    </div>
  )
}

export default index
