function appendTechSkills(technicalSkills, technicalSkill){

	technicalSkills.forEach(function(item, index){

		technicalSkill.append(`
	        <div class="progress-bar-container primary-style">
		        <span class="timer" data-from="0" data-to="${item.value}" data-speed="1100" data-refresh-interval="50">0</span>
	            <div class="progress">
	                <div class="progress-bar active" role="progressbar" aria-valuenow="${item.value}" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
	            </div>
	            <h3>${item.title}</h3>
	        </div>
		`)

	})
}


var technicalSkill = $("#resume .kayo-skills #technical-skills #col-right");

var technicalSkills = [
	{ value: '80', title: 'OOP & MVC ( PHP )' },
	{ value: '80', title: 'Laravel Framework (PHP)' },
	{ value: '80', title: 'MySQL' },
	{ value: '80', title: 'GIT (VCS)' },
]

appendTechSkills(technicalSkills, technicalSkill)

var technicalSkill = $("#resume .kayo-skills #technical-skills #col-left");

var technicalSkills = [
	{ value: '80', title: 'RestFul API' },
	{ value: '70', title: 'python' },
	{ value: '80', title: 'Jquery & Javascript' },
	{ value: '80', title: 'HTML' },
]

appendTechSkills(technicalSkills, technicalSkill)