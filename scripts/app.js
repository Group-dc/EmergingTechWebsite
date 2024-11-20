// Name:       Noelle Dacayo    &    Manu Sugunakumar
// Student ID: 1008854345       |    100748877
// DoC: 27-Jan-2024
"use strict";

// IIFE - Immediately Invoked Functional Expression
(function () {

    // Dynamically changes the blog in the nav bar to news
    let blogNav = document.getElementById("BlogNav");

    let blogIcon = document.createElement("i");
    blogIcon.setAttribute("class", "fa-solid fa-book");

    let textNodeBlog = document.createTextNode(' News');

    blogNav.innerHTML = "";

    blogNav.appendChild(blogIcon);
    blogNav.appendChild(textNodeBlog);

    // dynamically adds career to the nav bar
    let navBar = document.getElementById("NavBar");

    let careerNavItem = document.createElement("li");

    let careerLink = document.createElement("a");
    careerLink.setAttribute("class", "nav-link active");
    careerLink.setAttribute("href", "career.html")


    let careerIcon = document.createElement("i");
    careerIcon.setAttribute("class", "fa-solid fa-city");

    careerLink.appendChild(careerIcon);
    careerLink.appendChild(document.createTextNode(' Careers'));
    careerNavItem.appendChild(careerLink);
    navBar.appendChild(careerNavItem);

    document.addEventListener("DOMContentLoaded", function () {
        // Call the function to load and play the video
        loadVideoBackground();

        function loadVideoBackground() {
            // Create a new Video element
            let videoElement = document.createElement("video");

            // Add attributes to the video element
            videoElement.setAttribute("loop", true);
            videoElement.setAttribute("muted", true);

            // Add a class to style the video
            videoElement.classList.add("video-background");
            document.addEventListener("DOMContentLoaded", function() {
                // Append the video to the background overlay
                document.getElementById("background-overlay").appendChild(videoElement);
            });
            // Add source elements for different video formats (e.g., mp4, webm)
            let videoSources =
                ["pictures/1655962330-1655962330-return-to-valorant-city-star-guardian-live-wallpaper.mp4"];

            videoSources.forEach(function (sourceUrl) {
                let sourceElement = document.createElement("source");
                sourceElement.setAttribute("src", sourceUrl);
                videoElement.appendChild(sourceElement);
            });

            // Play the video when it's fully loaded
            videoElement.addEventListener("loadeddata", function () {
                videoElement.play().then(function() {
                    // Video started playing successfully
                    console.log("Video started playing");
                }).catch(function(error) {
                    // Handle the error
                    console.error("Video play failed:", error.message);
                });
            });
        }
    });

    function DisplayHomePage() {
        console.log("Called DisplayHomePage...");

        // Main content container
        let MainContent = document.getElementsByTagName("main")[0];

        // Paragraph inside a container
        let MainParagraphContainer = document.createElement("div");
        MainParagraphContainer.setAttribute("class", "main-paragraph-container");

        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = `
        Welcome to Harmony Hub – your centralized control hub for seamless entertainment and smart home experiences! 
        We're thrilled to have you on board. Get ready to simplify your life with Harmony's intuitive features, 
        allowing you to effortlessly manage your devices and create custom activities. 
        
        Whether it's turning on your home theater system or setting the perfect mood lighting, Harmony Hub is here to harmonize your home. 
        
        Explore, customize, and enjoy the convenience of connected living. Let the harmony begin!
        `;
        MainParagraphContainer.appendChild(MainParagraph);
        MainContent.appendChild(MainParagraphContainer);
    }
    function DisplayContactPage() {
        console.log("Called DisplayContactPage...");

        let FullNameInput = document.getElementById('fullName');
        let EmailAddressInput = document.getElementById('emailAddress');
        let SubjectInput = document.getElementById('subject');
        let MessageInput = document.getElementById('message');

        let SendButton = document.getElementById("sendButton");
        let ContactForm = document.getElementById("ContactForm");
        SendButton.addEventListener("click", function(event){
            event.preventDefault(); // prevent default form submission behaviour

            // trim the inputs of any blank
            let ContactName = FullNameInput.value.trim();
            let ContactEmail = EmailAddressInput.value.trim();
            let ContactSubject = SubjectInput.value.trim();
            let ContactMessage = MessageInput.value.trim();

            if(ContactName !== "" && ContactEmail !== "" && ContactSubject !== "" && ContactMessage !== "")
            {
                document.getElementById('modalFullName').textContent = `Full Name: ${ContactName}`;
                document.getElementById('modalEmailAddress').textContent = `Email Address: ${ContactEmail}`;
                document.getElementById('modalSubject').textContent = `Subject: ${ContactSubject}`;
                document.getElementById('modalMessage').textContent = `Message: ${ContactMessage}`;

                // clears the text fields
                ContactForm.reset();

                // Show the modal
                $('#ContactModal').modal("show")
                setTimeout(redirect, 5000);
            }
            else
            {
                $('#ContactErrorModal').modal("show")
            }
        });

        // function to redirect page
        function  redirect(){
            window.location.href = "index.html";
        }

    }

    function DisplayServicesPage(){
        console.log("Called DisplayServicePage...");
    }
    function DisplayBlogPage(){
        console.log("Called DisplayBlogPage...");
    }
    function DisplayPortfolioPage(){
        console.log("Called DisplayPortfolioPage...");

        // Storage for projects
        let Projects = [
            { title: 'EcoTech Innovators',
                description: 'The EcoTech Innovators project by Harmony Hub aims to create a sustainable, ' +
                    'technology-driven solution to address environmental challenges in our local community. ' +
                    'This comprehensive initiative combines community engagement, education, and the development of ' +
                    'innovative digital tools to promote eco-conscious practices and reduce our collective carbon footprint.',
                image: 'pictures/ecotech-harmony.jpg'},
            { title: 'EcoEdu Explorers',
                description: 'EcoEdu Explorers is a visionary project by Harmony Hub that seeks to cultivate ' +
                    'environmental literacy and a deep connection with nature among the younger generation. ' +
                    'This multifaceted initiative combines interactive learning experiences, community involvement, ' +
                    'and digital tools to instill a sense of environmental stewardship in the minds of children.',
                image: 'pictures/EcoEdu Explorers.jpg'}
        ]

        // Storage more projects
        let MoreProjects = [
            { title: 'Harmony Health Connect',
                description: 'Harmony Health Connect is a groundbreaking project by Harmony Hub that aims to bridge the ' +
                    'gap between technology and healthcare, providing an integrated platform to enhance health outcomes ' +
                    'and foster a holistic approach to well-being within our community.',
                image: 'pictures/Harmony Health Connect.jpg'}
        ]

        let CardContainer = document.getElementsByTagName("main")[0];

        // Loop to create every card in the storage
        Projects.forEach(project => {
            CreateProjectCard(project);
        })

        function CreateProjectCard(Project){
            // creating div for the card
            let Card = document.createElement('div');
            Card.setAttribute("class", "portfolioDiv")

            // create h2 tag for the title of the card
            let Title = document.createElement('h2');
            Title.setAttribute("class", "blog-title")
            // put the text into the h2 tag
            Title.textContent = Project.title;

            // create a paragraph tag to store the description of the card
            let Description = document.createElement('p');
            Description.setAttribute("class", "ProjectDescription");
            Description.setAttribute("class", "mt-3");
            // put the text into the p tag
            Description.textContent = Project.description;

            // create a picture tag to store the image of the project
            let Picture = document.createElement('img');
            Picture.setAttribute("class", "ProjImg")
            // add the image to the tag
            Picture.src = Project.image;
            // add an alternate text in case image does not load
            Picture.alt = Project.title

            // Append the tags to the card
            Card.appendChild(Title);
            Card.appendChild(Description);
            Card.appendChild(Picture);

            // Append div to main container
            CardContainer.appendChild(Card);
        }

        // make function to add more projects
        function AddMoreProjects(){
            // Clears the main tag project
            CardContainer.innerHTML = '';

            // Recreate the old project
            Projects.forEach(project => {
                CreateProjectCard(project);
            })

            // Creates new projects
            MoreProjects.forEach(MoreProject => {
                CreateProjectCard(MoreProject);
            })
        }

        let LoadMoreBtn = document.getElementById("LoadMoreBtn");
        LoadMoreBtn.addEventListener("click", function (){
            AddMoreProjects();
        });
    }
    function DisplayPrivacyPolicyPage(){
        console.log("Called DisplayPrivacyPolicyPage...");

    }
    function DisplayTeamPage(){
        console.log("Called DisplayServicePage...");
    }
    function DisplayTOSPage(){
        console.log("Called DisplayServicePage...");

    }


    function Start(){
        console.log("App Started...");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Blog":
                DisplayBlogPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
            case "Portfolio":
                DisplayPortfolioPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "PrivacyPolicy":
                DisplayPrivacyPolicyPage();
                break;
            case "Team":
                DisplayTeamPage();
                break;
            case "TOS":
                DisplayTOSPage();
                break;
        }
    }

    window.addEventListener("load", Start);

})();
