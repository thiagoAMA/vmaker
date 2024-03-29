const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

function robot(content) {
    fetchContentFromWikipedia(content)
    //sanitizeContent(content)
    //breakContentIntoSentences(content)

    async function fetchContentFromWikipedia(content) {
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo("web/WikipediaParser/0.1.2?timeout=3000")
        const wikipediaResponde = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponde.get()

        console.log(wikipediaContent)


    }
}

module.exports = robot
