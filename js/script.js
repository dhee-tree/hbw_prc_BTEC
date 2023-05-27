// For profile cards
function First() {
    document.getElementById("employee-name").innerHTML = "Daniel Lecroy";
    document.getElementById("employee-img").innerHTML = '<img src="images/Daniel_Lecroy.jpg" alt="Daniel Lecroy Picture"></img>';
    
    document.getElementById("job-role").innerHTML = 'Job Role';
    document.getElementById("role-txt").innerHTML = 'Web Designer';

    document.getElementById("description").innerHTML = 'About';
    document.getElementById("description-txt").innerHTML = "I'm Daniel and probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design.<br>Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^).<br>I'm committed to creating fluent user experiences while staying fashionable.<br><br>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.<br><br>I draw inspiration from a lot of different places when designing websites. Being a designer and creating something new every day is challenging.<br>Sometimes, ideas spark instantly. But other times? They can take hours or even days to develop.<br>When this happens, it's useful to step away from the project for a moment and look to others' work like at csszengarden to find inspiration.</span><br><br>I also draw inspiration  and awe from cultural art from around the world both old and new.";
}

function Second() {
    document.getElementById("employee-name").innerHTML = "Rosa DeCastello";
    document.getElementById("employee-img").innerHTML = '<img src="images/Rosa_DeCastello.jpg" alt="Rosa DeCastello Picture"></img>';
    
    document.getElementById("job-role").innerHTML = 'Job Role';
    document.getElementById("role-txt").innerHTML = 'Web Developer';

    document.getElementById("description").innerHTML = 'About';
    document.getElementById("description-txt").innerHTML = "Hi I'm Rosa and I have a real passion for Creative design, I'm never happier than when I'm pushing the envelope of what can be done with HTML and CSS.<br><br>I came into web design from an art background but soon realised that I needed to develop my technical skills as well. So I did a lot of online courses that pushed what I know, then used the support and experience of my colleagues to hone my skills.<br>My work with Hot Beans has been very varied and I enjoy the challenge of not knowing what industry our next client will come from, it keeps me on my toes and my creativity fresh.<br><br>I love working for HBW and they have been super supportive these are some of the things I do on a day to day basis:<ul><li>I take a lead role in maintaining and developing client's sites.</li><li>Attend meetings with internal and external clients to plan and develop site content, style and appearance.</li><li>Use web content management systems (CMS).</li><li>Analyse website usage statistics.</li><li>Write reports for senior managers, clients and partnership organisations.</li><li>Carry out quality assurance checks on content.</li></ul>I also draw inpirateion and awe from cultural art from around the world both old and new.";
}

function Third() {
    document.getElementById("employee-name").innerHTML = "Li Chang";
    document.getElementById("employee-img").innerHTML = '<img src="images/Li Chang.jpg" alt="Li Chang Picture"></img>';
    
    document.getElementById("job-role").innerHTML = 'Job Role';
    document.getElementById("role-txt").innerHTML = 'Web Developer';

    document.getElementById("description").innerHTML = 'About';
    document.getElementById("description-txt").innerHTML = "Hello! My name is Li and I enjoy creating things that live on the internet.<br><br>I decided on this career as I grew up with a heavy influence from my father who ran his own software house, and I got an insight into what it's like to work in the tech industry. My father would always hype about how learning to program or by 'speaking the computer's language', he could type a few lines of code and tell the computer to do whatever he wanted it to do and that just blew my then curious and budding little mind.<br>As I grew older, my interest in the field continued to grow as I started to understand the importance of technology and how it will continuously evolve to become a basic necessity in our day to day lives.<br>I have always been one of the few girls in computing classes in school as well as only one of three other girls in my college courses, but I thought if my dad can do it, then so can I.<br><br>I got my job with Hot Beans when I was in my last year of university, England had just gone into a lockdown due to COVID-19, and I was on the lookout for a good graduate job.<br>I came across a job posting for a front-end engineer role at HBW I applied and a few days later I got a call for an interview. During the interview I spoke about how I enjoy all aspects of tech from design to development, as well as my awareness of the importance of web accessibility. A couple of days later, I received a phone call offering me the job and an email from my manager to tell me that I was joining the accessibility team.<br><br>A typical as a graduate accessibility specialist where I work alongside designers and developers to support them to create and build brilliant new features and run accessibility audits across different sites and applications against WCAG (Web Content Accessibility Guidelines), which helps us find accessibility issues to tackle. This ensures that our sites can be used by everyone regardless of their disabilities. My team and I also create and deliver engagement resources to raise awareness and understanding of accessibility.<br><br>Apart from having the basic knowledge of web development and accessibility to carry out the job you also need:<ul><li>Determination to learn</li><li>Good communication skills</li><li>Good analytical skills</li><li>To be adaptive and collaborative to work alongside different people.</li></ul>The part I enjoy most about my job is working with a large number of inspiring developers and designers with a range of unique and amazing ideas across many different projects. At the same time, I have an opportunity to advocate and educate others about the importance of the topic. It's great knowing that the websites we've put online are accessible and safe for everyone to use, regardless of their disability.";
}

// For rmail validation
function ValidateEmail() {
    var email = document.getElementById('email')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)) {
        alert("Valid email address!");
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

// For upload button
const file = document.getElementById('myFile');

const fileChosen = document.getElementById('file-chosen');

file.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})