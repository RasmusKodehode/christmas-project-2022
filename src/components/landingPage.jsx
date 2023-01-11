import {useState, useEffect} from "react";


export function LandingPage() {
    const [remainingTime, setRemainingTime] = useState(null);
    useEffect(() => {
        const countDown = setInterval(() => {
          const currentDate = new Date();
          const christmasEve = new Date(2023, 11, 24, 0, 0, 0, 0);
          //if it's past christmas eve, count down to christmas next year
          if (currentDate > christmasEve) {
            christmasEve.setFullYear(christmasEve.getFullYear() + 1);
          }
          //time left needs to be in seconds
          const timeLeft = (christmasEve - currentDate) / 1000;
          setRemainingTime(timeLeft);
        }, 1); //update the counter every thousandth of a second
        return () => clearInterval(countDown);
    }, []);
    
    //converts remaining time into days, hours, minutes, and seconds
    function convertToFormat(seconds) {
        const day = Math.floor(seconds / 86400);
        const hour = Math.floor((seconds % 86400) / 3600);
        const minute = Math.floor((seconds % 3600) / 60);
        const second = seconds % 60;
        const secRound = second.toFixed(3);
        return `${day} days, ${hour} hours, ${minute} minutes, ${secRound} seconds`
    }

    function stateOfChristmas(seconds) {
        if (seconds > 30412800) {
          //between December 24th and January 6th - Christmas
          return "It's christmas!";
        } else if (seconds > 1987200) {
          //between January 7th and November 30th - No christmas
          return "It's a long time until christmas...";
        } else {
          //between December 1st and December 23rd - soon Christmas
          return "Christmas is here soon!";
        }
    }

    return (
        <div className="Christmas-now">
            <h1>{stateOfChristmas(remainingTime)}</h1>
            <h1>Time remaining until christmas:</h1>
            <h1>{convertToFormat(remainingTime)}</h1>
        </div>
    )
}