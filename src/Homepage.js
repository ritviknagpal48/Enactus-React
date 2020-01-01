import React, {Fragment} from 'react'
import Swiper from 'react-id-swiper';
// import 'react-id-swiper/lib/styles/scss/swiper.scss';
// css
// import 'react-id-swiper/lib/styles/css/swiper.css';


export const Homepage = () => {
    const params = {
        // slidesPerView: 4,
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          },
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // }
      }
    return (
        <Fragment>
            <div>
        <div className="preloader">
          <img src="img/loader.gif" alt="Preloader image" />
        </div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#"><img style={{height: '95px', width: '150px', marginTop: '-25px'}} src="img/Enactus NSIT Logo White.png" data-active-url="img/Enactus NSIT Logo Black.png" alt="" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {/* <button style="color:white; margin-left:350px; background-color: white; border:none;" id="hidden">Hullo</button> */}
              <ul className="nav navbar-nav navbar-right main-nav">
                <li><a href="#intro"><b>Intro</b></a></li>
                <li><a href="#services"><b>Projects</b></a></li>
                <li><a href="#team"><b>Team</b></a></li>
                <li><a href="contact/index.html" target="_blank"><b>Contact us</b></a></li>
                <li><a href="http://enactus.org/" target="_blank"><i className="fa fa-globe fa-2x" style={{marginTop: '-5px'}}><sub style={{fontSize: '13px', fontFamily: '"Roboto", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif'}}>Enactus World</sub></i></a></li>
                <li><button type="button" id="new" className="new btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"><a style={{fontSize: '20px', fontFamily: '"Roboto", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif', color: '#f1be5e', fontWeight: 'bold'}}>What's New?</a></button></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document" style={{maxWidth: '960px'}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">What's New?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{marginTop: '-20px'}}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <img className="card-img-top" src="img/IMG-20181018-WA0037.jpg" alt="Card image cap" style={{width: '100%'}} />
                    </div>
                    <div className="card-body">
                      <p className="card-text description">Having successfully sold 20 electronic air purifiers team is currently training a group  of unemployed women from bharat vihar in the assembly process.<br />CLAIR is designed as a solution to Delhi-NCRs pollution problem. It is based on an efficient and affordable 2-stage filtration technique. CLAIR effectively cleans the indoor air by bringing down the PM 2.5 levels within safe limits under 3 hours.</p>
                    </div>
                  </div>
                  <br /><hr />
                  <div className="row">
                    <div className="col-md-4">
                      <img className="card-img-top" src="https://scontent.fdel12-1.fna.fbcdn.net/v/t1.0-9/45276509_2064409610247152_200317085706878976_n.jpg?_nc_cat=105&_nc_ht=scontent.fdel12-1.fna&oh=40d8b9ebe6d3d174cb48dcf7c0fc9dab&oe=5C94E488" alt="Card image cap" style={{width: '100%'}} />
                    </div>
                    <div className="card-body">
                      <p className="card-text description">Project Urjal has successfully managed to save 480 units of electricity. By the end of this year we wish to light up more than 200 houses, creating more than 20 entrepreneurs.</p>
                    </div>
                  </div>
                  <br /><hr />
                  <div className="row">
                    <div className="col-md-4">
                      <img className="card-img-top" src="img/IMG_20181113_140547.png" alt="Card image cap" style={{width: '100%'}} />
                    </div>
                    <div className="card-body">
                      <p className="card-text description">
                        Project Kitabat took another step forward and in association with Purani Dilli Walo ki Baatein had its first stall at the Jashn-e-Virasat-e-Urdu, the Urdu Heritage Festival.
                        The Live calligraphy session by the beneficiaries, Mr. Shamim Ahmed and Mr. Anis Siddiqui (who is revered as the father of Urdu calligraphy) attracted a huge audience at our stall and received great traction, giving people chance to get words of their choice to be inscribed in calligraphy.</p>
                    </div>
                    <br /><hr />
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <img className="card-img-top" src="img/aaharpic.jpeg" alt="Card image cap" style={{width: '100%'}} />
                    </div>
                    <div className="card-body">
                      <p className="card-text description">
                        Project aahar recently successfully completed its first cycle of production with the hydroponic setup. The produce was then directly sold to the vendors and the profit generated was given back to the farmer.the team is currently looking to come up with innovative methods to scale up the project.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{color: 'black'}}>Close</button>
              </div>
            </div>
          </div>
        </div>
        <header className="img-responsive">
          <div className="container-fluid">
            <div className="row">
              <div className="table">
                <div className="col-xs-12 text-center" style={{paddingLeft: '1px'}}>
                  <h1 style={{textShadow: '2px 2px #000000', marginTop: '205px', textAlign: 'center', fontFamily: '"Oswald"'}} className="shadow-lg white" id="welcome">Welcome to
                    Enactus NSUT
                  </h1>
                  <h1 id="intro" style={{textShadow: '2px 2px #000000', marginLeft: '5%', fontFamily: '"Raleway"', color: '#ffc34d'}} className="shadow-lg bold yellow typed">Human progress is the business we deal in</h1>
                  <span className="typed-cursor" id="cursorCus">|</span> 
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="cut cut-top" />
          <div className="container">
            <div className="row intro-tables" id="int">
              <div className="col-md-4">
                <div className="intro-table intro-table-third">
                  <h5 className="white heading">What is Enactus?</h5>
                  <div className="owl-testimonials bottom">
                    <div className="item">
                      <h5 className="white heading content">We believe in investing in students who take
                        entrepreneurial action for others that creates a better world for us all</h5>
                      <h5 className="white heading light author">En.Act.Us</h5>
                    </div>
                    <div className="item">
                      <h5 className="white heading content">We are a global community of young academic, student
                        and business leaders that use entrepreneurship to solve real world problems</h5>
                      <h5 className="white heading light author">En.Act.Us</h5>
                    </div>
                    <div className="item">
                      <h5 className="white heading content">Our Mission - Engage this generation of
                        entreprenurial leaders to innovate, create and impact</h5>
                      <h5 className="white heading light author">En.Act.Us</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-table intro-table-third">
                  <h5 className="white heading">Quick Facts &amp; Figures</h5>
                  <div className="owl-testimonials bottom">
                    <div className="item">
                      <h5 className="white heading content">Established in 2012, Enactus NSUT is the social
                        entrepreneurship chapter of NSUT having run over 8 successful projects till date.</h5>
                      <h5 className="white heading light author">About</h5>
                    </div>
                    <div className="item">
                      <h5 className="white heading content">Through our currently running projects, we have
                        generated a revenue of more than INR 2,50,000 and impacted 500+ lives across Delhi</h5>
                      <h5 className="white heading light author">Impact</h5>
                    </div>
                    <div className="item">
                      <h5 className="white heading content">We incorporate technology as well as core engineering
                        tehcniques in our projects to create a tangible change in the society</h5>
                      <h5 className="white heading light author">Diversity</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="intro-table intro-table-third">
                  <h5 className="white heading">UNDP Goals Targeted</h5>
                  <div className="owl-testimonials bottom">
                    <div className="item">
                      <h5 className="white heading content">Integrate the principles of sustainable development into country policies and programmes and reverse the loss of environmental resources that are imperative for world health.</h5>
                      <h5 className="white heading light author">Ensure Environment Sustainability</h5>
                    </div>
                    <div className="item">
                      <h5 className="white heading content">Uplift underprivileged communities from the shackles of poverty and provide an outlet of improving income, generating livelihood and ensuring that the beneficiaries are no longer under BPL.</h5>
                      <h5 className="white heading light author">Eradicate Extreme Hunger &amp; Poverty</h5>
                    </div>
                    <div className="item">
                      <h5 className="white heading content">Forming a strong partnership with the german team from Enactus Bayreuth and taking action together, we aim to take social entrepreneurship to a global level.</h5>
                      <h5 className="white heading light author">Develop A Global Partnership For Development</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row" style={{marginTop: '-100px', marginBottom: '40px'}}>
              <div className="col-sm-6">
                <a href="Clair/index.html"><div className="cont">
                    <img className="product" src="img/Clair.jpg" style={{width: '100%'}} />
                    <p className="click">Click here to know more</p>
                  </div></a>
              </div>
              <div className="col-sm-6">
                <h4 className="h" style={{textAlign: 'center', textDecoration: 'underline'}}>CLAIR - Air Purifier Designed by Enactus NSUT</h4>
                <p style={{color: '#333', textAlign: 'center'}}>
                  Air quality in Delhi NCR has deteriorated to hazardous levels, present AQI being 450+, more than 15 times the acceptable level recommended by WHO.<br />
                  CLAIR with a price tag of ₹2999 only, is designed to provide clean air to every household. The air inside your house is not safe either. The impacts of indoor air pollution on human health is much higher when compared to the impacts caused by outdoor air pollution.
                  <br />
                  CLAIR is designed as a solution to Delhi-NCRs pollution problem. It is based on an efficient and affordable 2-stage filtration technique. CLAIR effectively cleans the indoor air by bringing down the PM 2.5 levels within safe limits under 3 hours.
                  <br /><br />
                  <strong>Click on the poster to know more.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{marginBottom: '150px'}}>
          <div className="grey-bg c-no container">
            <div className="container">
              <div className="row" id="counter">
                <div className="col-sm-4 counter-Txt margin-bot-35"><span className="counter-value" data-count={12000}>0</span><p id="lol" className="count-text">Hours Devoted</p></div>
                <div className="col-sm-4 counter-Txt"><span className="counter-value" data-count={487}>0</span><p id="lol" className="count-text">Beneficiaries</p></div>
                <div className="col-sm-4 counter-Txt"><span className="counter-value" data-count={21}>0</span><p id="lol" className="count-text">Entrepreneurs Created</p></div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="section section-padded" style={{paddingBottom: '0px'}}>
          <div className="container" style={{backgroundImage: 'url("img/pg.jpg")'}}>
            <div className="row text-center title">
              <h1 style={{marginTop: '100px'}}>Our Projects</h1>
              <h4 className="light muted">The heart &amp; soul of entrepreneurial action fused with social change</h4>
            </div>
            <a className="row services">
            </a><a href="projects/sanjeevani/index.html" /><div className="col-md-6"><a href="projects/sanjeevani/index.html">
              </a><div className="service"><a href="projects/sanjeevani/index.html">
                  <img className="card-img-top" src="img/sjlogo.png" height="100%" width="85%" />
                </a><div className="card-body"><a href="projects/sanjeevani/index.html">
                  </a><h4 id="link" className="heading" style={{marginTop: '10px'}}><a href="projects/sanjeevani/index.html" /><a href="projects/sanjeevani/index.html">Sanjeevani</a></h4>
                  <p className="description">Creating a sustainable model for farmers that
                    allows them to sell directly to end consumer. Designing a plant based air purifier to
                    tackle New Delhi's pollution.</p>
                </div>
              </div>
            </div>
            <a href="projects/DW/index.html" /><div className="col-md-6"><a href="projects/DW/index.html">
              </a><div className="service"><a href="projects/DW/index.html">
                  <img className="card-img-top" src="img/dwlogo.png" height="100%" width="80%" />
                </a><div className="card-body"><a href="projects/DW/index.html">
                  </a><h4 id="link" className="heading" style={{marginTop: '10px'}}><a href="projects/DW/index.html" /><a href="projects/DW/index.html">Drinking Water</a></h4>
                  <p className="description">Providing clean drinking water at cheap rates to madanpur khadar village by using state of the art technology and creating employment for unskilled youth.</p>
                </div>
              </div>
            </div>
            <a href="projects/kitabat/index.html"> </a><div className="col-md-6"><a href="projects/kitabat/index.html">
              </a><div className="service"><a href="projects/kitabat/index.html">
                  <img className="card-img-top" src="img/kitabat.png" height="100%" width="80%" />
                </a><div className="card-body"><a href="projects/kitabat/index.html">
                  </a><h4 id="link" className="heading" style={{marginTop: '10px'}}><a href="projects/kitabat/index.html" /><a href="projects/kitabat/index.html">Kitabat</a></h4>
                  <p className="description">Bringing hope to a long lost art form, Project Kitabat is set out to revive calligraphy in
                    India and create business for the <i>katibs</i> of Old Delhi, who still display the magic
                    of traditional calligraphy in their work.</p>
                </div>
              </div>
            </div>
            <a href="projects/aahar/index.html" /><div className="col-md-6"><a href="projects/aahar/index.html">
              </a><div className="service"><a href="projects/aahar/index.html">
                  <img className="card-img-top" src="img/aaharlogo.png" height="100%" width="74.2%" />
                </a><div className="card-body"><a href="projects/aahar/index.html">
                  </a><h4 id="link" className="heading" style={{marginTop: '10px'}}><a href="projects/aahar/index.html" /><a href="projects/aahar/index.html">Aahar</a></h4>
                  <p className="description">Creating a more ecological way of farming, Project Aahar utilises hydroponics, a technique
                    that allows for growing crops using mineral nutrient solvents to improve production and
                    optimise the process. </p>
                </div>
              </div>
            </div>
            <a href="projects/urjal/index.html" /><div className="col-md-6"><a href="projects/urjal/index.html">
              </a><div className="service"><a href="projects/urjal/index.html">
                  <img className="card-img-top" src="img/urjallogo.png" width="63.2%" />
                </a><div className="card-body"><a href="projects/urjal/index.html">
                  </a><h4 id="link" className="heading"><a href="projects/urjal/index.html" /><a href="projects/urjal/index.html">Urjal</a></h4>
                  <p className="description">Using solar water bulbs to provide permanent access to light in economically weaker areas
                    of New Delhi, Project Urjal aims to achieve efficient energy solutions and provide minimal
                    maintenance cost.</p>
                </div>
              </div>
            </div>
            <a href="contact/index.html" target="_blank"><div className="col-md-6">
                <div className="service" id="newproject">
                  <h4 className="card-img-top" style={{margin: '100px', marginTop: '200px'}}>There is always space for a new
                    project!</h4>
                  <p className="description" style={{marginTop : '-60px'}}>Have an idea? Come join us as a volunteer and
                    begin your journey as a social entrepreneur.
                  </p><h5 className="muted regular" style={{color: 'white'}}>New Card</h5>
                  <br /><br /><br /><br />
                  <p />
                </div>
              </div></a>
          </div>
          <section style={{marginTop: '-50px'}}>
            <div className="row text-center title">
              <h1 style={{marginTop: '100px'}}>Social Media Activity</h1>
              <h4 className="light muted">Check out the latest posts on our social media handles!</h4>
            </div>
            <br />
            <br />
            {/* <div class="container" style = "display: flex; justify-content: space-around;">
                <div class="row">
                    <div class="col-sm-3">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fenactusnsut&tabs=timeline&width=400&height=585&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=270130390373305" width="400" height="635" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-3" id = "insta">
            <a href="https://instawidget.net/v/user/enactusnsut" id="link-e89de7077cad5be9d0a8c84ae7d7288d97999c75ebf75021c11966bc2157b143">@enactusnsut</a>
            
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-3"><a class="twitter-timeline" data-lang="en" data-width="400" data-height="635" href="https://twitter.com/EnactusNSUT?ref_src=twsrc%5Etfw">Tweets by EnactusNSUT</a> 


                
    </div>
    </div>
    </div> */}
            <div className="container p-0 m-0" style={{width: '100%', padding: '0px', margin: '0px', textAlign: 'center'}}>
              <div className="row p-0 m-0" style={{width: '100%', padding: '0px', margin: '0px', textAlign: 'center'}}>
                <div className="col col-xs-12 col-md-6 p-0 m-0" style={{padding: '0px', margin: '0px', textAlign: 'center', marginTop: '20px'}}><a className="twitter-timeline" data-lang="en" data-width={300} data-height={635} href="https://twitter.com/EnactusNSUT?ref_src=twsrc%5Etfw">Tweets by EnactusNSUT</a>    
                </div>
                {/* <div class="col col-xs-12 col-md-4 text-center"  style="padding: 0px; margin: 0px; text-align: center; margin-top: 20px">


    
    <span class="timeline-Header-title u-inlineBlock" data-scribe="element:title" style="font-size: 2.0rem; margin-bottom: 10px">Checkout Our Instagram Feed <span class="timeline-Header-byline" data-scribe="element:byline">
        <a class="customisable-highlight" href="https://www.instagram.com/enactusnsut/" target="_blank" title="‎@enactusnsut on Instagram">‎@enactusnsut</a></span></span>
    */}
                {/* LightWidget WIDGET */}
                {/* LightWidget WIDGET */}
                {/* <iframe src="http://lightwidget.com/widgets/ac801ce441145195b1c705dbfe91827e.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> 


</div> */}
                <div className="col col-xs-12 col-md-6 p-0 m-0 text-center" style={{padding: '0px', margin: '0px', textAlign: 'center', marginTop: '20px'}}>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fenactusnsut&tabs=timeline&width=300&height=585&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=270130390373305" width={300} height={635} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media" />
                </div>
              </div>
            </div>
          </section>
          <section id="team" className="section gray-bg">
            <div className="container">
              <div className="row title text-center" style={{marginBottom: '20px'}}> 
                <h2 style={{marginTop: '50px'}}>Our Team</h2>
                <h4 className="light muted">Because teamwork makes the dream work!</h4>
              </div>
              <br />
              {/* <div className="owl-carousel owl-theme" style={{paddingRight: '0px', paddingLeft: '0px'}}> */}

                  <Swiper {...params}>
                  <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/arunav_akshat.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Arunav Akshat</h4>
                      <h5 className="muted regular"><b>President</b></h5>
                      <a href="https://www.linkedin.com/in/arunav-akshat-391243130/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/nitish_dayal.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Nitish Dayal</h4>
                      <h5 className="muted regular"><b>President</b></h5>
                      <a href="https://www.linkedin.com/in/nitish-dayal-80377a145/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/arunima_mitra.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Arunima Mitra</h4>
                      <h5 className="muted regular"><b>Vice President</b></h5>
                      <a href="https://www.linkedin.com/in/arunima-mitra/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/divit_kedia.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Divit Kedia</h4>
                      <h5 className="muted regular"><b>Vice President</b></h5>
                      <a href="https://www.linkedin.com/in/divit-kedia-b2069b141/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/kushagra_chaudhary.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4 style={{fontSize: '22px !important'}}>Kushagra Chaudhary</h4>
                      <h5 className="muted regular"><b>Vice President</b></h5>
                      <a href="https://www.linkedin.com/in/kushagra-chaudhary-34785814b/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/sanchit_agarwal.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Sanchit Agarwal</h4>
                      <h5 className="muted regular"><b>Vice President</b></h5>
                      <a href="https://www.linkedin.com/in/sanchit-agarwal-025494129/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/abhishek_dudeja.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Abhishek Dudeja</h4>
                      <h5 className="muted regular"><b>Director, Tech Head</b></h5>
                      <a href="https://www.linkedin.com/in/abhishek-dudeja-11649b157/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/raghav_chopra.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Raghav Chopra</h4>
                      <h5 className="muted regular"><b>Director</b></h5>
                      <a href="https://www.linkedin.com/in/raghav-chopra-09744b136/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/ansh_malik.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Ansh Malik</h4>
                      <h5 className="muted regular"><b>Director</b></h5>
                      <a href="https://www.linkedin.com/in/ansh-malik-774344140/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/shaurya_prasad.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Shaurya Prasad</h4>
                      <h5 className="muted regular"><b>General Secretary</b></h5>
                      <a href="https://www.linkedin.com/in/shaurya-prasad/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/yuvnaal_dhaka.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Yavnaal Dhaka</h4>
                      <h5 className="muted regular"><b>General Secretary</b></h5>
                      <a href="https://www.linkedin.com/in/yavnaal-dhaaka-100aa418b/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/yash_vardhan.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Yash Vardhan</h4>
                      <h5 className="muted regular"><b>Secretary</b></h5>
                      <a href="https://www.linkedin.com/in/yash-vardhan-nsut/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/nikhil_gupta.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Nikhil Gupta</h4>
                      <h5 className="muted regular"><b>Secretary</b></h5>
                      <a href="#"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/tushar_garg.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Tushar Garg</h4>
                      <h5 className="muted regular"><b>Technical Head</b></h5>
                      <a href="https://www.linkedin.com/in/tushargarg702/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/mehar_saini.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Mehar Saini</h4>
                      <h5 className="muted regular"><b>Creative Head</b></h5>
                      <a href="https://www.linkedin.com/in/mehar-saini-5b3484169/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/kartik_bhardwaj.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Kartik Bhardwaj</h4>
                      <h5 className="muted regular"><b>Design Associate</b></h5>
                      <a href="#"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team text-center">
                    <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    </div>
                    <img src="img/team/hitesh_gautam.jpg" alt="Team Image" className="avatar" />
                    <div className="title">
                      <h4>Hitesh Gautam</h4>
                      <h5 className="muted regular"><b>Technical Associate</b></h5>
                      <a href="https://www.linkedin.com/in/hitesh-gautam-180858136/"><i className="fa fa-linkedin fa-2x" target="_blank" /></a>
                    </div>
                  </div>
                </div>
                  </Swiper>
               
              </div>
            {/* </div> */}
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 text-center-mobile">
                  <img src="img/Enactus NSIT Logo White.png" height={90} width={140} />
                  <br />
                  <br />
                  <br />
                  <h3 className="light-white light" style={{marginTop: '-30px'}}>#WeAllWin</h3>
                </div>
                <div className="col-sm-6 text-center-mobile">
                  <h3 className="white" style={{display: 'block', float: 'right'}}>Social Entrepreneurs available 24x7<span className="open-blink" /></h3>
                  <br /><br />
                  <div className="row opening-hours">
                    <div className="col-sm-6 text-center-mobile">
                      <h4 className="light-white light" />
                    </div>
                    <div className="col-sm-6 text-center-mobile" style={{marginTop: '-10px', textAlign: 'center'}}>
                      <h2 className="light-white light" style={{color: 'white'}}><b>Contact Us At :</b></h2>
                      <h4 className="light-white light" style={{color: 'white'}}>contact@enactusnsut.org</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bottom-footer text-center-mobile">
                <div className="col-sm-8">
                </div>
                <div className="col-sm-4 text-right text-center-mobile">
                  <ul className="social-footer">
                    <li><a href="https://www.facebook.com/EnactusNSIT/"><i className="fa fa-facebook fa-2x" /></a></li>
                    <li><a href="https://twitter.com/enactusnsit?lang=en"><i className="fa fa-twitter fa-2x" /></a></li>
                    <li><a href="https://www.instagram.com/enactusnsit/"><i className="fa fa-instagram fa-2x" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="container text-center light-white light" style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                Copyright © Enactus NSUT
              </div>
            </div>
            <div>
              <button className="lol" style={{backgroundColor: '#2C2A43', border: 'none'}}>
              </button></div>
          </footer>
          <div className="mobile-nav">
            <ul>
            </ul>
            <a href="#" className="close-link"><i className="arrow_up" /></a>
          </div>
        </section></div>
            
        </Fragment>
    )
}
