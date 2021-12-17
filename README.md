Cross-platform example of how to use Node.js to:

1. Find a PID by port.
   * We use [port-pid](https://github.com/radiovisual/port-pid/) for that.
     * We use a fixed version of [port-pid](https://github.com/radiovisual/port-pid/), which applies a fix for [this issue](https://github.com/radiovisual/port-pid/issues/8).
     * NOTE: the [port-pid.js](port-pid.js) file is an exact copy of the original, with the PR applied.
2. Terminate any process by PID.
   * We use [terminate](https://www.npmjs.com/package/terminate) for that.


## How to use this?

1. `git clone ...`
2. Open a terminal for the server: `npm run server` or `yarn server`
   ```
   $ node ./serv.js
   server running...
   ```
3. Open another terminal: `npm run kill` or `yarn kill`
   ```
   PIDS found: {"all":[148],"tcp":[148],"udp":[]}
   terminating...
   Done. PIDS found: {"all":[],"tcp":[],"udp":[]}
   ```
4. Check the server terminal again: it should now have exited.


## How does it work?

1. [serv.js](serv.js) starts a server application.
2. [killit.js](killit.js) finds the server by port and kills it.


```js
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
```
