var education = $("#resume #education");

var educations = [
	{
		date: '2014 - 2018',
		h3: 'Helwan University',
		p: 'Bachelor of Computer Science (BSc), Computer Science',
		details: `Faculty of Computers and Information ( FCI-H )<br>
                    Major department : computer science (CS)<br>
                    Minor department : information system (IS)<br>`
	},

	{
		date: 'Feb 2018 - Jul 2018',
		h3: 'Google Scholarship ( Nanodegree Program )',
		p: 'Full Stack Web Developer',
		details: `I Certificated as Full-Stack Developer`
	},
]

educations.forEach(function(item, index){

	education.append(`
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
