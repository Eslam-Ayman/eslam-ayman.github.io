var testimonial = $("#blog .testimonials-slider");

var testimonials = [
	{
		name: 'Mahmoud Fouad',
		title: 'Software Development Section Head ( Contact Center & Web Solutions ) at Telecom Egypt',
		image: 'images/testimonials/1.jpg',
		description: `I was Eslam's Mentor during his training at TEData for
                    two months. during his training, It was obvious he is a
                    hard worker, fast learner and very talented developer.
                    he helped me in developing application that enables
                    employees to send SMS notifications for outages, he
                    also helped me in Telecom Egypt IVR project. I believe
                    that he would be an added value to any company and I
                    strongly recommend him for any organization seeking
                    a talented and committed developer.`,
	},

	{
		name: 'Kirolos Alfy',
		title: 'CEO OF Propertzcrm',
		image: 'images/testimonials/3.jpg',
		description: `I was managing Eslam directly for 4 months, He is Really One of the best employees which i worked with him and learned a lot from him, He helped me to train new Interns in my company. He is hard worker , and has a great ability to think with distinction in the most difficult and solve problems, I have enjoyed working with him, and I wish him continued success, i really love him as friend and as success partner in my company.`,
	},

	{
		name: 'Aly Elgarhy',
		title: 'Senior Web Designer at TEData',
		image: 'images/testimonials/2.jpg',
		description: `Islam is very talent php developer and also have
	                    future as front end developer , i wish he can join our
	                    team very soon`,
	},

	{
		name: 'Ahmed Hesham',
		title: 'CEO & Founder of Uni Bus Transportation / Full Stack Web Developer',
		image: 'images/testimonials/4.jpg',
		description: `I had the pleasure of working with Eslam , Although he is younger than me , I learned alot from him , he is an amazing multitasking man , very passion about what he is doing , very talented and innovator , i really loved working with him , he is a great team partner and saves no effort to help anyone . I still hope to work with him again .`,
	},
]

testimonials.forEach(function(item, index){

	testimonial.append(`
		<!-- Testimonials Slider Box -->
        <div class="testi-box text-center">
            <div class="img-box">
                <img src="${item.image}" alt="">
            </div>
            <div class="testi-user-info">
                <h3>${item.name}</h3>
                <h5>${item.title}</h5>
            </div>
            <div class="testi-desc-box">
                <i>“</i>
                <p>
                    ${item.description}
                </p>
                <i>”</i>
            </div>
        </div>
	`)

})
