import moreJobsImg from './images/more-jobs.png';
import unitingNationsImg from './images/uniting-nations.png';
import rpsImg from './images/rps.png';
import countOnMeImg from './images/count-on-me.png';
import swpImg from './images/swp.png';
import buzzScraperImg from './images/buzz-scraper.png';
import tuesdayDotComImg from './images/tuesday.com.png';

const myProjects = [
  {
    name: 'tuesday.com',
    description: 'A responsive Full-stack application for Developer teams to work collaboratively on bug and issue tracking. Integrating CRUD functionality and RESTful API design.',
    tech: 'React, Node.js, mongoDB, Heroku, JSX, CSS, RESTful APIs',
    img: tuesdayDotComImg,
    source: 'https://sp-wright.github.io/tuesdaydotcom/',
    gitHub: 'https://github.com/sp-wright/tuesdaydotcom',
  },
  {
    name: 'Uniting Nations',
    description: 'A responsive website in React displaying country data and statistics with a search bar. Utilising the Rest Countries API and Google Maps API.',
    img: unitingNationsImg,
    tech: 'React, JavaScript, CSS, HTML, APIs',
    source: 'https://sp-wright.github.io/uniting-nations-react/',
    gitHub: 'https://github.com/sp-wright/uniting-nations-react',
  },
  {
    name: 'Stephen Wright Photography',
    description: 'A responsive photography portfolio website using React and State Hooks.',
    img: swpImg,
    tech: 'React, JavaScript, CSS, HTML',
    source: 'https://stephen-wright-photography.netlify.app/',
    gitHub: 'https://github.com/sp-wright/swp',
  },
  {
    name: 'Count On Me',
    description: 'A responsive adjustable countdown timer with both a text and visual display for remaining time.',
    img: countOnMeImg,
    tech: 'JavaScript, CSS, HTML',
    source: 'https://sp-wright.github.io/count-on-me/',
    gitHub: 'https://github.com/sp-wright/count-on-me',
  },
  {
    name: 'BuzzScraper',
    description: 'A responsive Web Scraping App using Node.js, Puppeteer & EJS to display the top 10 trending quizzes on BuzzFeed.com',
    img: buzzScraperImg,
    tech: 'Node.js, EJS, HTML, CSS, Puppeteer, Heroku',
    source: 'https://glacial-plateau-32836.herokuapp.com/',
    gitHub: 'https://github.com/sp-wright/buzzscraper',
  },
  {
    name: 'Rock, Paper, Scissors',
    description: 'A responsive game of Rock, Paper, Scissors, with a score display. For this project I worked from a style guide from frontendmentor.io.',
    img: rpsImg,
    tech: 'JavaScript, CSS, HTML, jQuery',
    source: 'https://sp-wright.github.io/Rock-Paper-Scissors/',
    gitHub: 'https://github.com/sp-wright/Rock-Paper-Scissors',
  },
];

export default myProjects;
