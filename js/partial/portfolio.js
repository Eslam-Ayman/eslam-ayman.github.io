// document.getElementById("myList").appendChild(node);
var portfolio = $("#portfolio .portfolio-items .grid");

var portfolios = [
    {
        tab: 'back-end',
        title: 'Malhoza Project',
        date: 'Apr 2018',
        tags: `<li><a href="#">Laravel</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">ORM</a></li>
                <li><a href="#">RESTful API</a></li>`,
        preview: '',
        readMore: 'https://gist.github.com/Eslam-Ayman/2310f685726a932e905095044ed1292e',
        description: `Malhoza project help students and employee to create sections and write notes to remind themselves easily , also they can share their notes with other users . this project is helping user to improve his note with some illustrates and images to help him remember his note quickly .`
    },
    {
        tab: 'machine-learning',
        title: 'Sentiment Analysis',
        date: 'May 2018',
        tags: `<li><a href="#">Python</a></li>
                <li><a href="#">MultinomialNB</a></li>
                <li><a href="#">SVM</a></li>
                <li><a href="#">Logistic Regression</a></li>
                <li><a href="#">FCIH</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/NLP',
        description: `This Sentiment Analysis project is about knowing if the review of the movie is positive or negative review , i used more than one model during the process to know which model is the best.`
    },
    {
        tab: 'full-stack',
        title: 'Tasks Project',
        date: 'May 2018',
        tags: `<li><a href="#">Laravel</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">ORM</a></li>
                <li><a href="#">mySQL</a></li>
                <li><a href="#">FCIH</a></li>`,
        preview: '<a target="_blank" href="http://performer.azurewebsites.net/">Live PreView</a>',
        readMore: 'http://performer.azurewebsites.net',
        description: `Tasks project is helping Team Leaders , Team Members and Managers to create and manage all their projects or their tasks very easy with deadlines and helping team leader to assign tasks for members easily .`
    },
    {
        tab: 'full-stack',
        title: 'Restaurant Menu',
        date: 'Apr 2018',
        tags: `<li><a href="#">Flask</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">ORM</a></li>
                <li><a href="#">sqlalchemy</a></li>
                <li><a href="#">FCIH</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/restaurant-menu',
        description: `This project one of my Google Nanodegree scholarship projects on ( Udacity )( Full Stack Web Developer Nanodegree Program ) Restaurant app to manage all restaurant menus and you can manipulate your authorized restaurants and your menus easily. also, you can login with your google account.`
    },
    {
        tab: 'back-end',
        title: 'Logs Analysis (DB)',
        date: 'Mar 2018',
        tags: `<li><a href="#">Python 3</a></li>
                <li><a href="#">PostgreSQL</a></li>
                <li><a href="#">Google</a></li>
                <li><a href="#">Udacity</a></li>
                <li><a href="#">NTL</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/Logs-Analysis-DB',
        description: `This project one of my Google Nanodegree scholarship projects on ( Udacity )
                                                    ( Full Stack Web Developer Nanodegree Program ) <br>
                                                    This project implementing some Complex Queries on Database called "news".<br>
                                                    it have 3 complex query which are answering on those 3 next questions<br>
                                                    - what are most popular three articles of all time?<br>
                                                    - who are the most popular article authors of all times ?<br>
                                                    - on which days did more than 1% of requests lead to errors ?`
    },
    {
        tab: 'front-end',
        title: 'Memory Game',
        date: 'Mar 2018',
        tags: `<li><a href="#">JavaScript</a></li>
                <li><a href="#">Jquery</a></li>
                <li><a href="#">Bootstrap</a></li>
                <li><a href="#">Google</a></li>
                <li><a href="#">Udacity</a></li>`,
        preview: '<a target="_blank" href="https://eslam-ayman.github.io/Memory-Game/">Live PreView</a>',
        readMore: 'https://eslam-ayman.github.io/Memory-Game/',
        description: `This Game contains 16 cards and there are 8 couples each one with the same symbol so your job is to selecte each couple with the same symbol and you must to know that at each couple selcted the number of moves will be incremented and if for after first 15 wrong moves you will lose one of the stars and after 5 more wrong moves you will also lose the second one . and you must selecte all couples right to win .`
    },
    {
        tab: 'back-end',
        title: 'Mini-CRM',
        date: 'Mar 2018',
        tags: `<li><a href="#">Laravel</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">Eloquent</a></li>
                <li><a href="#">MVC</a></li>
                <li><a href="#">OOP</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/mini-crm',
        description: `Mini-CRM . Basically, project to manage companies and their employees. helping managers to manipulate their companies and manipulate their Employees .`
    },
    {
        tab: 'back-end',
        title: 'Competition Bot',
        date: 'Feb 2017',
        tags: `<li><a href="#">PHP</a></li>
                <li><a href="#">MySQL</a></li>
                <li><a href="#">Telegram API</a></li>
                <li><a href="#">Freelance</a></li>
                <li><a href="#">Client</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/competition-bot',
        description: `Competition Bot is a Telegram Chat Bot which is self asking bot based on your answer . This Project has been ordered by customer through Khamsat Freelancer Website.`
    },
    {
        tab: 'back-end',
        title: 'Fatoa Bot',
        date: 'Feb 2017',
        tags: `<li><a href="#">Python</a></li>
                <li><a href="#">mySQL</a></li>
                <li><a href="#">Telegram API</a></li>
                <li><a href="#">Freelance</a></li>
                <li><a href="#">Client</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/fatoa-bot',
        description: `Fatoa Bot is a Telegram Chat Bot which is self Response bot based on User answers . This Project has been ordered by customer through Khamsat Freelancer Website.`
    },
    {
        tab: 'front-end',
        title: 'Alqaseem Gypsum',
        date: 'Jan 2017',
        tags: `<li><a href="#">JavaScript</a></li>
                <li><a href="#">Jquery</a></li>
                <li><a href="#">Bootstrap</a></li>
                <li><a href="#">Freelance</a></li>
                <li><a href="#">Client</a></li>`,
        preview: '<a target="_blank" href="https://eslam-ayman.github.io/alqaseem-gypsum/">Live PreView</a>',
        readMore: 'https://eslam-ayman.github.io/alqaseem-gypsum/',
        description: `Alqassem is a Saudian Company for producing Gypsum Board. Through Khamsat Freelancer Website , One of Alqassem Employees Asked me to build this site for them.`
    },
    {
        tab: 'front-end',
        title: 'Avis',
        date: 'Jan 2017',
        tags: `<li><a href="#">JavaScript</a></li>
                <li><a href="#">Jquery</a></li>
                <li><a href="#">Bootstrap</a></li>
                <li><a href="#">Freelance</a></li>
                <li><a href="#">Client</a></li>`,
        preview: '<a target="_blank" href="https://eslam-ayman.github.io/avis/">Live PreView</a>',
        readMore: 'https://eslam-ayman.github.io/avis/',
        description: `Avis is an American cars rental company. i have build this site for them which is ordered by customer through freelancer website .`
    },
    {
        tab: 'front-end',
        title: 'LandKit',
        date: 'Dec 2016',
        tags: `<li><a href="#">SASS</a></li>
                <li><a href="#">JS</a></li>
                <li><a href="#">Jquery</a></li>
                <li><a href="#">Bootstrap</a></li>
                <li><a href="#">HTML</a></li>`,
        preview: '<a target="_blank" href="https://eslam-ayman.github.io/land-kit/">Live PreView</a>',
        readMore: 'https://eslam-ayman.github.io/land-kit/',
        description: `Simple Landing Page for personal companies information With SASS`
    },
    {
        tab: 'back-end',
        title: 'Library App',
        date: 'Dec 2016',
        tags: `<li><a href="#">JAVA</a></li>
                <li><a href="#">JAVAFX</a></li>
                <li><a href="#">SWE-2</a></li>
                <li><a href="#">FCIH</a></li>`,
        preview: '',
        readMore: 'https://github.com/Eslam-Ayman/swe2-library',
        description: `Library app is a library desktop system which is managing books renting , users Membership , book Inventory and Billing and invoices.`
    },
    {
        tab: 'front-end',
        title: 'Business',
        date: 'Nov 2016',
        tags: `<li><a href="#">JS </a></li>
                <li><a href="#">Jquery</a></li>
                <li><a href="#">Bootstrap</a></li>
                <li><a href="#">HTML</a></li>`,
        preview: '<a target="_blank" href="https://eslam-ayman.github.io/business/">Live PreView</a>',
        readMore: 'https://eslam-ayman.github.io/business/',
        description: `Simple site For Definition Company`
    },
]

portfolios.forEach(function(item, index){

    portfolio.append(`
        <div class="col-lg-4 col-md-6 col-sm-6 grid-item ${item.tab}">
            <div>
                <article class="normal-post">
                    <figure class="entry-header">
                        <!-- <div class="portfolio-item">
                            <div class="port-data">
                                <div class="port-data-front-card"><i class="fa fa-code"></i></div>
                                <div class="port-data-back-card">
                                    <h4 class="project-name">Malhoza Project</h4>
                                    <a href="https://gist.github.com/Eslam-Ayman/2310f685726a932e905095044ed1292e" target="_blank" class="port-show-info fa fa-github fa-2x"></a>
                                    <div class="project-category">
                                        <h5>Back End <i class="fa fa-code pull-right"></i></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="port-image">
                                <img src="images/work/restful-api-image.png" class="img-responsive" alt="">
                            </div>
                        </div> -->
                        <!-- <div class="post-image">
                            <img src="images/blog/01.jpg" class="img-responsive" alt="">
                        </div>
                        <ul class="post-category list-unstyled">
                            <li><a href="#">creative</a></li>
                            <li><a href="#">Front end</a></li>
                            <li><a href="#">web design</a></li>
                        </ul> -->
                        <!-- <ul class="post-share list-unstyled">
                            <li class="open-post-share">
                                <span><i class="fa fa-share-alt"></i></span>
                                <ul class="post-share-links list-unstyled">
                                    <li>
                                        <a href="#" class="facebook-bg-hover">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="twitter-bg-hover">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="google-plus-bg-hover">
                                            <i class="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul> -->
                    </figure>
                    <div class="entry-content">
                        <div class="entry-post-info">
                            <h4><a target="_blank" href="${item.readMore}">${item.title}</a></h4>
                            <p>
                                ${item.date}
                            </p>
                        </div>
                        <div class="entry-expert">
                            <p>
                                ${item.description}
                            </p>
                            <div class="post-readMore">
                                <a target="_blank" href="${item.readMore}" class="pull-left read-more-link">Read More <i class="fa fa-long-arrow-right"></i></a>
                                <!-- <span class="pull-right"><a href="#">1 COMMENT</a></span> -->
                                
                                <span class="pull-right">${item.preview}</span>
                                
                            </div>
                        </div>
                    </div>
                    <div class="entry-footer">
                        <ul class="entry-tags list-unstyled list-inline">
                            ${item.tags}
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    `)

})
