const quotes = [
    {
        quote:"성공한 사람보다는 가치 있는 사람이 되라.",
        author:"Albert Einstein",
    },
    {
        quote:"웃음은 강장제이고, 안정제이며, 진통제이다.",
        author:"Charlie Chaplin",
    },
    {
        quote:"이 삶에서 우리가 자만심이 없다면 살아야 할 충분한 이유가 없다.",
        author:"Lev Tolstoy",
    },
    {
        quote:"미래는 현재 우리가 무엇을 하는가에 달려 있다.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"실천이 말보다 낫다.",
        author:"Benjamin Franklin",
    },
    {
        quote:"산다는것 그것은 치열한 전투이다.",
        author:"Romain Rolland",
    },
    {
        quote:"신은 용기있는자를 결코 버리지 않는다.",
        author:"Helen Adams Keller",
    },
    {
        quote:"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
        author:"james dean",
    },
    {
        quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author:"Albert Einstein",
    },
    {
        quote:"고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author:"Ludwig van Beethoven",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;