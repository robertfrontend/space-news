import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from 'next/link'
import CountDown from "./CountDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faInfoCircle, faPlay, faShareSquare } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function CardLaunch({ lanch }) {
  return (
    <Card>
      <div className="row">
        <div className="col-md-auto">
          <img src={lanch.image} alt="" width={100} />
        </div>
        <div className="col-md-9 py-3 text-center">
          <h5>{lanch.name}</h5>
          <h6>{lanch.launch_service_provider.name}</h6>
          <CountDown lanzamiento={lanch.net}/>
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
  box-shadow: 0px 0px 10px #adadadbe;
  width: 100%;
  margin: 4em 0;
  border-radius: 12px;
  img {
    width: 220px;
    height: 250px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  h5 {
    font-weight: bold;
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
    color: #2d3436;
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
    color: #2d3436;
  }
`;
