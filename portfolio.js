//Portfolio Data that we will pass to handlebars
const portfolioData = {
    projects: [
        {
            title: "Bee1World - Freelance Project",
            website: "Bee1World",
            websiteURL: "http://bee1world.org",
            overviewText: "none"
        }, 
        {
            title: "Emaily - Project",
            website: "Emaily",
            websiteURL: "https://cryptic-journey-27105.herokuapp.com",
            overviewLink: "https://github.com/herrerake/emailyApp",
            overviewText: "GitHub"
        },
        {
            title: "AVIXA - AVIXA",
            website: "AVIXA",
            websiteURL: "https://www.avixa.org",
            overviewText: 'none'
        },
        {
            title: "Veurinks RV - Level5 Advertising",
            website: "Veurinks RV",
            websiteURL: "https://www.veurinksrv.com",
            overviewText: 'none'
        },
        {
            title: "React Tube - Personal Project",
            website: "GitHub Repo",
            websiteURL: "https://github.com/herrerake/youreacttube",
            overviewText: "GitHub"
        },
        {
            title: "Crystal Collector Game - Personal Project",
            website: "Heroku Deployment",
            websiteURL: "https://sleepy-depths-82150.herokuapp.com/",
            overviewLink: "https://github.com/herrerake/week-4-game-CrystalsCollector",
            overviewText: "GitHub"
        },
        {
            title: "Star Wars Game - Personal Project",
            website: "Heroku Deployment",
            websiteURL: "https://radiant-bayou-23324.herokuapp.com/",
            overviewLink: "https://github.com/herrerake/star-wars-rpg",
            overviewText: "GitHub"
        },
        {
            title: "Trivia Game - Personal Project",
            website: "None",
            overviewLink: "https://github.com/herrerake/advanced-trivia-game",
            overviewText: "GitHub"
        }
    ],
    techSkills: ["HTML", "CSS", "JavaScript", "jQuery",
        "Bootstrap", "HandleBars", "MVC Frameworks", "C#", "ASP.NET",
        "AJAX", "Node.js", "Express.js", "React.js", "Redux",
        "WordPress", "Sitefinity", "Git", "GitHub", "Shopify", "Liquid",
        "Heroku", "REST API", "MongoDb", "Mongoose", "PostgreSQL", "AWS"
    ],
    workExperience: ["AVIXA", "Level 10 Marketing / Level 5",
        "George Washington University Coding Bootcamp",
        "Orpheus Incorporated", "General Assembly"
    ],
    education: ["Udemy: Node with React - Fullstack Web Development", "Udemy: The Complete Developers Guide to MongoDb",
        "General Assembly: Full Stack Web Development", "Rich Web Experience 2018", "Virginia Commonwealth University",
        "University of the West Indies - Cave Hill"
    ]
};

//HTML5| CSS3| JavaScript ES6| jQuery| REST API| AJAX| Bootstrap| Git & Github| MVC Frameworks| C#| .Net Framework| Git & Github| WordPress| Sitefinity| Shopify | Liquid
//Portfolio
(function () {
    let theScriptHTML = document.getElementById('portfolio-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('portfolio').innerHTML = compiledData;
}());
//Technical Skills
(function () {
    let theScriptHTML = document.getElementById('resume-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('resume').innerHTML = compiledData;
}());
//Work Experience
(function () {
    let theScriptHTML = document.getElementById('workExperience-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('workExperience').innerHTML = compiledData;
}());
//Education
(function () {
    let theScriptHtml = document.getElementById('education-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHtml);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('education').innerHTML = compiledData;
}());