

const imgChange = document.querySelector("#img");
const author = document.querySelector("#name");
const jobTitle = document.querySelector("#title");
const about = document.querySelector(".title-description");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
const extra = document.querySelector(".btn")


//array of different objects 
const reviews = [
    {
        Id: 1,
        name: "Mrs. Cynthia Bassey",
        job: "Affiliate Marketer",
        image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762020.jpg&fm=jpg&w=640&h=427&_gl=1*mn3tii*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDc4ODM1OC4xMi4xLjE2ODQ3ODg3MzMuMC4wLjA.",
        info: "An affiliate marketer is an independent marketer who partners with businesses to promote their goods instead of producing those goods. They commission every sale without worrying about customer service or inventory management.",

    },
    {
        Id: 2,
        name: "Mr. Kennedy Jones",
        job: "UI/UX Designer",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&w=640&h=960&_gl=1*1at1k7s*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDc4ODM1OC4xMi4xLjE2ODQ3ODg0MTguMC4wLjA.",
        info: "The UX designer role is to make a product or service usable, enjoyable, and accessible. While many companies design user experiences, the term is most often associated with digital design for websites and apps.",

    },
    {
        Id: 3,
        name: "Miss Kate Freeman",
        job: "Software Developer",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg&w=640&h=427&_gl=1*1x4u396*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDc4ODM1OC4xMi4xLjE2ODQ3ODg2NjMuMC4wLjA.",
        info: "Software developers create software to meet user needs by employing diagrams and models, writing code, and ensuring overall functionality. These professionals design, build, and implement computer programs and applications.",

    },
    {
        Id: 4,
        name: "Mr. Jonathan Agbo",
        job: "Graphics Designer",
        image: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?cs=srgb&dl=pexels-spencer-selover-428333.jpg&fm=jpg&w=640&h=427&_gl=1*17chg1l*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDc4ODM1OC4xMi4xLjE2ODQ3ODg4MTMuMC4wLjA.",
        info: "A graphic designer creates visual concepts to communicate ideas that inspire, inform, or captivate consumers. They work in a variety of industries, and use their skills to create logos, brochures, websites, packaging, and other promotional materials.",

    },
    {
        Id: 5,
        name: "Mr. Samuel Nwatu",
        job: "System Analyst",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg&w=640&h=427&_gl=1*165ynvy*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDc4ODM1OC4xMi4xLjE2ODQ3ODkyNzAuMC4wLjA.",
        info: "A systems analyst is an IT professional who works on a high level in an organization to ensure that systems, infrastructures and computer systems are functioning as effectively and efficiently as possible.",

    },
    {
        Id: 6,
        name: "Mr. Ugwu Daniel",
        job: "Web Developer",
        image: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-arie-voortman-715546.jpg&fm=jpg&w=640&h=427&_gl=1*10r7qqj*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDc4ODM1OC4xMi4xLjE2ODQ3ODk1NzIuMC4wLjA.",
        info: "Web developers usually fall under one of three categories: back-end developers, front-end developers, and full-stack developers. Some web developers also work as webmasters. Let’s take a closer look at each of these roles.",

    },
    {
        id: 7,
        name: "Mrs Nkechi Agbo",
        job: "Teacher",
        image:"https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?cs=srgb&dl=pexels-tarzine-jackson-773371.jpg&fm=jpg&w=640&h=427&_gl=1*nnyx4y*_ga*NDk5NDU3Nzk4LjE2NTg2NTI1MjE.*_ga_8JE65Q40S6*MTY4NDgzMjg0MS4xMy4xLjE2ODQ4MzI4NTMuMC4wLjA.",
        info:"A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue, via the practice of teaching. They are actually the most important people in the world of professionalism",
    }
];

//this is used in setting the deault array index to zero in the functions below
let currentItem = 0;


// //initialize items in the array.
function showPerson (person) {
    const item = reviews[person];
    imgChange.src = item.image;
    author.textContent = item.name;
    jobTitle.textContent = item.job;
    about.textContent = item.info;
    
}



function defaultPerson(person) {
    showPerson(currentItem);
}


// function that specifies what the previous and the next button does
function showPersonNext() {
    currentItem++;
    if (currentItem > reviews.length-1){
        currentItem = 6;
    }
    showPerson(currentItem);   

}
function showPersonPrevious() {
    currentItem--;
    if (currentItem < 0){
        currentItem = 0;
    }
    showPerson(currentItem);
}






// this is where I am trying to grab elemments from input in the HTML in order to attach them to the array

//defining the new elements variables from home.html
const newAuthor = document.querySelector("#name2");
const newJob = document.querySelector("#job2");
const newAbout = document.querySelector("#description2");
const submitBtn = document.querySelector("#submit-btn");
const imgNew = document.querySelector("#img-file");

//function that initializes the new element into the array "review"
function grabElements(pple) { // remove so it can be void
    const newItem = reviews[pple];
    newAuthor.textContent = newItem.name;
    imgNew.src = newItem.image;
    newJob.textContent = newItem.job;
    newAbout.textContent = newItem.info;

    newItem.shift(pple);
    
}


// buttons execute functions on click
nextBtn.addEventListener("click", showPersonNext);
previousBtn.addEventListener("click", showPersonPrevious);
window.addEventListener("DOMContentLoaded", defaultPerson);
submitBtn.addEventListener("click", grabElements);






















// nextBtn.addEventListener("click", changeProfile);



// function changeProfile() {
//     nameA.textContent.replace = ("Ugwu Daniel");
//     about.textContent = " whfeiufhovuih vehw voluv vlwvheu evh wewji vvuhwi vevh weovhivuihv v hvhnlv lv vv vn v evuvvni ";

// }