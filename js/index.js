var Bookmark = document.getElementById("BookmarkName");
var Site = document.getElementById("SiteURL");

var productList = [];
var btnAdd = document.getElementById("btnAdd");
var btnUpdate = document.getElementById("btnUpdate");

var hamadaUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*)?$/;

if (localStorage.getItem("productContainer") !== null) {
  productList = JSON.parse(localStorage.getItem("productContainer"));
  displayData();
}

function addproduct() {
  var product = {
    name: Bookmark.value,
    url: Site.value,
  };

  if ( product.name === ""){
        alert("fkmvfkm");
        return;
    }
  if( product.url === ""){
        alert("fvmsfvmk");
        return;
    }
   for (var  i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase()=== product.name.toLowerCase() || productList[i].url=== product.url) {
            alert('jfnjnvjefn')
            return;
        }
        
    }

  if (!hamadaUrl.test(product.url)) {
    alert("Please enter the correct url");
    return;
  }

  productList.push(product);

  localStorage.setItem("productContainer", JSON.stringify(productList));
  displayData();

  console.log(productList);
  clearform();
}
function clearform() {
  Bookmark.value = null;
  Site.value = null;
}

function displayData() {
  var cartona = "";
  for (var i = 0; i < productList.length; i++) {
    console.log(productList[i].url);

    cartona += `
        <tr  >
                <th scope="row">${i + 1}</th>
                <td>${productList[i].name}</td>
                <td>
                  <button onclick="setVisitInfo(${i})" class="btn-group bg-success text-white border-0 py-1 px-3">
                    <span class="me-2">
                     <i class="fa-solid fa-eye"></i>
                    </span>
                      Visit
                  </button>

                </td>
                <td>
                  <button onclick="deleteItem(${i})" class="btn-group bg-danger text-white py-1 px-3 border-0">
                    <span class="me-2">
                      <i class="fa-regular fa-trash-can"></i>
                    </span>
                      Delete
                  </button>
                </td>
              </tr>
       
       `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

function deleteItem(indix) {
  productList.splice(indix, 1);
  localStorage.setItem("productContainer", JSON.stringify(productList));
  displayData();
}

function setVisitInfo(index) {
  // console.log(index);

  for (var i = 0; i < productList.length; i++) {
    // console.log(productList[i].url);

    if (i == index) {
      var hambozo = productList[i].url;
      var validationUrl =
        hambozo.startsWith("http://") || hambozo.startsWith("https://")
          ? hambozo
          : `https://${hambozo}`;
      // window.location.href = validationUrl;
      window.open(validationUrl, `_blank`);
    }
  }
}
