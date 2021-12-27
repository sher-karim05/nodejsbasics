import os from 'os';

const  user = os.userInfo();
console.log(user);

//
console.log(`The System Update is ${os.uptime()}seconds`)