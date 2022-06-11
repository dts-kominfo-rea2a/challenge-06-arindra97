// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (callback) => {
  // declare variable data
  let data = [];

  // read file1
  fs.readFile(file1, (err, data1) => {
    if (err) {
      return callback(err)
    };

    // parse file json to array of object
    const dataParse1 = JSON.parse(data1);
    // push data from data file 1
    data.push(dataParse1.message.split(" ")[1]);
    
    // read file2
    fs.readFile(file2, (err, data2) => {
      if (err) {
        return callback(err)
      };
      
      // parse file json to array of object
      const dataParse2 = JSON.parse(data2);
      // push data from data file 2
      data.push(dataParse2[0].message.split(" ")[1]);
      
      // read file3
      fs.readFile(file3, (err, data3) => {
        if (err) {
          return callback(err)
        };
        
        // parse file json to array of object
        const dataParse3 = JSON.parse(data3);
        // push data from data file 3
        data.push(dataParse3[0].data.message.split(" ")[1]);
        callback(null, data);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
