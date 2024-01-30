export function addHeaderTitle() {
    const header = document.getElementById('header');
    const headerTitle = document.createElement('h2');

    headerTitle.innerText = "// TODO LIST"

    header.appendChild(headerTitle);
}

export function addProjectButton() {
    const projectButtonDiv = document.getElementById('project-button-div');
    const newButton = document.createElement('button');

    newButton.innerText = "+"

    newButton.addEventListener('click', () => { console.log("Click") } )

    projectButtonDiv.appendChild(newButton)
}