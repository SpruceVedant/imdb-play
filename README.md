# Imdb-play CLI

A simple and fast command-line tool that lets you play a movie or TV show that is available in Imdb from your terminal directly in your browser and stream it.


---

## Features

- Play movies and TV shows from the terminal
- Fetch matching IMDb title suggestions
- Select the correct title from a list
- Open the actual IMDb title page directly in the browser

---

## Demo Flow

```bash
imdb-play
```

Then enter a movie or show name:

```bash
? Enter movie or show name: Interstellar
```

Select the correct result:

```bash
? Select the correct title:
❯ Interstellar (2014)
  Interstellar: Nolan's Odyssey (2014)
```

The tool opens:

```bash
https://www.imdb.com/title/tt0816692/
```

---

## Tech Stack

- Node.js
- JavaScript
- @inquirer/prompts
- open
- IMDb Suggestions endpoint

---

## Installation

Clone the project:

```bash
git clone https://github.com/SpruceVedant/imdb-play.git
cd imdb-play
```

Install dependencies:

```bash
npm install
```

Link the CLI locally:

```bash
npm link
```

Now you can run the CLI from anywhere:

```bash
imdb-play
```