# Summary
I was currious how different node environments compare in performance on an Apple M1, here is a quick and dirtly little test.

# Setup & Running
* `yarn install`
* `node bench.js`

# Example
This is an example comparison

|                   |          |          |          |
|-------------------|----------|----------|----------|
|                   |          |          | Docker   |
| Architecture      | arm64    | arm64    | aarch64  |
| Node Version      | v16.16.0 | V14.17.0 | V14.19.3 |
| Node Architecture | arm64    | x64      | arm64    |
| Result            | 4.07s    | 6.97s    | 28s      |

<img width="1457" alt="Screen Shot 2022-07-17 at 12 51 10 AM" src="https://user-images.githubusercontent.com/220755/202612020-086fe901-88d6-4e44-ad13-82440e418fa3.png">
