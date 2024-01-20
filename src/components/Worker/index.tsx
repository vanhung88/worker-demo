import { useState } from 'react';

function WorkerTest() {
  const myWorker = new Worker('worker.ts');
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    myWorker.postMessage('start');
    myWorker.onmessage = (value) => setSum(value?.data);
  };
  return (
    <div>
      <div>Calculator: {sum}</div>
      <button
        onClick={() => {
          setCount((pre) => pre + 1);
        }}>
        {count}
      </button>
      <button onClick={handleClick}>Calculator data + 100000</button>
    </div>
  );
}

export default WorkerTest;
