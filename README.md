Cross-platform example of how to use Node.js to:

1. Find a PID by port.
   * We use [port-pid](https://github.com/radiovisual/port-pid/) for that.
     * We use a fixed version of [port-pid](https://github.com/radiovisual/port-pid/), which applies a fix for [this issue](https://github.com/radiovisual/port-pid/issues/8).
     * NOTE: the [port-pid.js](port-pid.js) file is an exact copy of the original, with the PR applied.
2. Terminate any process by PID.
   * We use [terminate](https://www.npmjs.com/package/terminate) for that.


## How to use this?

1. `git clone ...`
2. `npm run r` or `yarn r`


## How does it work?

1. [serv.js](serv.js) starts a server application.
2. [killit.js](killit.js) finds the server by port and kills it.
