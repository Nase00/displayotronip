const os = require("os");
const { get } = require("lodash");
const JVSDisplayOTron = require("jvsdisplayotron");

const REFRESH_INTERVAL = 10000;
const dothat = new JVSDisplayOTron.DOTHAT();
dothat.lcd.setContrast(45);
dothat.lcd.write("Initialized");

const matchesIPv4 = interface => interface.family === "IPv4";
const getIP = networkInterfaces =>
  find(networkInterfaces.eth0, matchesIPv4).adress;

const printIP = () => {
  dothat.lcd.setCursorPosition(0, 1);
  dothat.lcd.write("test"); // TODO
  dothat.lcd.setCursorPosition(1, 1);
  console.log(getIP(os.networkInterfaces())); // TODO remove
  dothat.lcd.write(getIP(os.networkInterfaces()));
};

setInterval(printIP, REFRESH_INTERVAL);
