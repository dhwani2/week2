/* Copy the HTML code into a new file, create a new JS file and use 
JS to convert the text in all the `h1` tags to uppercase. Also, 
add a background color of your choice all the unordered list items 
and add a dashed border around all the ordered list elements. In 
addition, change the text inside the box to say something else. 
Lastly, give the entire body a background color that is a shade of grey.*/

// WAIT for the page to load before doing anything
document.addEventListener("DOMContentLoaded", function () {
    
    // for uppercase
    let caseText = document.getElementsByTagName("h1");
    // for loop to cycle through all the h1 tags
    for (let i = 0; i < caseText.length; i++) {
        caseText[i].style.textTransform = "uppercase" 
    }

    // getting elements by tag unordered list
    let uoList = document.getElementsByTagName("ul");
    // cycle through each and set background color
    for (let  i = 0; i < uoList.length; i++) {
        uoList[i].style.backgroundColor = "red";
    }

    // dashed border
    let dashed = document.getElementsByTagName("ol");
    dashed[0].style.borderStyle = "dashed";

    // text inside the box
    let changeBoxText = document.getElementById("boxText");
    changeBoxText.textContent = "The changed text!";

    // background color, grey
    document.body.style.backgroundColor = "grey";

});



