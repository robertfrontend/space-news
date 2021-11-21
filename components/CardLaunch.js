import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountDown from "./CountDown";

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
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  box-shadow: 0px 5px 10px #dfe6e9;
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
`;
