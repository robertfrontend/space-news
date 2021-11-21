import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function CountDown({lanzamiento}) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(lanzamiento).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop
        clearInterval(interval.current);
      } else {
        setTimerDays(days > 9 ? days : '0' + days );

        // if (hours > 9) {
        //     console.log(hours, 'mas nueve')
        // }

        setTimerHours(hours > 9 ? hours : '0' + hours);
        
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // componentDimoun
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Content>
        <div className="row align-items-center justify-content-center">
            <div className="col-md-auto">
                <h3>T -</h3>
            </div>
            <div className="col-md-auto">
                <h4> {timerDays} </h4>
                <small>Days</small>
            </div>
            <div className="col-md-auto"><h4>:</h4></div>
            <div className="col-md-auto">
                <h4> {timerHours} </h4>
                <small>Hours</small>
            </div>
            <div className="col-md-auto"><h4>:</h4></div>

            <div className="col-md-auto">
                <h4> {timerMinutes} </h4>
                <small>Minutes</small>
            </div>
            <div className="col-md-auto"><h4>:</h4></div>

            <div className="col-md-auto">
                <h4> {timerSeconds} </h4>
                <small>Seconds</small>
            </div>
        </div>
    </Content>
  );
}


const Content =styled.div `
    margin-top: 2em;
    h4 {
        font-weight: bold;
    }
`