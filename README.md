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

# run folder
npm run test-specific  src/day5/part1/*.spec.ts
```
## Day 1

### Part 1

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

### Part 2

- I have prepared the initial state of day2. It took little bit time to arrange. It looks like i lost time, but I feel like I have a baseline to work with for the next days. The future will tell us the situation. Now it is ready to implement.
- It was quite easy to implement the solution, because I hade to change only one function at the end.
- I did deadly action, I re-wrote the history. Do not try this at home...

Touch Time: 1h37m

## Day 2

### Part 1

- I read the story of this part and i realised that there are 2 sections of this part.
  - first part is parsing the data
  - second part is evaluating the data
- I thing parsing will be challanging for me because i have decided not to use regex so lets see what will happen. Maybe i will change my mind in an hour :)
- I have decided to start with the evaluation part. 
- I will structure the data with using interfaces and then make the evaluation. afterwards parsing part can create this data structure for me.
- lets go...
- IMPORTANT: i have noticed that, creating a template with bunch of codes creating huge distraction, do not do that :) i create a commit for clean up
- I also skipped some small steps because I know it will go that direction so little bit design and clever things are good as long as they are not so big. what is big? ahahaha, it is up to you, b. :)
- Damn, with regex it is so easy. i had no time so i switch to regex in some point.
- shit, i need to read the text much more carefully.i miss understood the condition. yet if you have a small kid, and be distracte 12 times in 1 hour, i think it is ok, and also she is the most important thing ever.
- writing wrong test, i mean, wrong expected value. ofcourse i will spend hours for this :(
- always work with clear mind.

### Part 2

- After refactoring part 1, this one is quite easy to handle.
- Again, i would like to point out one important thing. I need clear 1 hour to concentrate, context switching is not good :)
- I could write code more smaller yet i knew exactly, that's why i wrote directly. No idea it is a good thing or not, not to stick to smallest steps

## Day 3

### Part 1

- After i read the instructions, i have build my design template with contains what i need to do to accomplish the task
- I am usign regex again, because it is quite easy. but dont forget tp put 'g' global at the end to get all results :)
- ooookkkeeeyy, where start. 
  - After i build my solution, all tests were green and with test data it is totatly ok, until i run the code with puzzle data. :)))
  - of course it did not work, otherwise it would be easy, right? :)
  - i have created an another file to see all numbers if there are part numbers or not.
  - then i compared the un-part numbers to with the puzzle data. 
  - Voila! I found my first obstacle. single digit number like 3, and there is another number before this like 937. 
  - ofcourse first i used indexOf, thats why istead of finding the 3, logic found 937 which leads me the wrong solution.
  - I wrote the test, and implement the solution. Voila! Tests are green, yet final answer is WRONG! :)
  - I kept searching another problematic number. Voila! I found another one. same number in the same line but one of them is part number, but the other one is not.
  - kind of similiar issue but leading different approach.
  - Finally i found the final answer and the job is done done. 2 times :)

### Part 2

- ofcourse when i read the part, i realised that my implementation is shit. Yes, do you believe that! I do, actually :)
- then I re-design my code, which is shit. because first implementation, maybe i could use and do some refactoring but i want to see something nice at the end.
- so it is decided, i will go for new design. Next time, maybe i can fo for refactoring. it would be nice also. there are a lot of sections to try, so let's coding...
- Implementing the new design was fun. I made relatively bigger steps yet it is acceptable.
- After implementing the solution, i found couple of bugs and i handle them with regression tests. Unfortunately i did not mark them in commit messages but next time i will do that.
- Solving second part with new design took 2 min, literally 2 min. :)


## Day 4

### Part 1

- It is relatively easy. 
- I made a design first and considered to go step by step but afterwards, I wanted to make a bigger step.
- I used old function(s) to make my life easy.
- It took nearly 30 min (touch time), ofcourse lead time is little bit longer with the distractions :)


### Part 2

- it was a disaster. what an ego. 
- I though first i do not need design so i can implement bigger.
- Ofcourse failed, over and over and over again.
- then i rolled back and start small. I found the answer with test data
- then with puzzle data, it took hours to find something. I did not wait, i just left the computer to calculate.
- I though it might take 1-2 min and over :)
- Then i redesigned it and simplified the approach.
- Voila! Answer.
- Lots of unnecessary code and shame :)


## Day 5

### Part 1

- The topic was quite easy but i had to read the text couple of times to understand
- During the implementation, i mixed sorce and destination yet fortunatelly i corrected in early stages. 
- i found the answer quickly.

### Part 2

- The implementation was quite straigt forward.
- when i finish the first try, i put more items than the array can hold.
- So i changed my design to read data on the fly with using `yield`.
- In order to get the answer from the solution took almost 6 minutes (i did not calculated programatically but lets say almost)
- this will be a great refactoring in terms of performance.


## Day 6

### Part 1

- I read the text and made a design.
- In the train, i though i can try just implementation with test. (experimental)
- Solution is there. 5 min implemetation. ögggh, discusting...
- lets go to part 2 to see what will happen.

### Part 2

- no test and worked again. I hated that, yet it was quick.
- it took maybe 3-4 min to implement.


## Day 7

### Part 1

- The new implementation technique is to write the code until I need a test
- So with this new approach, I will merge the power of these two approaches, I hope :)
- So far so good. I have implemented very straight forward until I encounter a problem.
- I lost my focus and stopped playing with it
- Recently, my friends mentioned about it again in Signal, then i got my motivation back.
- I do not need motivation in life, I got dicipline yet this time motivation wins :)
- no test, couple of implementation tries :)

### Part 2

- Continue without tests.
- So far so good. it will be great refactoring :)
- this time i try to make more commits while writing code without tests.
- Ofcourse i just changed a little.
- Next time i will create more commits like I am following TDD.
- implementation time max 20 min :)


## Day 8

### Part 1

- Again i have started with tests. 
- This time i wanted to force not to write tests.
- In some point it worked.
- Yet, i will find a way to merge these concepts in better way.

### Part 2

- I have implemented the the solution but it took so long to calculate.
- I have waited for just a curiosity how long it might take.
- It took forever.
- So actually when i see that it is taking more than 10 sec, then it is something wrong.
- Last night in my dream, i implemented the solution and this morning i tried.
- damn, in 1 sec, it resolved. 
- The idea behind the solution is, to find every node's min try count to find the answer.
- Then i applied the math concept of 'least common multiple', Voila! the answer.
- Unfortunately i do not have much time to focus on the other days
- Lots of distractions and duties, yet no problem.
- I love you guys so much, Leni and Kathi.


## Day 9

### Part 1

- I have started with small test to implement main logic. 
- The test was quite big but i wanted to see if this size is ok or not. 
- It was quite good.
- Easy to implement and finish.
- At the end i realised that i missed the negative numbers yet it was easy to solve.

