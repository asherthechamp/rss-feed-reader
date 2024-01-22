const express = require("express")
const RssParser = require('rss-parser')
const app = express()

async function parseRss(url) {
    const parser = new RssParser()
    const feed = await parser.parseURL(url)
    return feed
}

const feedUrl = "https://sabe.io/rss.xml";
// const feedUrl = "https://www.bbc.co.uk/news/10628494";
parseRss(feedUrl).then(myfeed => {

    console.log(myfeed.title)
    
    myfeed.items.forEach(item => {
        console.log(item.title)
        console.log(item.link)
        console.log(item.contentSnippet)
    })
})

app.listen(5000, () => console.log("Server running on port 5000 ..."))