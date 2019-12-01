const dropDownList = document.getElementById("dropDownList");
const burgerButton = document.getElementById("burgerButton");
const outsideClick = document.getElementById("generalHideNavItem");

function toggleDropList() {
  if ((dropDownList.className = "hideDropDownList")) {
    dropDownList.classList.remove("hideDropDownList");
    dropDownList.classList.add("showDropDownList");
  }
}

//show or hide menu list
burgerButton.addEventListener("click", toggleDropList);

// hide menu-item on click outside the list of items
outsideClick.addEventListener("click", event => {
  if (
    event.target.parentElement !== dropDownList &&
    event.target.parentElement.firstElementChild !== burgerButton
  ) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
});
