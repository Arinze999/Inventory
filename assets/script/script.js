// different tabs
const itemsTab = document.getElementById("item");
const purchaseTab = document.getElementById("pchase");
const vendorTab = document.getElementById("vendor");
const salesTab = document.getElementById("sale");
const searchTab = document.getElementById("search");
const recordTab = document.getElementById("record");

// tabs parameter containers
const selectedTab = document.getElementById("selected-tab");
const indicateTab = document.getElementById("tab-indicator");

//number inputs
const numberInputs = document.querySelectorAll('input[type="number"]');

// tabs contents containers
const errorMessage = document.getElementById("error");
const errorRemove = document.getElementById("error-cancel");
// the defaultcontentTab originally displays the item add content
const defaultContentTab = document.getElementById("tab-display");
const searchTabcontent = document.getElementById("table-container");
const purchaseTabcontent = document.getElementById("purchase-container");
const salesTabcontent = document.getElementById("sales-container");
const vendorTabcontent = document.getElementById("vendor-container");
const recordTabcontent = document.getElementById("records-container");

// item dataTab details
let itemNumber = document.getElementById("serial");
let itemName = document.getElementById("nomencleture");
let itemStatus = document.getElementById("statz");
let itemDescription = document.getElementById("describe");
let itemDiscount = document.getElementById("disc");
let itemQuantity = document.getElementById("quant");
let itemUnitPrice = document.getElementById("unip");
// itemsearch table
let searchTable = document.getElementById("search-table");
//add item buttons
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

// nav bar tabs click functions
itemsTab.addEventListener("click", () => {
  itemsTab.style.backgroundColor = "orangered";
  itemsTab.style.color = "white";
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
  defaultContentTab.style.display = "initial";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
});

purchaseTab.addEventListener("click", () => {
  purchaseTab.style.backgroundColor = "orangered";
  purchaseTab.style.color = "white";
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
  defaultContentTab.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "initial";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
});

vendorTab.addEventListener("click", () => {
  vendorTab.style.backgroundColor = "orangered";
  vendorTab.style.color = "white";
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
  defaultContentTab.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "initial";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
});

salesTab.addEventListener("click", () => {
  salesTab.style.backgroundColor = "orangered";
  salesTab.style.color = "white";
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
  defaultContentTab.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "initial";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
});

searchTab.addEventListener("click", () => {
  searchTab.style.backgroundColor = "orangered";
  searchTab.style.color = "white";
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
  defaultContentTab.style.display = "none";
  searchTabcontent.style.display = "initial";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  salesRecord.style.display = "none";
  vendorsRecord.style.display = "none";
  recordTabcontent.style.display = "none";
  purchaseRecord.style.display = "none";
});

recordTab.addEventListener("click", () => {
  recordTab.style.backgroundColor = "orangered";
  recordTab.style.color = "white";
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
  defaultContentTab.style.display = "none";
  searchTabcontent.style.display = "none";
  purchaseTabcontent.style.display = "none";
  salesTabcontent.style.display = "none";
  vendorTabcontent.style.display = "none";
  errorMessage.style.display = "none";
  purchaseRecord.style.display = "initial";
  salesRecord.style.display = "initial";
  vendorsRecord.style.display = "initial";
  recordTabcontent.style.display = "initial";
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
    return;
  }

  let itemRows = document.createElement("tr");
  itemRows.classList.add("data-row");

  let itemData1 = document.createElement("td");
  itemData1.innerHTML = itemNumber.value;
  let itemData2 = document.createElement("td");
  itemData2.innerHTML = itemName.value;
  let itemData3 = document.createElement("td");
  itemData3.innerHTML = itemStatus.value;
  let itemData4 = document.createElement("td");
  itemData4.innerHTML = itemQuantity.value;
  let itemData5 = document.createElement("td");
  itemData5.innerHTML = itemDiscount.value;
  let itemData6 = document.createElement("td");
  itemData6.innerHTML = itemUnitPrice.value;
  let itemData7 = document.createElement("td");
  itemData7.innerHTML = itemDescription.value;
  // let deleteRow = document.createElement("i");
  // deleteRow.innerText = "d";
  // deleteRow.classList.add("fa-solid fa-trash");

  itemRows.appendChild(itemData1);
  itemRows.appendChild(itemData2);
  itemRows.appendChild(itemData3);
  itemRows.appendChild(itemData4);
  itemRows.appendChild(itemData5);
  itemRows.appendChild(itemData6);
  itemRows.appendChild(itemData7);
  // itemRows.appendChild(deleteRow);

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

  alert("ITEM SAVED!");
});
// clearitemForm function 
clearitemForm.addEventListener("click" , () => {
  itemNumber.value = "";
  itemName.value = "";
  itemStatus.value = "Active";
  itemQuantity.value = "";
  itemDiscount.value = "";
  itemUnitPrice.value = "";
  itemDescription.value = "";
})


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
clearpurchaseForm.addEventListener("click" , () => {
  purchaseNumber.value = "";
  purchaseDate.value = "";
  purchaseId.value = "";
  purchaseName.value = "";
  purchaseStock.value = "";
  purchaseVendor.value = "";
  purchaseQuantity.value = "";
  purchaseunitCost.value = "";
  purchasetotalCost.value = "";
})


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
clearsaleForm.addEventListener("click" , () => {
  saleNumber.value = "";
  saleId.value = "";
  saleName.value = "";
  saleDate.value = "";
  saletotalStock.value = "";
  saleDiscount.value = "";
  saleQuantity.value = "";
  saleunitPrice.value = "";
  saleTotal.value = "";
})


// addVendor button function
addVendor.addEventListener("click", () => {
  if (
    vendorName.value == "" ||
    vendorPhone1.value == "" ||
    vendorAddress1.value == ""
  ) {
    errorMessage.style.display = "initial";
    errorRemove.classList.add("fa-solid fa-xmark");
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

  vendormainTable.appendChild(vendorRows);

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
clearvendorForm.addEventListener("click" , () => {
  vendorName.value = "";
  vendorStatus.value = "";
  vendorId.value = "";
  vendorPhone1.value = "";
  vendorphone2.value = "";
  vendorEmail.value = "";
  vendorAddress1.value = "";
  vendorAddress2.value = "";
  vendorCity.value = "";
})


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
