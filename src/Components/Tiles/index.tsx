import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Index(props: any) {
  const {
    patterns = [] as any[],
    configs = {
      interval: 500,
    },
    enabled = false,
    afterPreviewCallback,
    resultCallback
  } = props;
  const [activeIndex, setActiveIndex] = useState(null as number | null);
  const [inputPatterns, setInputPatterns] = useState([] as any[]);
  
  function previewPatterns() {
    let currentIndex = 0,
        lastIndex = patterns.length -1;
    
    (function activateIndex() {
      setTimeout(() => {
        setActiveIndex(patterns[currentIndex]);
        currentIndex++;
        if (currentIndex <= lastIndex) {
          activateIndex();
          return;
        }
        if (afterPreviewCallback) {
          afterPreviewCallback();
        }
      }, configs.interval);
    })();
  }

  useEffect(() => {
    if (!patterns || !patterns.length) {
      return;
    }

    previewPatterns();
    console.log(`New pattern found: ${patterns}`);
  }, [patterns]);
  return (
    <div>
      <div className="flex flex-wrap w-60">
        {Array.from({ length: 9 })
          .map((v: any, index: number) => {
            return <button
              className={`basis-1/3 h-20 bg-blue-400 border-white border-2 transition-all duration-500 ${index === activeIndex && 'bg-red-400'} disabled:bg-gray-500`}
              disabled={!enabled}
              key={index}>
              {index}{activeIndex === index && ' - Active'}
            </button>
          })}
      </div>
    </div>
  );
}

Index.propTypes = {
  patterns: PropTypes.arrayOf(PropTypes.number),
  startTimer: PropTypes.func,
  afterPreviewCallback: PropTypes.func,
  enabled: PropTypes.bool
}

export default Index;