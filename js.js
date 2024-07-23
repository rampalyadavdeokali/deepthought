const leftPanelBtn = document.querySelector('.panelHead i');
const leftPanel = document.querySelector('.leftPanel');
const ul = document.querySelector('#ul');
const one = document.querySelector('.one');


leftPanelBtn.addEventListener('click', () => {

    if (leftPanelBtn.className == "ri-arrow-right-circle-fill") {
        ul.style.opacity = 1;
        one.style.opacity = 0;
        leftPanel.style.left = 0;
        leftPanelBtn.classList.replace("ri-arrow-right-circle-fill", "ri-arrow-left-circle-fill");

    }
    else {
        ul.style.opacity = 0;
        one.style.opacity = 1;
        leftPanel.style.left = "-" + 285 + "px";
        leftPanelBtn.classList.replace("ri-arrow-left-circle-fill", "ri-arrow-right-circle-fill");

    }


});

const url = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json';


fetch(url)
    .then((response) => {
        const data = JSON.parse(response);
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
