import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js";
import aPages from "../pages/index.js";

class Page {
    render(){
        console.log("render called on page");
    }
}

class Section extends Page{
    constructor(oOptions){
        super();
        this.oOptions = oOptions;
    }
    render(){
        $.get(`/pages/${this.oOptions.fname}`, (sMarkdown)=>{
            $(`#${this.oOptions.title}`).html(
                marked(sMarkdown)
            )
    
        })
    }
}

class Article extends Page{
    render(){
        $("article").append(
            `<div class="pfblock-image screen-height" style="height: 550px;">

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
          
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="images/bakery.PNG" alt="Los Angeles" style="width:100%; height: 550px;">
                </div>
          
                <div class="item">
                  <img src="images/gallery.PNG" alt="Chicago" style="width:100%; height: 550px;">
                </div>
              
                <div class="item">
                  <img src="images/CIIS.PNG" alt="New york" style="width:100%; height: 550px;">
                </div>
          
                <div class="item">
                  <img src="images/agro.PNG" alt="New york" style="width:100%; height: 550px;">
                </div>
          
                <div class="item">
                  <img src="images/music.PNG" alt="New york" style="width:100%; height: 550px;">
                </div>
              </div>
          
              <!-- Left and right controls -->
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <!--SLIDER-------------------------->
          
          <!---------------ABOUT---------------->
<div class="jumbotron" id="About">
  <div class="container text-center">
    <h1>My Skills & Experience</h1> </br>     
    <p>I have studied IT Innovation & Design from Conestoga College.</br>
      The program has taught me multiple programming language </br>along with ground knowledge on how to deal with clients and User Psychology.</br>
    My primary focus on the future is web or software development,</br> Data Management, Design and great User Experience.</p>

  </div>
</div>
<!---------------ABOUT---------------->
          

<!-- Third Container (Grid) -->
<div class="jumbotron" style="background-color: #e6e6e6; margin-top: -30px; color: #5d636e;">
<div class="container-fluid bg-3 text-center">    
    <h1 style="color:#1abc9c; font-family: 'Times New Roman', Times, serif;">Little More About My Courses</h1></br></br>
  <div class="row">
    <div class="col-sm-4">
       <ul style="font-size: large;">
        <li>User Experience</li>
        <li>Networking</li>
        <li>Data Modelling</li>
        <li>System Analysis & Design</li>
        <li>Software Quality and Usability</li>
        <li>Marketing</li>
        <li>IT Entrepreneurship</li>
      </ul></br></br>
      <img src="images/design.jpeg" class="img-responsive margin" style="width:100%; height:350px;" alt="Image">
    </div>
    <div class="col-sm-4"> 
      <ul style="font-size: large;">
        <li>Programming Language C#</li>
        <li>Web Foundation</li>
        <li>Dynamic Websites</li>
        <li>Game Programming</li>
        <li>Microsoft Web Tech</li>
        <li>Java Web Tech</li>
        <li>Programming Mobile Application</li>
      </ul></br></br>
      <img src="images/programming.jpg" class="img-responsive margin" style="width:100%;  height:350px" alt="Image">
    </div>
    <div class="col-sm-4"> 
      <ul style="font-size: large;">
        <li>Graphic Technique Illustrator</li>
        <li>Graphic Technique Software Design</li>
        <li>System Analysis & Design</li>
        <li>Graphic Techniques for Software Design</li>
        <li>Digital Sound and Motion</li>
        <li>Design Project</li>
        <li>Game Design</li>
      </ul></br></br>
      <img src="images/UX.png" class="img-responsive margin" style="width:100%; height:350px" alt="Image">
    </div>
  </div>
</div>
</div>


<div class="container-fluid bg-3 text-center" id="Projects">    
  <h2 style="font-family: 'Times New Roman', Times, serif; color:#1abc9c ;">MY PORTFOLIO</h2><br>
  <p style="font-size: large;">I have designed these web sites with help of <br>HTML CSS, Jquey, Java Script<br> My primary focus is on web development and design</p><br><br>
  <div class="row">
    <div class="col-sm-4">
      <a href="#" ><div class="rowonex" style="background-image:url(images/bakery.PNG);">
        
      </div></a>
    </div>
    <div class="col-sm-4"> 
      <a href="https://shlokbawa.github.io/CIIS-page/" ><div class="rowonex" style="background-image:url(images/CIIS.PNG);"></div>
    </div>
    <div class="col-sm-4"> 
      <a href="#" ><div class="rowonex" style="background-image:url(images/gallery.PNG);"></div>
    </div>
    <div class="col-sm-4">
      
    </div>
  </div>
</div><br>

<div class="container-fluid bg-3 text-center">    
  <div class="row">
    <div class="col-sm-4">
      <a href="#" ><div class="rowonex" style="background-image:url(images/agro.PNG);"></div>
    </div>
    <div class="col-sm-4"> 
      <a href="#" ><div class="rowonex" style="background-image:url(images/music.PNG);"></div>
    </div>
    
  </div>
</div><br><br>


<div class="row" style="background-color: #1abc9c;" id="contact">

  <div class="col-sm-6 col-sm-offset-3">

      <form id="contact-form"  role="form">
          <div class="ajax-hidden">
            <h2>Contact Me</h2>
            <p style="font-size: large;">For question regarding my work or hiring me please feel free to contact me via mail on sbawa1629@conestogac.on.ca</p>
              <div class="form-group wow fadeInUp">
                  <label class="sr-only" for="c_name">Name</label>
                  <input type="text" id="c_name" class="form-control" name="subject" placeholder="Name">
              </div>

              <div class="form-group wow fadeInUp" data-wow-delay=".1s">
                  <label class="sr-only" for="c_email">Email</label>
                  <input type="email" id="c_email" class="form-control" name="email" placeholder="E-mail">
              </div>

              <div class="form-group wow fadeInUp" data-wow-delay=".2s">
                  <textarea class="form-control" id="c_message" name="message" rows="7" placeholder="Message"></textarea>
              </div>

              <button type="submit" class="btn btn-lg btn-block wow pulse" data-wow-delay=".3s">Send Message</button><br><br>
          </div>
          <div class="ajax-response"></div>
      </form>

  </div>

</div>

          `
        )
    }
}

const sName = "Shlok Bawa";

class Footer extends Page{
    render(){
       
        const yToday = new Date().getFullYear();
        $("footer").html(
            `&copy; ${yToday} ${sName}`
        );
    }
}







class Nav extends Page{
    render(){
        let sMenu ="";
        for(let n = 0; n < aPages.length; n++){

            const sMenuItem = aPages[n].title;
            if(sMenuItem != "index")
            {
              sMenu +=  `<li><a href="#${aPages[n].title}">${aPages[n].title}</a></li>`;
            }
        }
        $("nav").html(`
        <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid>
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Portfolio of ${sName}</a>
        </div>
        <div class="navbar-collapse collapse container">
        
            <ul class="nav navbar-nav navbar-right">
            ${sMenu}
            </ul>
        </div>

    </div>
    </nav>
       ` );
    }
}


class Portfolio extends Page{
    constructor(){
        super();
        this.header = new Page();
        this.nav = new Nav();
        this.article = new Article();
        this.footer = new Footer();
    }
    render(){
        this.header.render();
        this.nav.render();
        this.article.render();
        this.footer.render();
    }
}

$(document).ready(()=>{
    new Portfolio().render();
});

