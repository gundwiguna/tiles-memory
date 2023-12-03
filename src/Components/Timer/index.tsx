import { useEffect, useState } from 'react';

function Index({ onTimeUp }: any) {
  const [ms, setMs] = useState(10000);
  function startTimer() {
    let msLeft = ms, // 10000
        interval = 500;

    (function countDown() {
      msLeft = msLeft - interval;
      if (msLeft < 0) {
        msLeft = 0;
        if (onTimeUp) {
          setTimeout(() => {
            onTimeUp();
          }, interval);
        }
        return;
      }
      setMs(msLeft);
      setTimeout(() => {
        countDown();
      }, interval);
    })();
  }

  useEffect(() => {
    startTimer();
  }, []);
  return (
    <div>
      <div className='bg-blue-400 h-2 transition-all ease-linear duration-500' style={{width: `${ms/100}%`}}></div>
      timeleft = {ms};
    </div>
  );
}

export default Index;