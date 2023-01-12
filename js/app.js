//your-active-class

function addSections(numberOfSections) {
  const fragment = document.createDocumentFragment();
  const navBarFragment = document.createDocumentFragment();
  let sectionHeads = [];
  const navBarList = document.querySelector("#navbar__list");
  const mainContainer = document.querySelector("main");
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
  for (section of sectionHeads) {
    const listElement = document.createElement("li");
    listElement.setAttribute("class", "navbar__menu");
    const anchor = document.createElement("a");
    anchor.textContent = section;
    anchor.setAttribute("class", "menu__link");
    anchor.setAttribute("id", section);
    listElement.append(anchor);
    navBarFragment.append(listElement);
  }
  navBarList.append(navBarFragment);
}

addSections(5);
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
