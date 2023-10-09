import { useLoggedInUser } from "./createaccountscript.js";
import { onlineGuest } from "./createaccountscript.js";

var onlineUser = JSON.parse(localStorage.getItem("onlineUser"));
// Check if there's an online user if not then it is a guest
if (!onlineUser) {
  onlineUser = onlineGuest();
}
console.log(onlineUser);

// onlineUser.state = localStorage.getItem("state"); work on how to keep a user logged in even after refresh
// console.log(onlineUser);
// console.log(guest);

//online user indicators
const displayUsername = document.getElementById("dis-user");
const displayShop = document.getElementById("dis-shop");

//Log Out Button
const logOut = document
  .getElementById("log-out-out")
  .addEventListener("click", () => {
    localStorage.removeItem("state");
  });

//Function to display respective inicators
displayUsername.innerText = onlineUser.Username.toUpperCase();
displayShop.innerText = onlineUser.Storename;

// different tabs
const dashBoardTab = document.getElementById("dash");
const itemsTab = document.getElementById("item");
const purchaseTab = document.getElementById("pchase");
const vendorTab = document.getElementById("vendor");
const salesTab = document.getElementById("sale");
const searchTab = document.getElementById("search");
const recordTab = document.getElementById("record");
const profileTab = document.getElementById("u-profile");

// tabs parameter containers
const selectedTab = document.getElementById("selected-tab");
const indicateTab = document.getElementById("tab-indicator");

//number inputs
const numberInputs = document.querySelectorAll('input[type="number"]');

// tabs contents containers
const errorMessage = document.getElementById("error");
const errorRemove = document.getElementById("error-cancel");
const dashBoardTabcontent = document.getElementById("dash-board-container");
const itemTabcontent = document.getElementById("item-add-container");
const searchTabcontent = document.getElementById("table-container");
const purchaseTabcontent = document.getElementById("purchase-container");
const salesTabcontent = document.getElementById("sales-container");
const vendorTabcontent = document.getElementById("vendor-container");
const recordTabcontent = document.getElementById("records-container");
const profileTabcontent = document.getElementById("profile-container");

// item dataTab details
let itemNumber = document.getElementById("serial");
let itemName = document.getElementById("nomencleture");
let itemStatus = document.getElementById("statz");
let itemDescription = document.getElementById("describe");
let itemDiscount = document.getElementById("disc");
let itemQuantity = document.getElementById("quant");
let itemUnitPrice = document.getElementById("unip");
let itemProductId = document.getElementById("item-p-id");
// itemsearch table
let searchTable = document.getElementById("search-table");
//add item buttons
let enRollitem = document.getElementById("enroll");
let addItem = document.getElementById("add");
let clearitemForm = document.getElementById("clear");

// purchase dataTab details
let purchaseNumber = document.getElementById("p-item-num");
let purchaseDate = document.getElementById("p-date");
let purchaseId = document.getElementById("p-id");
let purchaseName = document.getElementById("p-name");
let purchaseStock = document.getElementById("p-stock");
let purchaseVendor = document.getElementById("p-vendor");
let purchaseQuantity = document.getElementById("p-quant");
let purchaseunitCost = document.getElementById("p-unit");
let purchasetotalCost = document.getElementById("p-total");
// purchase buttons
let enrollPurchase = document.getElementById("enroll-p");
let addPurchase = document.getElementById("add-p");
let clearpurchaseForm = document.getElementById("clear-p");

// sales dataTab details
let saleNumber = document.getElementById("sales-num");
let saleId = document.getElementById("sale-id");
let saleName = document.getElementById("sale-name");
let saleDate = document.getElementById("sale-date");
let saletotalStock = document.getElementById("sale-stock");
let saleDiscount = document.getElementById("sale-discount");
let saleQuantity = document.getElementById("sale-quantity");
let saleunitPrice = document.getElementById("sale-unit-price");
let saleTotal = document.getElementById("sale-total");
// sale buttons
let saleEnroll = document.getElementById("sale-enroll");
let addSale = document.getElementById("sale-add");
let clearsaleForm = document.getElementById("sale-clear");

//vendor dataTab details
let vendorName = document.getElementById("vendor-name");
let vendorStatus = document.getElementById("vendor-status");
let vendorId = document.getElementById("vendor-id");
let vendorPhone1 = document.getElementById("vendor-phone1");
let vendorphone2 = document.getElementById("vendor-phone2");
let vendorEmail = document.getElementById("vendor-mail");
let vendorAddress1 = document.getElementById("vendor-address1");
let vendorAddress2 = document.getElementById("vendor-address2");
let vendorCity = document.getElementById("vendor-city");
//vendor buttons
let enrollVendor = document.getElementById("vendor-enroll");
let addVendor = document.getElementById("vendor-add");
let clearvendorForm = document.getElementById("vendor-clear");

// record sections
const purchaseRecord = document.getElementById("purchase-rec");
const salesRecord = document.getElementById("sales-rec");
const vendorsRecord = document.getElementById("vendors-rec");
const recordIcon = document.getElementById("history-icon");
// record section tables (these are the table containers , the actual tables are contained within each)
let purchaseTable = document.getElementById("purchase-table");
let salesTable = document.getElementById("sales-table");
let vendorsTable = document.getElementById("vendors-table");

//User profileTab details
const myFullname = document.getElementById("fullname-here");
const myUsername = document.getElementById("username-here");
const myStorename = document.getElementById("storename-here");
const myEmail = document.getElementById("email-here");
const myPassword = document.getElementById("password-here");

//Guest profileTab content
if (!onlineUser.PassWord) {
  profileTabcontent.innerHTML = "<h2>GUEST</h2>";
}

//User profileTab buttons and Functions
const myEditBtn = document.getElementById("u-edit");

if (myEditBtn) {
  myEditBtn.addEventListener("click", () => {
    // Make the input editable
    myFullname.readOnly = false;
    myUsername.readOnly = false;
    myStorename.readOnly = false;
    myEmail.readOnly = false;
    myPassword.readOnly = false;

    myFullname.classList.toggle("edit-click");
    myUsername.classList.toggle("edit-click");
    myStorename.classList.toggle("edit-click");
    myEmail.classList.toggle("edit-click");
    myPassword.classList.toggle("edit-click");
  });
}
const mySaveBtn = document.getElementById("u-save");

if(mySaveBtn) {
  mySaveBtn.addEventListener("click", () => {
    myFullname.readOnly = true;
    myUsername.readOnly = true;
    myStorename.readOnly = true;
    myEmail.readOnly = true;
    myPassword.readOnly = true;
  
    onlineUser.Fullname = myFullname.value;
    onlineUser.Username = myUsername.value;
    onlineUser.Storename = myStorename.value;
    onlineUser.Email = myEmail.value;
    onlineUser.PassWord = myPassword.value;
    localStorage.setItem("onlineUser", JSON.stringify(onlineUser));
    
  
    let usersUpdate = JSON.parse(localStorage.getItem("userRaw")) || [];
  
    // Find the index of the currently logged in user within the array
    const loggedInUserIndex = usersUpdate.findIndex(
      (user) => user.id === onlineUser.id
    );
  
  
  
    if (loggedInUserIndex !== -1) {
      usersUpdate[loggedInUserIndex].Fullname = myFullname.value;
      usersUpdate[loggedInUserIndex].Username = myUsername.value;
      usersUpdate[loggedInUserIndex].Storename = myStorename.value;
      usersUpdate[loggedInUserIndex].Email = myEmail.value;
      usersUpdate[loggedInUserIndex].Password = myPassword.value;
  
      // Save the updated array of users back to local storage
      localStorage.setItem("userRaw", JSON.stringify(usersUpdate));
    }
    alert("SAVED!");
    myFullname.classList.remove("edit-click");
    myUsername.classList.remove("edit-click");
    myStorename.classList.remove("edit-click");
    myEmail.classList.remove("edit-click");
    myPassword.classList.remove("edit-click");
  });
}

//function to display details of user accordingly on the userprofile Tab
myFullname.value = onlineUser.Fullname;
myUsername.value = onlineUser.Username;
myStorename.value = onlineUser.Storename;
myEmail.value = onlineUser.Email;
myPassword.value = onlineUser.PassWord;

// nav toggle function
const navToggle = document.getElementById("navi-toggle");
// const navToggle2 = Document.getElementById("navi-toggle2");
const navBar = document.getElementById("navi-bar");

// Adding the inventory Data into the online user object
var itemRough = JSON.parse(localStorage.getItem("itemRough")) || [];
onlineUser.itemsData = JSON.parse(localStorage.getItem("itemRough")) || [];

var purchaseRough = JSON.parse(localStorage.getItem("purchaseRough")) || [];
onlineUser.purchaseData =
  JSON.parse(localStorage.getItem("purchaseRough")) || [];

var saleRough = JSON.parse(localStorage.getItem("saleRough")) || [];
onlineUser.saleData = JSON.parse(localStorage.getItem("saleRough")) || [];

var vendorRough = JSON.parse(localStorage.getItem("vendorRough")) || [];
onlineUser.vendorData = JSON.parse(localStorage.getItem("vendorRough")) || [];

//Functions to save Inventory Data to an Object and push into the corresponding Array
function itemDataObj() {
  return {
    id: onlineUser.id || onlineUser.Username,
    serial: onlineUser.itemsData.length,
    number: itemNumber.value,
    productID: itemProductId.value,
    name: itemName.value,
    status: itemStatus.value,
    quantity: itemQuantity.value,
    discount: itemDiscount.value,
    unitprice: itemUnitPrice.value,
    description: itemDescription.value,
  };
}

function itemPurchaseObj() {
  return {
    id: onlineUser.id || onlineUser.Username,
    serial: onlineUser.purchaseData.length,
    number: purchaseNumber.value,
    date: purchaseDate.value,
    purchaseID: purchaseId.value,
    name: purchaseName.value,
    stock: purchaseStock.value,
    vendor: purchaseVendor.value,
    quantity: purchaseQuantity.value,
    unitcost: purchaseunitCost.value,
    totalcost: purchasetotalCost.value,
  };
}

function itemSaleObj() {
  return {
    id: onlineUser.id || onlineUser.Username,
    serial: onlineUser.saleData.length,
    number: saleNumber.value,
    saleID: saleId.value,
    name: saleName.value,
    date: saleDate.value,
    stock: saletotalStock.value,
    discount: saleDiscount.value,
    quantity: saleQuantity.value,
    unitprice: saleunitPrice.value,
    totalprice: saleTotal.value,
  };
}

function vendorObj() {
  return {
    id: onlineUser.id || onlineUser.Username,
    serial: onlineUser.vendorData.length,
    name: vendorName.value,
    status: vendorStatus.value,
    vendorID: vendorId.value,
    phone1: vendorPhone1.value,
    phone2: vendorphone2.value,
    email: vendorEmail.value,
    address1: vendorAddress1.value,
    address2: vendorAddress2.value,
    city: vendorCity.value,
  };
}

//Functions to get Data and push into eachcorresponding table respectively
function itemSearchContent() {
  onlineUser.itemsData.map((each) => {
    if (each.id == onlineUser.id) {
      let itemRows = document.createElement("tr");
      itemRows.classList.add("data-row");

      let itemData1 = document.createElement("td");
      itemData1.innerHTML = each.number;
      let itemData2 = document.createElement("td");
      itemData2.innerHTML = each.productID;
      let itemData3 = document.createElement("td");
      itemData3.innerHTML = each.name;
      let itemData4 = document.createElement("td");
      itemData4.innerHTML = each.status;
      let itemData5 = document.createElement("td");
      itemData5.innerHTML = each.quantity;
      let itemData6 = document.createElement("td");
      itemData6.innerHTML = each.discount;
      let itemData7 = document.createElement("td");
      itemData7.innerHTML = each.unitprice;
      let itemData8 = document.createElement("td");
      itemData8.innerHTML = each.description;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        searchTable.removeChild(itemRows);
        itemRough.splice(each.serial, 1);
        localStorage.setItem("itemRough", JSON.stringify(itemRough));
      });

      itemRows.appendChild(itemData1);
      itemRows.appendChild(itemData2);
      itemRows.appendChild(itemData3);
      itemRows.appendChild(itemData4);
      itemRows.appendChild(itemData5);
      itemRows.appendChild(itemData6);
      itemRows.appendChild(itemData7);
      itemRows.appendChild(itemData8);
      itemRows.appendChild(delcontain);

      searchTable.appendChild(itemRows);
    } else if (each.id == onlineUser.Username) {
      let itemRows = document.createElement("tr");
      itemRows.classList.add("data-row");

      let itemData1 = document.createElement("td");
      itemData1.innerHTML = each.number;
      let itemData2 = document.createElement("td");
      itemData2.innerHTML = each.productID;
      let itemData3 = document.createElement("td");
      itemData3.innerHTML = each.name;
      let itemData4 = document.createElement("td");
      itemData4.innerHTML = each.status;
      let itemData5 = document.createElement("td");
      itemData5.innerHTML = each.quantity;
      let itemData6 = document.createElement("td");
      itemData6.innerHTML = each.discount;
      let itemData7 = document.createElement("td");
      itemData7.innerHTML = each.unitprice;
      let itemData8 = document.createElement("td");
      itemData8.innerHTML = each.description;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        searchTable.removeChild(itemRows);
        itemRough.splice(each.serial, 1);
        localStorage.setItem("itemRough", JSON.stringify(itemRough));
      });

      itemRows.appendChild(itemData1);
      itemRows.appendChild(itemData2);
      itemRows.appendChild(itemData3);
      itemRows.appendChild(itemData4);
      itemRows.appendChild(itemData5);
      itemRows.appendChild(itemData6);
      itemRows.appendChild(itemData7);
      itemRows.appendChild(itemData8);
      itemRows.appendChild(delcontain);

      searchTable.appendChild(itemRows);
    }
  });
}
itemSearchContent();

function purchaseContent() {
  onlineUser.purchaseData.map((each) => {
    if (each.id == onlineUser.id) {
      let purchasemainTable = document.getElementById("p-main-table");

      let purchaseRows = document.createElement("tr");
      purchaseRows.classList.add("data-row");

      let purchaseData1 = document.createElement("td");
      purchaseData1.innerText = each.number;
      let purchaseData2 = document.createElement("td");
      purchaseData2.innerText = each.date;
      let purchaseData3 = document.createElement("td");
      purchaseData3.innerHTML = each.purchaseID;
      let purchaseData4 = document.createElement("td");
      purchaseData4.innerHTML = each.name;
      let purchaseData5 = document.createElement("td");
      purchaseData5.innerHTML = each.stock;
      let purchaseData6 = document.createElement("td");
      purchaseData6.innerHTML = each.vendor;
      let purchaseData7 = document.createElement("td");
      purchaseData7.innerHTML = each.quantity;
      let purchaseData8 = document.createElement("td");
      purchaseData8.innerHTML = each.unitcost;
      let purchaseData9 = document.createElement("td");
      purchaseData9.innerHTML = each.totalcost;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        purchasemainTable.removeChild(purchaseRows);
        purchaseRough.splice(each.serial, 1);
        localStorage.setItem("purchaseRough", JSON.stringify(purchaseRough));
      });

      purchaseRows.appendChild(purchaseData1);
      purchaseRows.appendChild(purchaseData2);
      purchaseRows.appendChild(purchaseData3);
      purchaseRows.appendChild(purchaseData4);
      purchaseRows.appendChild(purchaseData5);
      purchaseRows.appendChild(purchaseData6);
      purchaseRows.appendChild(purchaseData7);
      purchaseRows.appendChild(purchaseData8);
      purchaseRows.appendChild(purchaseData9);
      purchaseRows.appendChild(delcontain);

      purchasemainTable.appendChild(purchaseRows);
    } else if (each.id == onlineUser.Username) {
      let purchasemainTable = document.getElementById("p-main-table");

      let purchaseRows = document.createElement("tr");
      purchaseRows.classList.add("data-row");

      let purchaseData1 = document.createElement("td");
      purchaseData1.innerText = each.number;
      let purchaseData2 = document.createElement("td");
      purchaseData2.innerText = each.date;
      let purchaseData3 = document.createElement("td");
      purchaseData3.innerHTML = each.purchaseID;
      let purchaseData4 = document.createElement("td");
      purchaseData4.innerHTML = each.name;
      let purchaseData5 = document.createElement("td");
      purchaseData5.innerHTML = each.stock;
      let purchaseData6 = document.createElement("td");
      purchaseData6.innerHTML = each.vendor;
      let purchaseData7 = document.createElement("td");
      purchaseData7.innerHTML = each.quantity;
      let purchaseData8 = document.createElement("td");
      purchaseData8.innerHTML = each.unitcost;
      let purchaseData9 = document.createElement("td");
      purchaseData9.innerHTML = each.totalcost;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        purchasemainTable.removeChild(purchaseRows);
        purchaseRough.splice(each.serial, 1);
        localStorage.setItem("purchaseRough", JSON.stringify(purchaseRough));
      });

      purchaseRows.appendChild(purchaseData1);
      purchaseRows.appendChild(purchaseData2);
      purchaseRows.appendChild(purchaseData3);
      purchaseRows.appendChild(purchaseData4);
      purchaseRows.appendChild(purchaseData5);
      purchaseRows.appendChild(purchaseData6);
      purchaseRows.appendChild(purchaseData7);
      purchaseRows.appendChild(purchaseData8);
      purchaseRows.appendChild(purchaseData9);
      purchaseRows.appendChild(delcontain);

      purchasemainTable.appendChild(purchaseRows);
    }
  });
}
purchaseContent();

function saleContent() {
  onlineUser.saleData.map((each) => {
    if (each.id == onlineUser.id) {
      let salemainTable = document.getElementById("s-main-table");

      let saleRows = document.createElement("tr");
      saleRows.classList.add("data-row");

      let saleData1 = document.createElement("td");
      saleData1.innerHTML = each.number;
      let saleData2 = document.createElement("td");
      saleData2.innerHTML = each.saleID;
      let saleData3 = document.createElement("td");
      saleData3.innerHTML = each.name;
      let saleData4 = document.createElement("td");
      saleData4.innerHTML = each.date;
      let saleData5 = document.createElement("td");
      saleData5.innerHTML = each.stock;
      let saleData6 = document.createElement("td");
      saleData6.innerHTML = each.discount;
      let saleData7 = document.createElement("td");
      saleData7.innerHTML = each.quantity;
      let saleData8 = document.createElement("td");
      saleData8.innerHTML = each.unitprice;
      let saleData9 = document.createElement("td");
      saleData9.innerHTML = each.totalprice;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        salemainTable.removeChild(saleRows);
        saleRough.splice(each.serial, 1);
        localStorage.setItem("saleRough", JSON.stringify(saleRough));
      });

      saleRows.appendChild(saleData1);
      saleRows.appendChild(saleData2);
      saleRows.appendChild(saleData3);
      saleRows.appendChild(saleData4);
      saleRows.appendChild(saleData5);
      saleRows.appendChild(saleData6);
      saleRows.appendChild(saleData7);
      saleRows.appendChild(saleData8);
      saleRows.appendChild(saleData9);
      saleRows.appendChild(delcontain);

      salemainTable.appendChild(saleRows);
    } else if (each.id == onlineUser.Username) {
      let salemainTable = document.getElementById("s-main-table");

      let saleRows = document.createElement("tr");
      saleRows.classList.add("data-row");

      let saleData1 = document.createElement("td");
      saleData1.innerHTML = each.number;
      let saleData2 = document.createElement("td");
      saleData2.innerHTML = each.saleID;
      let saleData3 = document.createElement("td");
      saleData3.innerHTML = each.name;
      let saleData4 = document.createElement("td");
      saleData4.innerHTML = each.date;
      let saleData5 = document.createElement("td");
      saleData5.innerHTML = each.stock;
      let saleData6 = document.createElement("td");
      saleData6.innerHTML = each.discount;
      let saleData7 = document.createElement("td");
      saleData7.innerHTML = each.quantity;
      let saleData8 = document.createElement("td");
      saleData8.innerHTML = each.unitprice;
      let saleData9 = document.createElement("td");
      saleData9.innerHTML = each.totalprice;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        salemainTable.removeChild(saleRows);
        saleRough.splice(each.serial, 1);
        localStorage.setItem("saleRough", JSON.stringify(saleRough));
      });

      saleRows.appendChild(saleData1);
      saleRows.appendChild(saleData2);
      saleRows.appendChild(saleData3);
      saleRows.appendChild(saleData4);
      saleRows.appendChild(saleData5);
      saleRows.appendChild(saleData6);
      saleRows.appendChild(saleData7);
      saleRows.appendChild(saleData8);
      saleRows.appendChild(saleData9);
      saleRows.appendChild(delcontain);

      salemainTable.appendChild(saleRows);
    }
  });
}
saleContent();

function vendorContent() {
  onlineUser.vendorData.map((each) => {
    if (each.id == onlineUser.id) {
      let vendormainTable = document.getElementById("v-main-table");

      let vendorRows = document.createElement("tr");
      vendorRows.classList.add("data-row");

      let vendorData1 = document.createElement("td");
      vendorData1.innerHTML = each.name;
      let vendorData2 = document.createElement("td");
      vendorData2.innerHTML = each.status;
      let vendorData3 = document.createElement("td");
      vendorData3.innerHTML = each.vendorID;
      let vendorData4 = document.createElement("td");
      vendorData4.innerHTML = each.phone1;
      let vendorData5 = document.createElement("td");
      vendorData5.innerHTML = each.phone2;
      let vendorData6 = document.createElement("td");
      vendorData6.innerHTML = each.email;
      let vendorData7 = document.createElement("td");
      vendorData7.innerHTML = each.address1;
      let vendorData8 = document.createElement("td");
      vendorData8.innerHTML = each.address2;
      let vendorData9 = document.createElement("td");
      vendorData9.innerHTML = each.city;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        vendormainTable.removeChild(vendorRows);
        vendorRough.splice(each.serial, 1);
        localStorage.setItem("vendorRough", JSON.stringify(vendorRough));
      });

      vendorRows.appendChild(vendorData1);
      vendorRows.appendChild(vendorData2);
      vendorRows.appendChild(vendorData3);
      vendorRows.appendChild(vendorData4);
      vendorRows.appendChild(vendorData5);
      vendorRows.appendChild(vendorData6);
      vendorRows.appendChild(vendorData7);
      vendorRows.appendChild(vendorData8);
      vendorRows.appendChild(vendorData9);
      vendorRows.appendChild(delcontain);

      vendormainTable.appendChild(vendorRows);

      let purchaseVendorOption = document.createElement("option");
      purchaseVendorOption.value = each.name;
      purchaseVendorOption.innerText = each.name;
      purchaseVendor.appendChild(purchaseVendorOption);
    } else if (each.id == onlineUser.Username) {
      let vendormainTable = document.getElementById("v-main-table");

      let vendorRows = document.createElement("tr");
      vendorRows.classList.add("data-row");

      let vendorData1 = document.createElement("td");
      vendorData1.innerHTML = each.name;
      let vendorData2 = document.createElement("td");
      vendorData2.innerHTML = each.status;
      let vendorData3 = document.createElement("td");
      vendorData3.innerHTML = each.vendorID;
      let vendorData4 = document.createElement("td");
      vendorData4.innerHTML = each.phone1;
      let vendorData5 = document.createElement("td");
      vendorData5.innerHTML = each.phone2;
      let vendorData6 = document.createElement("td");
      vendorData6.innerHTML = each.email;
      let vendorData7 = document.createElement("td");
      vendorData7.innerHTML = each.address1;
      let vendorData8 = document.createElement("td");
      vendorData8.innerHTML = each.address2;
      let vendorData9 = document.createElement("td");
      vendorData9.innerHTML = each.city;
      let delcontain = document.createElement("td");
      delcontain.classList.add("del-icon");
      let del = document.createElement("i");
      del.classList.add("fa-solid", "fa-trash", "fa-lg");
      delcontain.appendChild(del);

      delcontain.addEventListener("click", () => {
        vendormainTable.removeChild(vendorRows);
        vendorRough.splice(each.serial, 1);
        localStorage.setItem("vendorRough", JSON.stringify(vendorRough));
      });

      vendorRows.appendChild(vendorData1);
      vendorRows.appendChild(vendorData2);
      vendorRows.appendChild(vendorData3);
      vendorRows.appendChild(vendorData4);
      vendorRows.appendChild(vendorData5);
      vendorRows.appendChild(vendorData6);
      vendorRows.appendChild(vendorData7);
      vendorRows.appendChild(vendorData8);
      vendorRows.appendChild(vendorData9);
      vendorRows.appendChild(delcontain);

      vendormainTable.appendChild(vendorRows);

      let purchaseVendorOption = document.createElement("option");
      purchaseVendorOption.value = each.name;
      purchaseVendorOption.innerText = each.name;
      purchaseVendor.appendChild(purchaseVendorOption);
    }
  });
}
vendorContent();

// nav bar tabs click functions
dashBoardTab.addEventListener("click", () => {
  dashBoardTab.style.backgroundColor = "orangered";
  dashBoardTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.hover = "background-color: orangered;";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Dashboard";
  indicateTab.innerText = "summary";
  dashBoardTabcontent.style.display = "initial";
  // dashBoardTabcontent.style.marginLeft = "1em";
  // dashBoardTabcontent.style.marginTop = "1em";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
  profileTabcontent.style.display = "none";
});

itemsTab.addEventListener("click", () => {
  itemsTab.style.backgroundColor = "orangered";
  itemsTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.hover = "background-color: orangered;";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Item Details";
  indicateTab.innerText = "Item";
  itemTabcontent.style.display = "initial";
  dashBoardTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
  profileTabcontent.style.display = "none";
});

purchaseTab.addEventListener("click", () => {
  purchaseTab.style.backgroundColor = "orangered";
  purchaseTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Purchase";
  indicateTab.innerText = "purchase details";
  dashBoardTabcontent.style.display = "none";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "initial";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
  profileTabcontent.style.display = "none";
});

vendorTab.addEventListener("click", () => {
  vendorTab.style.backgroundColor = "orangered";
  vendorTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Vendor";
  indicateTab.innerText = "Vendor details";
  dashBoardTabcontent.style.display = "none";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "initial";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
  profileTabcontent.style.display = "none";
});

salesTab.addEventListener("click", () => {
  salesTab.style.backgroundColor = "orangered";
  salesTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Sales";
  indicateTab.innerText = "sale details";
  dashBoardTabcontent.style.display = "none";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "initial";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
  profileTabcontent.style.display = "none";
});

searchTab.addEventListener("click", () => {
  searchTab.style.backgroundColor = "orangered";
  searchTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Search";
  indicateTab.style.display = "initial";
  indicateTab.innerText = "search items";
  dashBoardTabcontent.style.display = "none";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "initial";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
  profileTabcontent.style.display = "none";
});

recordTab.addEventListener("click", () => {
  recordTab.style.backgroundColor = "orangered";
  recordTab.style.color = "white";
  profileTab.style.backgroundColor = "initial";
  profileTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "Records";
  indicateTab.innerHTML = recordIcon.innerHTML;
  dashBoardTabcontent.style.display = "none";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  purchaseRecord.style.display = "initial";
  salesRecord.style.display = "initial";
  vendorsRecord.style.display = "initial";
  recordTabcontent.style.display = "initial";
  profileTabcontent.style.display = "none";
});

profileTab.addEventListener("click", () => {
  profileTab.style.backgroundColor = "orangered";
  profileTab.style.color = "white";
  recordTab.style.backgroundColor = "initial";
  recordTab.style.color = "rgb(41, 150, 193)";
  dashBoardTab.style.backgroundColor = "initial";
  dashBoardTab.style.color = "rgb(41, 150, 193)";
  itemsTab.style.backgroundColor = "initial";
  itemsTab.style.color = "rgb(41, 150, 193)";
  searchTab.style.backgroundColor = "initial";
  searchTab.style.color = "rgb(41, 150, 193)";
  purchaseTab.style.backgroundColor = "initial";
  purchaseTab.style.color = "rgb(41, 150, 193)";
  salesTab.style.backgroundColor = "initial";
  salesTab.style.color = "rgb(41, 150, 193)";
  vendorTab.style.backgroundColor = "initial";
  vendorTab.style.color = "rgb(41, 150, 193)";
  selectedTab.innerText = "User";
  indicateTab.innerHTML = "Profile";
  dashBoardTabcontent.style.display = "none";
  itemTabcontent.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  purchaseRecord.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  profileTabcontent.style.display = "flex";
});

// different record sections purchase sales and vendors
purchaseRecord.style.cursor = "pointer";
purchaseRecord.addEventListener("click", () => {
  purchaseTable.style.display = "initial";
  salesTable.style.display = "none";
  vendorsTable.style.display = "none";
  purchaseRecord.style.backgroundColor = "orangered";
  purchaseRecord.style.color = "white";
  salesRecord.style.backgroundColor = "initial";
  salesRecord.style.color = "rgb(41, 150, 193)";
  vendorsRecord.style.backgroundColor = "initial";
  vendorsRecord.style.color = "rgb(41, 150, 193)";
  purchaseTable.firstElementChild.style.width = "100%";
  purchaseTable.firstElementChild.style.marginTop = "1.5em";
  // recordTabcontent.innerHTML = purchaseTable.innerHTML;
});
salesRecord.addEventListener("click", () => {
  salesTable.style.display = "initial";
  purchaseTable.style.display = "none";
  vendorsTable.style.display = "none";
  salesRecord.style.backgroundColor = "orangered";
  salesRecord.style.color = "white";
  purchaseRecord.style.backgroundColor = "initial";
  purchaseRecord.style.color = "rgb(41, 150, 193)";
  vendorsRecord.style.backgroundColor = "initial";
  vendorsRecord.style.color = "rgb(41, 150, 193)";
  salesTable.firstElementChild.style.width = "100%";
  salesTable.firstElementChild.style.marginTop = "1.5em";
  // recordTabcontent.innerHTML = salesTable.innerHTML;
});
vendorsRecord.addEventListener("click", () => {
  vendorsTable.style.display = "initial";
  purchaseTable.style.display = "none";
  salesTable.style.display = "none";
  vendorsRecord.style.backgroundColor = "orangered";
  vendorsRecord.style.color = "white";
  purchaseRecord.style.backgroundColor = "initial";
  purchaseRecord.style.color = "rgb(41, 150, 193)";
  salesRecord.style.backgroundColor = "initial";
  salesRecord.style.color = "rgb(41, 150, 193)";
  vendorsTable.firstElementChild.style.width = "100%";
  vendorsTable.firstElementChild.style.marginTop = "1.5em";
  // recordTabcontent.innerHTML = vendorsTable.innerHTML;
});

// enroll item button function
enRollitem.addEventListener("click", () => {
  if (
    itemNumber.value == "" ||
    itemName.value == "" ||
    itemQuantity.value == "" ||
    itemUnitPrice.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
    return;
  }
  let itemIdcount = Math.random().toFixed(4);
  itemProductId.value =
    itemName.value[0] +
    itemName.value[itemName.value.length - 1] +
    ".itm" +
    "." +
    itemNumber.value +
    itemIdcount;
});

// additem button function
addItem.addEventListener("click", () => {
  if (
    itemNumber.value == "" ||
    itemName.value == "" ||
    itemQuantity.value == "" ||
    itemUnitPrice.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
  } else if (itemProductId.value == "") {
    alert("PLEASE ENROLL FIRST!");
    return;
  }

  let itemRows = document.createElement("tr");
  itemRows.classList.add("data-row");

  let itemData1 = document.createElement("td");
  itemData1.innerHTML = itemNumber.value;
  let itemData2 = document.createElement("td");
  itemData2.innerHTML = itemProductId.value;
  let itemData3 = document.createElement("td");
  itemData3.innerHTML = itemName.value;
  let itemData4 = document.createElement("td");
  itemData4.innerHTML = itemStatus.value;
  let itemData5 = document.createElement("td");
  itemData5.innerHTML = itemQuantity.value;
  let itemData6 = document.createElement("td");
  itemData6.innerHTML = itemDiscount.value;
  let itemData7 = document.createElement("td");
  itemData7.innerHTML = itemUnitPrice.value;
  let itemData8 = document.createElement("td");
  itemData8.innerHTML = itemDescription.value;

  itemRows.appendChild(itemData1);
  itemRows.appendChild(itemData2);
  itemRows.appendChild(itemData3);
  itemRows.appendChild(itemData4);
  itemRows.appendChild(itemData5);
  itemRows.appendChild(itemData6);
  itemRows.appendChild(itemData7);
  itemRows.appendChild(itemData8);
  // itemRows.appendChild(deleteRow);

  itemRough.push(itemDataObj());
  localStorage.setItem("itemRough", JSON.stringify(itemRough));
  onlineUser.itemsData = JSON.parse(localStorage.getItem("itemRough"));

  searchTable.appendChild(itemRows);
  // errorMessage.style.display = "initial";
  // errorMessage.innerHTML = "ADDED!!";
  // errorMessage.style.backgroundColor = "limegreen";
  // errorMessage.style.color = "green";

  itemNumber.value = "";
  itemName.value = "";
  itemStatus.value = "Active";
  itemQuantity.value = "";
  itemDiscount.value = "";
  itemUnitPrice.value = "";
  itemDescription.value = "";
  itemProductId.value = "";

  alert("ITEM SAVED!");
});
// clearitemForm button function
clearitemForm.addEventListener("click", () => {
  itemNumber.value = "";
  itemName.value = "";
  itemStatus.value = "Active";
  itemQuantity.value = "";
  itemDiscount.value = "";
  itemUnitPrice.value = "";
  itemDescription.value = "";
});

// enrollPurchase button function
enrollPurchase.addEventListener("click", () => {
  if (
    purchaseDate.value == "" ||
    purchaseName.value == "" ||
    purchaseVendor.value == "" ||
    purchaseQuantity.value == "" ||
    purchaseunitCost.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
    return;
  }
  let purchaseIDcount = Math.random().toFixed(4);
  purchaseId.value =
    purchaseName.value[0] +
    purchaseName.value[purchaseName.value.length - 1] +
    purchaseVendor.value[0] +
    purchaseVendor.value[purchaseVendor.value.length - 1] +
    ".pur" +
    "." +
    purchaseNumber.value +
    purchaseIDcount;
  purchasetotalCost.value = purchaseQuantity.value * purchaseunitCost.value;
});

// addPurchase button function
addPurchase.addEventListener("click", () => {
  if (
    purchaseDate.value == "" ||
    purchaseName.value == "" ||
    purchaseVendor.value == "" ||
    purchaseQuantity.value == "" ||
    purchaseunitCost.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
  } else if (purchaseId.value == "") {
    alert("PLEASE ENROLL FIRST!");
    return;
  }

  let purchasemainTable = document.getElementById("p-main-table");

  let purchaseRows = document.createElement("tr");
  purchaseRows.classList.add("data-row");

  let purchaseData1 = document.createElement("td");
  purchaseData1.innerText = purchaseNumber.value;
  let purchaseData2 = document.createElement("td");
  purchaseData2.innerText = purchaseDate.value;
  let purchaseData3 = document.createElement("td");
  purchaseData3.innerHTML = purchaseId.value;
  let purchaseData4 = document.createElement("td");
  purchaseData4.innerHTML = purchaseName.value;
  let purchaseData5 = document.createElement("td");
  purchaseData5.innerHTML = purchaseStock.value;
  let purchaseData6 = document.createElement("td");
  purchaseData6.innerHTML = purchaseVendor.value;
  let purchaseData7 = document.createElement("td");
  purchaseData7.innerHTML = purchaseQuantity.value;
  let purchaseData8 = document.createElement("td");
  purchaseData8.innerHTML = purchaseunitCost.value;
  let purchaseData9 = document.createElement("td");
  purchaseData9.innerHTML = purchasetotalCost.value;

  purchaseRows.appendChild(purchaseData1);
  purchaseRows.appendChild(purchaseData2);
  purchaseRows.appendChild(purchaseData3);
  purchaseRows.appendChild(purchaseData4);
  purchaseRows.appendChild(purchaseData5);
  purchaseRows.appendChild(purchaseData6);
  purchaseRows.appendChild(purchaseData7);
  purchaseRows.appendChild(purchaseData8);
  purchaseRows.appendChild(purchaseData9);

  purchaseRough.push(itemPurchaseObj());
  localStorage.setItem("purchaseRough", JSON.stringify(purchaseRough));
  onlineUser.purchaseData = JSON.parse(localStorage.getItem("purchaseRough"));

  purchasemainTable.appendChild(purchaseRows);

  purchaseNumber.value = "";
  purchaseDate.value = "";
  purchaseId.value = "";
  purchaseName.value = "";
  purchaseStock.value = "";
  purchaseVendor.value = "";
  purchaseQuantity.value = "";
  purchaseunitCost.value = "";
  purchasetotalCost.value = "";

  alert("PURCHASE ADDED!");
});
// clearpurchaseForm function
clearpurchaseForm.addEventListener("click", () => {
  purchaseNumber.value = "";
  purchaseDate.value = "";
  purchaseId.value = "";
  purchaseName.value = "";
  purchaseStock.value = "";
  purchaseVendor.value = "";
  purchaseQuantity.value = "";
  purchaseunitCost.value = "";
  purchasetotalCost.value = "";
});

// enroll Sale button function
saleEnroll.addEventListener("click", () => {
  if (
    saleNumber.value == "" ||
    saleDate.value == "" ||
    saleQuantity.value == "" ||
    saleunitPrice.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
    return;
  }
  let saleIDcount = Math.random().toFixed(4);

  saleId.value = purchaseId.value =
    saleName.value[0] +
    saleName.value[saleName.value.length - 1] +
    ".sll" +
    "." +
    saleNumber.value +
    saleIDcount;
  saleTotal.value = saleQuantity.value * saleunitPrice.value;
});

// addSale button function
addSale.addEventListener("click", () => {
  if (
    saleNumber.value == "" ||
    saleDate.value == "" ||
    saleQuantity.value == "" ||
    saleunitPrice.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
  } else if (saleId.value == "") {
    alert("PLEASE ENROLL FIRST!");
    return;
  }

  let salemainTable = document.getElementById("s-main-table");

  let saleRows = document.createElement("tr");
  saleRows.classList.add("data-row");

  let saleData1 = document.createElement("td");
  saleData1.innerHTML = saleNumber.value;
  let saleData2 = document.createElement("td");
  saleData2.innerHTML = saleId.value;
  let saleData3 = document.createElement("td");
  saleData3.innerHTML = saleName.value;
  let saleData4 = document.createElement("td");
  saleData4.innerHTML = saleDate.value;
  let saleData5 = document.createElement("td");
  saleData5.innerHTML = saletotalStock.value;
  let saleData6 = document.createElement("td");
  saleData6.innerHTML = saleDiscount.value;
  let saleData7 = document.createElement("td");
  saleData7.innerHTML = saleQuantity.value;
  let saleData8 = document.createElement("td");
  saleData8.innerHTML = saleunitPrice.value;
  let saleData9 = document.createElement("td");
  saleData9.innerHTML = saleTotal.value;

  saleRows.appendChild(saleData1);
  saleRows.appendChild(saleData2);
  saleRows.appendChild(saleData3);
  saleRows.appendChild(saleData4);
  saleRows.appendChild(saleData5);
  saleRows.appendChild(saleData6);
  saleRows.appendChild(saleData7);
  saleRows.appendChild(saleData8);
  saleRows.appendChild(saleData9);

  saleRough.push(itemSaleObj());
  localStorage.setItem("saleRough", JSON.stringify(saleRough));
  onlineUser.saleData = JSON.parse(localStorage.getItem("saleRough"));

  salemainTable.appendChild(saleRows);

  saleNumber.value = "";
  saleId.value = "";
  saleName.value = "";
  saleDate.value = "";
  saletotalStock.value = "";
  saleDiscount.value = "";
  saleQuantity.value = "";
  saleunitPrice.value = "";
  saleTotal.value = "";

  alert("SALE ADDED!");
});
// clearsaleForm function
clearsaleForm.addEventListener("click", () => {
  saleNumber.value = "";
  saleId.value = "";
  saleName.value = "";
  saleDate.value = "";
  saletotalStock.value = "";
  saleDiscount.value = "";
  saleQuantity.value = "";
  saleunitPrice.value = "";
  saleTotal.value = "";
});

// enroll vendor button function
enrollVendor.addEventListener("click", () => {
  if (
    vendorName.value == "" ||
    vendorPhone1.value == "" ||
    vendorAddress1.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
    return;
  }
  let vendorIDcount = Math.random().toFixed(4);

  vendorId.value =
    vendorName.value[0] +
    vendorName.value[vendorName.value.length - 1] +
    ".ven" +
    "." +
    vendorPhone1.value.slice(8) +
    vendorIDcount;
});

// addVendor button function
addVendor.addEventListener("click", () => {
  if (
    vendorName.value == "" ||
    vendorPhone1.value == "" ||
    vendorAddress1.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
  } else if (vendorId.value == "") {
    alert("PLEASE ENROLL FIRST!");
    return;
  }

  let vendormainTable = document.getElementById("v-main-table");

  let vendorRows = document.createElement("tr");
  vendorRows.classList.add("data-row");

  let vendorData1 = document.createElement("td");
  vendorData1.innerHTML = vendorName.value;
  let vendorData2 = document.createElement("td");
  vendorData2.innerHTML = vendorStatus.value;
  let vendorData3 = document.createElement("td");
  vendorData3.innerHTML = vendorId.value;
  let vendorData4 = document.createElement("td");
  vendorData4.innerHTML = vendorPhone1.value;
  let vendorData5 = document.createElement("td");
  vendorData5.innerHTML = vendorphone2.value;
  let vendorData6 = document.createElement("td");
  vendorData6.innerHTML = vendorEmail.value;
  let vendorData7 = document.createElement("td");
  vendorData7.innerHTML = vendorAddress1.value;
  let vendorData8 = document.createElement("td");
  vendorData8.innerHTML = vendorAddress2.value;
  let vendorData9 = document.createElement("td");
  vendorData9.innerHTML = vendorCity.value;

  vendorRows.appendChild(vendorData1);
  vendorRows.appendChild(vendorData2);
  vendorRows.appendChild(vendorData3);
  vendorRows.appendChild(vendorData4);
  vendorRows.appendChild(vendorData5);
  vendorRows.appendChild(vendorData6);
  vendorRows.appendChild(vendorData7);
  vendorRows.appendChild(vendorData8);
  vendorRows.appendChild(vendorData9);

  vendorRough.push(vendorObj());
  localStorage.setItem("vendorRough", JSON.stringify(vendorRough));
  onlineUser.saleData = JSON.parse(localStorage.getItem("vendorRough"));
  console.log(onlineUser);

  vendormainTable.appendChild(vendorRows);

  // add vendorName to list of vendors to select on the purchase tab
  let purchaseVendorOption = document.createElement("option");
  purchaseVendorOption.value = onlineUser.vendorData.name;
  purchaseVendorOption.innerText = onlineUser.vendorData.name;
  purchaseVendor.appendChild(purchaseVendorOption);

  vendorName.value = "";
  vendorStatus.value = "";
  vendorId.value = "";
  vendorPhone1.value = "";
  vendorphone2.value = "";
  vendorEmail.value = "";
  vendorAddress1.value = "";
  vendorAddress2.value = "";
  vendorCity.value = "";

  alert("VENDOR ADDED!");
});
// clearvenforForm function
clearvendorForm.addEventListener("click", () => {
  vendorName.value = "";
  vendorStatus.value = "";
  vendorId.value = "";
  vendorPhone1.value = "";
  vendorphone2.value = "";
  vendorEmail.value = "";
  vendorAddress1.value = "";
  vendorAddress2.value = "";
  vendorCity.value = "";
});

// remove error message
errorRemove.addEventListener("click", () => {
  errorMessage.style.display = "none";
});

// prevent negative values in input type numbers
numberInputs.forEach(function (number) {
  number.addEventListener("input", () => {
    if (number.value < 0) {
      number.value = "";
    }
  });
});

navToggle.addEventListener("click", () => {
  navBar.classList.toggle("show");
  navToggle.classList.toggle("rotate");
});

// Function to delete info from table and localstorage simultenously
