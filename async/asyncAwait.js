function sayHello(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hello " + name);
        resolve(name);
      }, 1000);
    });
  }
  
  function talk(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Bla bla bla bla");
        resolve(name);
      }, 1000);
    });
  }
  
  function sayBye(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Goodbye " + name);
        resolve(name);
      }, 2000);
    });
  }
  
  async function conversation(name) {
    console.log("Starting async process...");
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log("Process completed");
  }
  
  conversation("Cinlo");