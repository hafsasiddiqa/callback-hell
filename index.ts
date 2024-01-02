// callback hell

setTimeout(function() {
    console.log('fetchData');
    }, 4000);
    setTimeout(function() {
        console.log('processData');
    }, 3000);
    setTimeout(function() {
        console.log('displayData');
    }, 2000);
    setTimeout(function() {
        console.log('performData');
    }, 1000);
  
    // inversion of control
    function fetchData(): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('fetchData');
            resolve();
          }, 4000);
        });
      }
      
      function processData(): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('processData');
            resolve();
          }, 3000);
        });
      }
      
      function displayData(): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('displayData');
            resolve();
          }, 2000);
        });
      }
      
      function performData(): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('performData');
            resolve();
          }, 1000);
        });
      }
      
      async function run(): Promise<void> {
        await fetchData();
        await processData();
        await displayData();
        await performData();
      }
      
      run();
      