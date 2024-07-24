const leftPanelBtn = document.querySelector('.panelHead i');
const leftPanel = document.querySelector('.leftPanel');
const ul = document.querySelector('#ul');
const one = document.querySelector('.one');

// Journey Board Opne & Close Logic 
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


// JSON Data update logic 
const url = 'ddugky_project.json';

function fetchJSONData() {
    cardId = [18882, 18883, 18884, 18885, 18886];

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            // let this.data = JSON.parse(data);
            const task = data.tasks[0];
            task.assets.forEach(element => {
                cardId.forEach(e => {
                    const titleElement = document.getElementById(`${e}`);

                    if (titleElement.id == task.task_id) {
                        // Update the title of task
                        titleElement.children[0].innerHTML = `<h3>${task.task_title}</h3>`;
                        // Update the description of task
                        titleElement.children[1].innerHTML = `<p>${task.task_description.replaceAll(/\r\n/g, '')}</p>`;
                    }

                    if (titleElement.id == element.asset_id) {
                        // Update the title of cards
                        titleElement.children[0].innerHTML = `<h2>${element.asset_title}</h2> <i class="ri-information-2-fill"></i>`;
                        // Update the description of cards
                        titleElement.children[1].innerHTML = `<p> <span class="bold">Description : </span>${element.asset_description.replaceAll(/\r\n/g, '')}</p>`;
                    }
                });
            });
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();

