This package contains L1BitcoinDepositor and L2BitcoinDepositor contracts.

== Build, test and deploy

To build and deploy these contracts, please follow the instructions presented
below.

=== Prerequisites

Please make sure you have the following prerequisites installed on your machine:

- https://nodejs.org[Node.js] >=18
- https://yarnpkg.com[Yarn] >=1.22.10

=== Build contracts

To build the smart contracts, install node packages first:
```
yarn install
```
Once packages are installed, you can build the smart contracts using:
```
yarn build
```
Compiled contracts will land in the `build` directory.

*NOTE:* The package contains an indirect dependency to which downloads one of its sub-dependencies
via unathenticated `git://` protocol. That protocol is no longer supported by
GitHub. This means that in certain situations installation of the package or
update of its dependencies using Yarn may result in `The unauthenticated git
protocol on port 9418 is no longer supported` error. +
As a workaround, we advise changing Git configuration to use `https://` protocol
instead of `git://` by executing:
```
git config --global url."https://".insteadOf git://
```

=== Deploy contracts

To deploy all contracts on the given network, please run:
```
yarn deploy --network <network>
```
