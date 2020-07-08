(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{15:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),l=a(10),s=a(1),o=function(){return c.a.createElement("nav",null,c.a.createElement("button",{onClick:function(){return window.scrollTo(0,0)},className:"logo"},"SP-",c.a.createElement("span",null,"W")),c.a.createElement("ul",{className:"nav-link"},c.a.createElement(s.Link,{activeClass:"active",to:"about",smooth:!0,offset:-50,duration:0},"about"),c.a.createElement(s.Link,{activeClass:"active",to:"projects",smooth:!0,offset:0,duration:0},"projects"),c.a.createElement(s.Link,{activeClass:"active",to:"contact",smooth:!0,offset:0,duration:0},"contact")))},m=function(){return c.a.createElement("header",null,c.a.createElement("div",{id:"header",className:"header-container"},c.a.createElement("h1",null,"SP-",c.a.createElement("span",null,"W")),c.a.createElement("h3",null,"<web developer>"),c.a.createElement(s.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:0,duration:0},c.a.createElement("button",{className:"main-btn"},"projects"))))},u=function(){return c.a.createElement("section",{className:"about"},c.a.createElement("div",{className:"about-title"},c.a.createElement("h1",{className:"logo"},"abou",c.a.createElement("span",null,"t"))),c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-text"},c.a.createElement("h2",null,"hi, my name is stephen and i am a full-stack web developer specialising in front-end development."),c.a.createElement("h2",null,"i have experience working with front-end technologies like;"),c.a.createElement("h2",null,c.a.createElement("span",null,"HTML, CSS, JavaScript, React, jQuery, Bootstrap, RESTful API integration")),c.a.createElement("h2",null,"on the back-end i have worked with;"),c.a.createElement("h2",null,c.a.createElement("span",null,"Node.js, Express.js, mongoDB, Mongoose, EJS, RESTful APIs, Git/GitHub")),c.a.createElement("h2",null,"i have a long history in the visual & creative sectors, having worked as a photographer and have a professional working experience with;"),c.a.createElement("h2",null,c.a.createElement("span",null,"Adobe Creative Suite")))))},p=function(){return c.a.createElement("section",{className:"contact"},c.a.createElement("h1",{className:"logo"},"contac",c.a.createElement("span",null,"t")),c.a.createElement("div",{className:"contact-links"},c.a.createElement("a",{href:"mailto:stevewright54@gmail.com?subject=Contact"},c.a.createElement("i",{className:"fas fa-2x fa-at"})),c.a.createElement("a",{href:"https://github.com/sp-wright"},c.a.createElement("i",{className:"fab fa-2x fa-github"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/sp-wright/"},c.a.createElement("i",{className:"fab fa-2x fa-linkedin-in"}))),c.a.createElement("div",{className:"signature"},"code & design ",c.a.createElement("span",null,"SP-Wright")))},h=function(e){var t=e.info,a=t.name,n=t.description,r=t.img,i=t.tech,l=t.source,s=t.gitHub;return c.a.createElement("div",{onClick:function(t){return e.clickModal(t.target.id)},className:"projects-card",id:e.id},c.a.createElement("div",{className:"projects-card-container"},c.a.createElement("h3",null,a),c.a.createElement("img",{src:r,alt:a}),c.a.createElement("p",{className:"projects-text"},n),c.a.createElement("div",{className:"links"},c.a.createElement("p",{className:"tech-text"},i),c.a.createElement("a",{href:l},c.a.createElement("i",{className:"fas fa-laptop"})),c.a.createElement("a",{href:s},c.a.createElement("i",{className:"fab fa-lg fa-github"})))))},g=[{name:"More Jobs",description:"A responsive front end job productivity list, using colour coding, filters and local storage.",tech:"JavaScript, CSS, HTML",img:"./images/more-jobs.png",source:"https://sp-wright.github.io/more-jobs/",gitHub:"https://github.com/sp-wright/more-jobs"},{name:"Uniting Nations",description:"A responsive website in React displaying country data and statistics with a search bar. Utilising the Rest Countries API and Google Maps API.",img:"./images/uniting-nations.png",tech:"React, JavaScript, CSS, HTML, APIs",source:"https://sp-wright.github.io/uniting-nations-react/",gitHub:"https://github.com/sp-wright/uniting-nations-react"},{name:"Rock, Paper, Scissors",description:"A responsive game of Rock, Paper, Scissors, with a score display. For this project I worked from a style guide from frontendmentor.io.",tech:"JavaScript, CSS, HTML, jQuery",img:"./images/rps.png",source:"https://sp-wright.github.io/Rock-Paper-Scissors/",gitHub:"https://github.com/sp-wright/Rock-Paper-Scissors"},{name:"Count On Me",description:"A responsive adjustable countdown timer with both a text and visual display for remaining time.",img:"./images/count-on-me.png",tech:"JavaScript, CSS, HTML",source:"https://sp-wright.github.io/count-on-me/",gitHub:"https://github.com/sp-wright/count-on-me"},{name:"Stephen Wright Photography",description:"A responsive photography portfolio website using React and State Hooks.",img:"./images/swp.png",tech:"React, JavaScript, CSS, HTML",source:"https://stephen-wright-photography.netlify.app/",gitHub:"https://github.com/sp-wright/swp"}],E=function(e){return c.a.createElement("section",{className:"projects"},c.a.createElement("div",{className:"projects-container"},g.map((function(t,a){return c.a.createElement(h,{info:t,key:a,id:a,clickModal:function(t){return e.clickModal(t)}})}))),c.a.createElement("div",{className:"projects-title"},c.a.createElement("h1",{className:"logo"},"project",c.a.createElement("span",null,"s"))))},d=function(e){var t=g[e.id],a=t.name,n=t.description,r=t.img,i=t.tech,l=t.source,s=t.gitHub;return c.a.createElement("div",{className:"modal"},c.a.createElement("section",{className:"modal-container"},c.a.createElement("div",{onClick:function(){return e.closeModal()},className:"cross"},c.a.createElement("i",{className:"close fas fa-3x fa-times"})),c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement("span",null,a)," ")),c.a.createElement("div",null,c.a.createElement("img",{src:r,alt:a})),c.a.createElement("div",null,c.a.createElement("p",null,n)),c.a.createElement("div",null,c.a.createElement("h4",{className:"tech-text"},i),c.a.createElement("a",{href:l},c.a.createElement("i",{className:"fas fa-2x fa-laptop"})),c.a.createElement("a",{href:s},c.a.createElement("i",{className:"fab fa-2x fa-github"})))))},f=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(0),s=Object(l.a)(i,2),h=s[0],g=s[1];return c.a.createElement("div",null,!a&&c.a.createElement(o,null),!a&&c.a.createElement(m,null),!a&&c.a.createElement(u,null),!a&&c.a.createElement(E,{clickModal:function(e){return function(e){r(!0),g(e)}(e)}}),!a&&c.a.createElement(p,null),a&&c.a.createElement(d,{closeModal:function(){return r(!1)},id:h}))};i.a.render(c.a.createElement(f,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c3c2deaa.chunk.js.map