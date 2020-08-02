# Fish

## Contributing

### Install Project Dependencies

For development, you will need `node.js` and `npm` as its package manager.

You can use [nvm](https://github.com/nvm-sh/nvm) to install Node.

If installed correctly, you should be able to run the following:

```
$ nvm use 12
$ node --version
v12.18.3
$ npm --version
v6.14.6
```

Then, clone the repo and install all packages needed for the project:

```
git clone https://github.com/bliu23/fish.git
cd fish
npm install
```

### Local Development

```
npm run dev
```

This script will compile and run the project on port 3001, and listen for any new changes.

To run tests, simply run:

```
npm test
```

### Simple build for production

```
npm run build
```
