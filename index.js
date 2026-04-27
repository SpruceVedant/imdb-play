#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import open from "open";

const searchTerm = await input({
  message: "Enter movie or show name:",
  validate(value) {
    if (!value.trim()) {
      return "Movie/show name cannot be empty";
    }
    return true;
  }
});

const cleanedSearch = searchTerm
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "_")
  .replace(/^_+|_+$/g, "");

const firstLetter = cleanedSearch[0];

const suggestionUrl = `https://v3.sg.media-imdb.com/suggestion/${firstLetter}/${cleanedSearch}.json`;

try {
  const response = await fetch(suggestionUrl);
  const data = await response.json();

  if (!data.d || data.d.length === 0) {
    console.log("No movie/show found.");
    process.exit(1);
  }

  const firstResult = data.d.find(item => item.id && item.id.startsWith("tt"));

  if (!firstResult) {
    console.log("No valid IMDb title found.");
    process.exit(1);
  }

  const titleUrl = `https://www.imdb.com/title/${firstResult.id}/`;
  const newUrl = titleUrl.replace("imdb.com", "playimdb.com");

console.log(newUrl);


  await open(newUrl);

  console.log(`Opening: ${firstResult.l}`);
  console.log(titleUrl);
} catch (error) {
  console.log("Something went wrong:", error.message);
}