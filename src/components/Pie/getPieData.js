// const fetch = require("node-fetch");
//
// let mainData, dataLength;
// let getMain = new Promise(async function (resolve, reject) {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     resolve(response.json());
//     reject();
// });
//
// getMain.then(v => {
//     mainData = v;
//     return dataLength = mainData.map(item => item.name.length);
// }).then(data => {
//     console.log(dataLength, mainData)
// });
//
// module.exports ={ getMain };