// callback hell: Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function. is also referred to as the 'Pyramid of Doom'.


setTimeout(function() {
  console.log('fetchData');
  setTimeout(function() {
    console.log('processData');
    setTimeout(function() {
      console.log('displayData');
      setTimeout(function() {
        console.log('performData');
        
      }, 1000);
      
    }, 2000);
    
  }, 3000);
  
}, 4000);
  
// Inversion of control: Inversion of Control is a design pattern that helps to decouple the components in a system, making them more flexible, reusable, and testable.

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

    