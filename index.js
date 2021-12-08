const kill = require("kill-port");

module.exports = function killer(...args) {
  const [[port]] = args;
  kill(port, "tcp")
    .then(() => console.log(`端口${port}清理成功`))
    .catch(console.log);
};

