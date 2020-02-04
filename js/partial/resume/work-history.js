var workHistory = $("#resume #work-history");

var workHistories = [
	{
		date: 'Mar 2019 - Present',
		h3: 'Pitechnologies – Sheikh Zayed City',
		p: 'Back-End developer',
		details: `•	Implement & Develop high quality API (web services) that meets client requirements along with test<br>
	              •	Support in front-end work (HBRC Project)<br>
	              •	Collaborate with other team members and stakeholders<br>
	              •	Review team members code along with supporting and guiding fresh team members<br>
	              •	Design any UML diagrams (EERD, Class Diagram)<br>
	              •	Built System to Housing and Building National Research Center (HBRC)<br>
	              •	Built Ticketing System to Armed Forces Medical Services in KSA<br>`
	},

	{
		date: 'Jan 2019 - May 2019',
		h3: 'Q8Intouch in Kuwait ( Remotely )',
		p: 'Full Stack Developer',
		details: `- was building dashboard to help user to manage his mobile application<br>
	                - Adding New Features in legacy System based on client requirements<br>
	                - I was integrated back-end and front-end using API<br>
	                - I was Maintain web-service ( API ) to make it more easire for mobile developer to use<br>`
	},

	{
		date: 'Sep 2018 - Jan 2019',
		h3: 'PropertzCRM ( I-Vestment )',
		p: 'Full Stack Developer',
		details: `- Worked on over all 8 Projects<br>
                5 of them are CRM with vue.js & Larvel PHP<br>
                * Developed theaddress-eg.com<br>
                * Build dojarealestate.com<br>
                * Build beitnetwork.com<br>
                * Developed newavenue-egypt.com<br>
                * Developed Avon CRM<br><br>

                2 of them are CMS<br>
                * Build http://raiemisr.com With ( WordPress )<br>
                * Build GCG With ( Laravel )<br><br>

                and Make many Upgrades for - Etisalat Sports Website (http://rakam1.world) .<br><br>

                - Also I was helping to train new interns to start their careers in this Company .`
	},

	{
		date: 'Sep 2016 - Sep 2018',
		h3: 'Khamsat',
		p: 'Web Developer',
		details: ` - Get a Great experience during dealing and contract with customers .<br>
                    - Analyze Customers systems and Construct Software Requirements Specification ( SRS ) Document.<br>
                    - Design and Build All Unified Modeling Language ( UML ) Diagrams .<br>
                    - Design and develop websites for clients .<br>
                    - Build front-end of clients websites .<br>
                    - Build and develop back-end of Client's websites .<br>
                    - Build Chat bots Using Telegram API .<br>
                    - Build Apps to register in remote sites using CURL.`
	},

	{
		date: 'Jul 2017 - Aug 2017',
		h3: 'TE Data',
		p: 'Software Engineering Trainee',
		details: `- Develop and Maintain Web Solutions and IT Services for External Customers .<br>
                    - Develop applications [ web/desktop/windows service/web service] that serve business needs .<br>
                    - Working closely with analysts, designers and staff.<br>
                    - Maintain applications that helps employees to send SMS to customers easily .<br>
                    - Build applications that helps employees to facilitate their works such as compare directories content easily .`
	},
]

workHistories.forEach(function(item, index){
	
	workHistory.append(`
		<div class="timeline-box">
            <div class="timeline-date">
                ${item.date}
            </div>
            <div class="timeline-info">
                <div class="timeline-info-header">
                    <h3>${item.h3}</h3>
                    <p>${item.p}</p>
                </div>
                <div class="timeline-info-details">
                    <p>${item.details}</p>
                </div>
            </div>
        </div>	
    `)

})
