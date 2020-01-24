# news-scrapper
A project i created to scrapper news item off CTGN on the Wuhan virus 

# Libraries used
* cheerio - Fast, flexible & lean implementation of core jQuery designed specifically for the server.
For transversing between the HTML element to extract the required text
* axios- Promise based HTTP client for the browser and node.js
For http calls to the CTGN website so that i can use cheerio to manipulate it
* nodejs - well you know what it does
Because i am familiar and want to practice my nodejs skills

# Installation
```
npm install
```

# Start Scrapping
```
node scrapper.js
```

This will generate a "ctgn-news.json" file which contains the scrapper CTGN news items


# Credits
Implementation is based off the guide https://pusher.com/tutorials/web-scraper-node with edits
