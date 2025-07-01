



//First Section
export const firstSection = document.createElement("div")
firstSection.setAttribute("class", "first-section");

//Opening text
const openingText = document.createElement("div");
openingText.setAttribute("class", "opening-text");

const OTh1 = document.createElement("h1");
OTh1.textContent = "Welcome to Waluigi-Cafe";
const OTp = document.createElement("p");
OTp.textContent = "The wackiest waggish waterless restaurant of them wall!";

const FSimg = document.createElement("img");
FSimg.src = "https://nintendosoup.com/wp-content/uploads/2020/07/Wah-1038x576.jpg";

openingText.appendChild(OTh1);
openingText.appendChild(OTp);
firstSection.appendChild(openingText);
firstSection.appendChild(FSimg);


//Second Section
export const secondSection = document.createElement("div")
secondSection.setAttribute("class", "second-section");

const SSimg = document.createElement("img");
SSimg.src = "https://i.imgur.com/yxbTaky.png";
const SSp = document.createElement("p");
SSp.textContent = "Taste one of our Delicious Delirious Waluigi Made Meals";

secondSection.appendChild(SSimg);
secondSection.append(SSp);












