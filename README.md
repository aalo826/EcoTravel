# EcoTravel Website

## Project Overview
The EcoTravel webpage is designed to promote eco-friendly travel packages, offering users a chance to explore destinations that prioritize sustainability. This website serves information about EcoTravel’s offerings including a navigation bar and a travel package section, styled with Bootstrap CSS as well as custom CSS.

## Setup Instructions
To view the EcoTravel webpage locally you can open the index.html file provided in the EcoTravel.zip. Opening the index.html in your web browser will display the website.

## File Structure
- I have 4 folders and an index.html file along with the README.md file (what you are currently reading).

- The index.html is the main HTML file for the EcoTravel website, featuring a header with a navigation bar and multiple content sections all styled with BootStrap CSS. Since I used BootStrap CSS for my styling I appled both BootStrap and my own custom CSS styling throughout the project.

- The imgs folder holds six images I have used on the webpage. One of the images is the EcoTravel Logo. The other five images are scenery pictures of the travel destinations currently offered at EcoTravel.

- The styles folder holds my styles.css stylesheet. Inside this stylesheet I have made some custom styles to fine tune my website, addressing areas that Bootstrap CSS did not cover. Inside I included some broad styling for the body and footer, as well as general styling for the content divs I used. I also went more in detail on specific classes/divs making sure images were the right size and content was organized and displayed correctly.

- The js folder holds my scripts.js file. This file is responsible for many things:

  - Dynamic welcome message: This message changes depending on what time you visit the web page.
  - Dynamic content box: Clicking on the navbar items updates the content in the center of the page dynamically, providing a seamless user experience. I left the "home" content page as the default section so it isn't blank when you initially land the webpage.
  - Fade In effect: When clicking on the navbar navigation, the content fades in gradually which looks very nice opposed to instantly appearing. This smooth transition creates a more refined and professional appearance, making for a more engaging user experience.
  - Table Highlighting for Corresponding Travel Destinations: Clicking the buttons within the destination cards highlights the relevant details in the travel packages table, ensuring users can easily find the information they need.
  - Dynamic Map Updates: The embedded map will dynamically update to showcase the selected destination, providing users with a live view of the location.
  - Contact Submission Confirmation: Will give a message that the contact form is valid and successfully submitted. But as of now the submission is not yet implemented, but a placeholder message will still display.
- The other folder, which is empty can store other files such as media files for the future in case I want to update and improve the EcoTravel website.

## Author Information

My name is Aaron and I styled the EcoTravel webpage using BootStrap CSS and my own CSS. Reading through the documentation was hard as I didn't know where to start reading. I went through some of their example templates and skimmed through the documentation and found that it was similar to css styling, the names were very similar and it was all done through classes inside the element you wanted to style.

Although I prefer to use my own styles.css file, I think it's because I am used to styling on my own. If I work with more CSS frameworks I can see the benefit to how easy they are to integrate into your projects. This assignment was an eye opener for me in using CSS frameworks. Although there is a learning curve to using them, once you are used to working with CSS frameworks I can see how fast and easy styling can be using them.

I also included fade in effects, confirmation of submission button while preventing the submission itself so it would refresh my webpage. Although these were not required, I found it enhanced the user experience and overall were cool features that I enjoyed implementing.