//your-active-class
const navBarList = document.querySelector("#navbar__list");
const scrollUpBttn = document.querySelector(".scrollToTop");
let movementFlag = false;

//this function takes a number and appends this many identical sections to the main body ,as well as add their names as anchor buttons into the navbar
function addSections(numberOfSections) {
  const fragment = document.createDocumentFragment();
  const mainContainer = document.querySelector("main");

  const navBarFragment = document.createDocumentFragment();
  //section heads is later used in making the list of nav bar anchors
  let sectionHeads = [];

  for (let i = 1; i <= numberOfSections; i++) {
    sectionHeads.push(`section ${i}`);
    const newSection = document.createElement("section");
    newSection.setAttribute("data-nav", `Section ${i}`);
    newSection.setAttribute("id", `section${i}`);
    const container = document.createElement("div");
    container.setAttribute("class", "landing__container");
    const header = document.createElement("h2");
    header.textContent = `section ${i}`;
    const firstParagraph = document.createElement("p");
    firstParagraph.textContent =
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi\
            fermentum metus faucibus lectus pharetra dapibus. Suspendisse\
            potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget\
            lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed\
            convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla\
            eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam\
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis\
            lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a\
            tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus\
            vitae elit. Integer nec libero venenatis libero ultricies molestie\
            semper in tellus. Sed congue et odio sed euismod.";

    const secondParagraph = document.createElement("p");
    secondParagraph.textContent =
      "            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar\
            gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.\
            Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum\
            consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget\
            elementum tortor mollis non.";

    container.appendChild(header);
    container.appendChild(firstParagraph);
    container.appendChild(secondParagraph);
    newSection.appendChild(container);
    fragment.append(newSection);
  }
  mainContainer.append(fragment);
  for (index of sectionHeads.keys()) {
    const listElement = document.createElement("li");
    listElement.setAttribute("class", "navbar__menu");
    const anchor = document.createElement("a");
    anchor.textContent = sectionHeads[index];
    anchor.setAttribute("class", "menu__link");
    anchor.setAttribute("id", index + 1);
    listElement.append(anchor);
    navBarFragment.append(listElement);
  }
  navBarList.append(navBarFragment);
}

//use my section creator to make 5 sections and append them
addSections(5);

//highlight a section that comes into view during regular scrolling as well as remove the highlighting from other sections
function HighlightSection() {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 250 && box.bottom >= 250) {
      section.classList.contains("your-active-class")
        ? null
        : section.classList.add("your-active-class");
    } else {
      section.classList.contains("your-active-class")
        ? section.classList.remove("your-active-class")
        : null;
    }
  }
}

// get the id from a click on the navbar and scroll to the corresponding section if it is not already in view and highlight it if is not already highlighted
// as well as removing the highlighting from other sections
function handleAnchorClick(event) {
  const requiredSection = document.querySelector(`#section${event.target.id}`);
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.contains("your-active-class")
      ? section.classList.remove("your-active-class")
      : null;
  });
  requiredSection.getBoundingClientRect().top !== 0
    ? requiredSection.scrollIntoView({ behavior: "smooth" })
    : null;
  requiredSection.classList.contains("your-active-class")
    ? null
    : requiredSection.classList.add("your-active-class");
}

//display the navbar if this is called and set a timeout for it to be hidden again
function displayTopMenu() {
  const navBarContainer = document.querySelector(".navbar__menu");
  navBarContainer.removeAttribute("hidden");
  movementFlag = false;
  const interval = setTimeout(() => {
    !movementFlag ? navBarContainer.setAttribute("hidden", true) : null;
  }, 5000);
  if (movementFlag) clearTimeout(interval);
}

//capture scroll events and use it to highlight sections in view\display scroll up button if we are at the bottom and show the navBar
document.addEventListener("scroll", () => {
  movementFlag = true;
  scrollUpBttn.getBoundingClientRect().top < 800
    ? scrollUpBttn.removeAttribute("hidden")
    : null;
  displayTopMenu();
  HighlightSection();
});

document.addEventListener("mousemove", () => {
  movementFlag = true;
  displayTopMenu();
});

//capture and handle clicks on the navbar items
navBarList.addEventListener("click", (event) => {
  movementFlag = true;
  handleAnchorClick(event);
  displayTopMenu();
});

//check if the scroll up button was clicked and go to the top of the page if so
scrollUpBttn.addEventListener("click", () => {
  const mainSection = document.querySelector("main");
  mainSection.scrollIntoView({ behavior: "smooth" });
});

//listOfItems.append(fragment);
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
