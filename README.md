# PlayPal

PlayPal is a fun browser app where you can play along to songs on the guitar, with the chords and lyrics appearing on the screen in sync with the music.

# Installation and Setup

Clone the project into local. You will need node and npm installed globally on your machine.

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install

## Features

- Animation with notes moving along the guitar fretboard
- Lyrics highlighted in time with the song, in a karaoke-style
- Chord library where you can find diagrams and the option to filter by songs that contain specific chords.

## Project Design

I designed the app in a similar style to the game Guitar Hero, as I wanted it to be fun and interactive.
All data within the app comes from a self-build mySQL db. I created and populated the chords, lyrics and song details data using mySQL seeds.

## Challenges

Getting the timings right for the chords and lyrics on the screen was the biggest challenge I faced in this project. Originally I had used setintervals to change the positioning of the chords as the moved along the fretboard, however I eventually refactored this to instead use animation frames to make the timings more dynamic and easier to adapt for different parts of the song.

## Technologies

React js
React js was used throughout this project. Re-usable components and states were used to keep the code DRY and make aspects repeatable on different pages.

mySQL
I created and populated 6 databases, with two being many-to-many. This allowed me to use API calls to pull the neccessary data needed to populate the song select page and library.

Node js
I created a separate server repo to handle my API calls to the database. This included a join table to ensure that I could associate the correct chord with the song sections.

# Future Features

- I would love to add more songs to the app
- Chord recognition, to incorporate scoring and a leaderboard
