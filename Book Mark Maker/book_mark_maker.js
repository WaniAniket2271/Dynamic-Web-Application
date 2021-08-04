let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];
let counter = bookmarks.length;

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

function validateName() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        return false;
    } else {
        siteNameErrMsg.textContent = "";
        return true;
    }
}

function validateUrl() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        return false;
    } else {
        siteUrlErrMsg.textContent = "";
        return true;
    }
}

function createAppendBookmark(object) {
    let listItem = document.createElement("li");
    listItem.classList.add("mb-4", "list-container", "d-flex", "flex-row", "justify-content-between");
    bookmarksList.appendChild(listItem);

    let heading = document.createElement("h1");
    heading.classList.add("list-heading");
    heading.textContent = object.name;
    listItem.appendChild(heading);

    let anchorEl = document.createElement("a");
    anchorEl.href = object.url;
    anchorEl.target = "_blank";
    listItem.appendChild(anchorEl);

    let button = document.createElement("button")
    button.classList.add("btn", "btn-primary");
    button.textContent = "Visit";
    anchorEl.appendChild(button);



}

siteNameInput.addEventListener("change", function() {
    validateName();
})
siteUrlInput.addEventListener("change", function() {
    validateUrl();
})
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateName();
    validateUrl();
    if (validateName() && validateUrl()) {
        counter += 1;
        let newObject = {
            bookmarkId: "bookmark" + counter,
            name: siteNameInput.value,
            url: siteUrlInput.value,
        }
        bookmarks.push(newObject);
        createAppendBookmark(newObject);
    }

})

createAppendBookmark(bookmarks[0]);