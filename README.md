Here to reproduce safe_app_nodjs [issue #250](https://github.com/maidsafe/safe_app_nodejs/issues/250)?
- `yarn`
- `yarn test`
- Observe the log in `index.js` fail to print
- Place `setTimeout(() => {}, 10)` immediately after line 399 in `node_modules/@maidsafe/safe-node-app/src/api/auth.js`. 
- `yarn test`
- Observe the log in `index.js` now printing.
