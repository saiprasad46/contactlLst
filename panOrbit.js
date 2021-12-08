let contactsList = [{
        '0': ['Antony', 'Aravind'],
        searchkey: 'a'
    },
    {
        '1': ['Brad', 'britLee'],
        searchkey: 'b'
    },

    {
        '2': ["Charlie"],
        searchkey: 'c'
    },
    {
        '3': ["Daniel", "Diego", "Dean"],
        searchkey: 'd'
    },
    {
        '4': ["james", "Jackson", "Jayden", "Jordan", "Justus"],
        searchkey: 'j'
    }
]


let toggleelement = false
let arrwoButton = document.getElementById("arrow")
let searchElement = document.getElementById("searchInput")
let ulListElement = document.getElementById("listItems")
let num = '0'
let searchInputVal = "";
ulListElement.classList.add("d-none")

function toggleConatcts() {
    if (toggleelement) {
        ulListElement.classList.add("d-none")
        toggleelement = false
    } else {
        ulListElement.classList.remove('d-none')
        toggleelement = true
    }
}

function renderContactList(items) {
    let listElementLetter = document.createElement("div")
    listElementLetter.classList.add("ulstyle")
    ulListElement.appendChild(listElementLetter)
    listElementLetter.textContent = items[num][0][0].toUpperCase()

    for (let i of items[num]) {
        let ListNames = document.createElement("li")
        ListNames.classList.add("contactsstyle")
        ListNames.textContent = i
        ulListElement.appendChild(ListNames)
    }
    num = parseInt(num) + 1
}

function displaySearchResults() {
    for (let contacts of contactsList) {
        let contactsName = contacts.searchkey;

        if (contactsName.includes(searchInputVal)) {
            renderContactList(contacts);
        }
    }
}

function onChangeSearchInput(event) {
    searchInputVal = event.target.value;
    ulListElement.textContent = ""
    if (searchInputVal == 'a') {
        num = 0
    } else if (searchInputVal == "b") {
        num = 1
    } else if (searchInputVal == 'c') {
        num = 2
    } else if (searchInputVal == 'd') {
        num = 3
    } else if (searchInputVal == 'j') {
        num = 4
    } else {
        num = 0
    }
    displaySearchResults()
}

displaySearchResults()
searchElement.addEventListener("keyup", onChangeSearchInput);