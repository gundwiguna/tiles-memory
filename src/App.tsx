import { useEffect, useState } from 'react';
import Tiles from './Components/Tiles';
import Timer from './Components/Timer';
import { getRandomNumbers } from './Utils/utils';

function App() {
  const [patterns, setPatterns] = useState([] as any[]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  function generatePatterns() {
    const result = getRandomNumbers();
    setPatterns(result);
  }

  useEffect(() => {
    generatePatterns();
  }, []);
  
  function afterPreviewCallback() {
    setIsPlaying(true);
  }

  function onTimeUpCallback() {
    setIsPlaying(false);
  }

  return (
    <div className='container'>
      <h3 className='text-center'>Movements to follow</h3>
      <div className="flex flex-col items-center">
        <Tiles
          enabled={isPlaying}
          afterPreviewCallback={afterPreviewCallback}
          patterns={patterns} />
        <button onClick={generatePatterns}>Generate Patterns</button>
      </div>

    <Timer onTimeUp={onTimeUpCallback}></Timer>

      <div className='mb-8' />

      {/* <h3 className='text-center'>Re-do the movements</h3>
      <div className="flex justify-center">
        <Tiles />
      </div> */}
    </div>
  )
}

export default App
