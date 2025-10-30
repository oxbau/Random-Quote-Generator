const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    quoteText.textContent = `"${text}"`;
    quoteAuthor.textContent = `- ${author}`;
}

newQuoteBtn.addEventListener('click', displayQuote);

// Display a quote on initial load
displayQuote();
