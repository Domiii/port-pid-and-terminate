const portPid = require('./port-pid');
const { promisify } = require('util');

/**
 * NOTE: as of 2021, terminate is still callback-based.
 */
const terminate = promisify(require('terminate'));


const PORT = 12344;

(async function main() {
  const res = await portPid(PORT);
  console.log('PIDS found:', JSON.stringify(res));

  console.log('terminating...');

  await terminate(res.tcp[0]);

  const res2 = await portPid(PORT);
  console.log('Done. PIDS found:', JSON.stringify(res2));

})();