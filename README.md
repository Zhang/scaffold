## Instructions to start project

Ensure that you have Node 8 or above installed on your machine

`npm install`

`npm run compile:all`

`npm start`

## Challenges

My current company is a data company and all the applications and UIs I have built have been centered around data. This project was particularly challenging because working with image files and finding a way to save them locally as well as mapping their names and ids to a database was all new to me. I was learning how to do this for the first time and I ran into some roadblocks that I didn't want to spend much time on, so I moved on.

The next challenge was in building highly dynamic UIs. This was also a new challenge for me since most of the UIs I have built at my current company revolve around entering data and displaying data effectively. This was my first time working with drag and drop elements and preserving their location on the page.

The amount and variety of tasks in this assessment were certainly overwhelming! It seemed fairly straightforward at first, but as I started to dig into each part of the assessment, more and more design flaws with my initial plan started to arise. I chose to take a shortcut and not save my data to the DB (there just was not enough time to set that up and I preferred to focus on my client side strengths), but this made it very difficult to verify unique IDs and select/add/remove elements.

Since drag and drop was new to me, I chose to take a shortcut and use an NPM package that abstracted this away. This was my final nail in the coffin, as the way this package worked was to use `transform:translate(x, y)` instead of setting the `top` and `left` positions which is how I was planning on preserving the position both on the client and later in the database.

## What I'm proud of

There were a number of new challenges I had never faced in building this app that I took on and I was proud of how I managed to find quick solutions and at least get the UI to a half working state.

I felt I found a good balance between throwing unreadable code on the page for functionality and being mindful about best practices to enable readable code in the future. My main example of this is my `src/scss/components.scss`.

## If I could do this assessment all over again

I would start by going back in time and learning how to save image files and building drag and drop. I would then start this assignment again, building my database and tables and set up endpoints in my server to read and update state. I would also take more time to think through how I wanted to generate the dynamic input boxes. I made it far too complex the first time with making the editable form movable, and I wasted a ton of time trying to debug and refactor.
