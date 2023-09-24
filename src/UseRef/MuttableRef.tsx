import React, { useState, useRef, useEffect } from "react";

const MuttableRef = () => {
  // for muttableReferrences specify the appropriate type
  const [timer, setTimer] = useState<number>(0);
  //   const interValRef = useRef<number | null>(null); // put number | null as the type of return
  const interValRef = useRef<number | undefined>(undefined); // since it's returning an error in stopTimer intervalRef because it's returning undefined instead of null just set the null to undefined

  const stopTimer = () => {
    // window.clearInterval(interValRef.current); // if we changed null to undefined

    // or if we want to make the null stay we can just
    if (interValRef.current) window.clearInterval(interValRef.current); //it means if this is truthy run this  window.clear....

    //if we didn't changed the null to undefined or even we change it
  };

  //   const startTimer = () => {};

  //   if component mounts we invoke the setInterval function to increase timer value by 1 every secs and the value of interval is stored at interValRef.current
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    // to make sure the timer is cleared when we click the button stop timer or unmount it we call the stopTimer function as return
    return () => {
      stopTimer();
      //   inside of stopTimer is the clearInterval passing the intervalRef.current that stored or hold our interval id o timer
    };
  }, []);

  return (
    <div>
      HookTimer = {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
      {/* <button onClick={() => startTimer()}>Start Timer</button> */}
    </div>
  );
};

export default MuttableRef;
