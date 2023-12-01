# Advent of Code 2023

## Using

- Typescript
- Mocha
- Chai

## Commands

```shell
# build and run
tsc && ./dist/index.js

# run tests
npm run test
```
## Day 1

- Starting small and easy
- Instead of reading from a file first, use the data.
- My first function is sum, simple and ofcourse it will be refactored in the future but for now, it is good enough.
```ts
function sum(input: string[]):number {}
```
- I wrote down all test cases first this time. unfortunately there is no `it.todo` in mocha like in jest. it would be great to have such functionality right now yet it is also good enough for me now. 
- There is `it.skip` in mocha, i will go with that one for now.

- when i found the answer, i did re-arranging the files and a small refactoring. good enough for now.
- i also spent a lot of time to write a function to read a file :) idiot...

## Day 2

- I have prepared the initial state of day2. It took little bit time to arrange. It looks like i lost time, but I feel like I have a baseline to work with for the next days. The future will tell us the situation. Now it is ready to implement.