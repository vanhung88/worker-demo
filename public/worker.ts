onmessage = (value) => {
  if (value.data === 'start') {
    let cal = 0;
    for (let index = 0; index < 50000; index++) {
      console.log('count');
      cal += 1;
    }
    postMessage(cal);
  }
};
