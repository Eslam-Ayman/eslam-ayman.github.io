var certificate = $("#certificate .posts-grid");

var certificates = [
	{
		title: 'Nanodergree Program (Google)',
		url: 'https://graduation.udacity.com/confirm/A94NS5SM',
		category: 'Full Stack',
		image: 'images/certificate/full-stack.jpg',
	},

	{
		title: 'Next Technology Leaders (TIEC)',
		url: 'https://graduation.udacity.com/confirm/A94NS5SM',
		category: 'Full Stack',
		image: 'images/certificate/NTL.png',
	},

	{
		title: 'TE Data (Intern)',
		url: 'https://graduation.udacity.com/confirm/A94NS5SM',
		category: 'SWE Train',
		image: 'images/certificate/TE-Data.png',
	},

	{
		title: 'SoloLearn',
		url: 'https://graduation.udacity.com/confirm/A94NS5SM',
		category: 'HTML Fundamentals',
		image: 'images/certificate/html.jpg',
	},
]

certificates.forEach(function(item, index){

	certificate.append(`
		<div class="col-lg-6 col-md-12 col-sm-6 post-grid-item">
            <div>
                <article class="normal-post">
                    <figure class="entry-header">
                        <div class="portfolio-item">
                            <div class="port-data">
                                <div class="port-data-front-card"><i class="fa fa-code"></i></div>
                                <div class="port-data-back-card">
                                    <h4 class="project-name">${item.title}</h4>
                                    <a href="${item.url}" target="_blank" class="port-show-info fa fa-link" data-toggle="modal" data-target="#certificate-${index}"></a>
                                    <div class="project-category">
                                        <h5>${item.category} <i class="fa fa-code pull-right"></i></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="port-image">
                                <img src="${item.image}" class="img-responsive" alt="">
                            </div>
                        </div>
                    </figure>
                    <div class="modal fade bs-example-modal-lg" id="certificate-${index}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <img src="${item.image}" class="img-responsive" alt="">
                        </div>
                      </div>
                    </div>
                    <!-- 
	                    <div class="entry-content">
	                        <div class="entry-post-info">
	                            <h4><a href="#">Full Stack Web Developer Nanodegree</a></h4>
	                            <p>Certificated 17 July 2018</p>
	                        </div>
	                        <div class="entry-expert">
	                            <p>
	                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
	                            </p>
	                            <div class="post-readMore">
	                                <a href="#" class="pull-left read-more-link">Read More <i class="fa fa-long-arrow-right"></i></a>
	                                <span class="pull-right"><a href="#">1 COMMENT</a></span>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="entry-footer">
	                        <ul class="entry-tags list-unstyled list-inline">
	                            <li><a href="#">CSS</a></li>
	                            <li><a href="#">HTML</a></li>
	                            <li><a href="#">WORDPRESS</a></li>
	                        </ul>
	                    </div> 
	                -->
                </article>
            </div>
        </div>
	`)

})
