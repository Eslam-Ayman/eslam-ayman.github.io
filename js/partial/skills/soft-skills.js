var softSkill = $("#resume .kayo-skills #soft-skills");

var softSkills = [
	{ value: '0.8', title: 'Communication' },
	{ value: '0.8', title: 'Team Work' },
	{ value: '0.8', title: 'Flexibility' },
	{ value: '0.8', title: 'Time management' },
]

softSkills.forEach(function(item, index){

	softSkill.append(`
		<div class="col-sm-3">
            <div class="progress-container">
                <div class="progressName" id="pro${index+1}" data-value="${item.value}" data-color="#1894ff"></div>
                <h3>${item.title}</h3>
            </div>
        </div>
	`)

})
