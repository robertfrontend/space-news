import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from 'next/link'
import CountDown from "./CountDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faInfoCircle, faPlay, faShareSquare } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function CardLaunch({ lanch }) {
  console.log(lanch.window_start.toLocaleString())


  return (
    <Card>
      <div className="row align-items-center">
        <div className="col-md-auto col-lg-4">
          <img src={lanch.image} alt="" width={100} />
        </div>
        <div className="col-md-9 col-lg-8 py-3 text-center">
          <h3>{lanch.name}</h3>
          <h6>{lanch.launch_service_provider.name}</h6>
          <h6> {lanch.window_start} </h6>
          {
            lanch.net && (
              <CountDown lanzamiento={lanch.net}/>
            )
          }
          <div className="row">
              <div className="col-md-4">
                <button><FontAwesomeIcon icon={faPlay} className="mx-2" />Watch</button>
              </div>
              <div className="col-md-4">
                <Link href={`launch/${lanch.id}`}
                    ><a><FontAwesomeIcon icon={faInfoCircle} className="mx-2" />More info</a>
                </Link>
              </div>
              <div className="col-md-4">
                <button><FontAwesomeIcon icon={faShareSquare} className="mx-2" />Share</button>
              </div>
          </div>
        
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  box-shadow: 0px 0px 10px #000000bd;
  width: 100%;
  margin: 4em 0;
  border-radius: 12px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  h3 {
    font-weight: bold;
    padding: 0 1em;
  }
  h6 {
    color: #6c5ce7;
    font-weight: 700;
  }
  button {
    border: none;
    margin-top: 1em;
    padding: 5px 2em;
    background-color: transparent;
    font-weight: bold;
    outline: none;
    color: white;
  }
  a {
      text-decoration: none;
      display: block;
    border: none;
    margin-top: 1em;
    padding: 5px 2em;
    background-color: transparent;
    font-weight: bold;
    outline: none;
    color: white;
  }
`;
