// $(function() {
//     // Make an AJAX request to retrieve the product data
//     $.get('/products', function(data) {
//         // Loop through the data and append a row to the table for each product
//         data.forEach(function(product) {
//             var row = $('<tr>');
//             row.append($('<td>').text(product.sku));
//             row.append($('<td>').text(product.title));
//             row.append($('<td>').text(product.stock));
//             row.append($('<td>').text(product.colors.join(', ')));
//             row.append($('<td>').text(product.sex));
//             row.append($('<td>').text(product.size));
//             row.append($('<td>').text(product.line));
//             row.append($('<td>').text(product.category));
//             row.append($('<td>').text(product.regPrice));
//             row.append($('<td>').text(product.season));
//             row.append($('<td>').text(product.salePrice));
//             row.append($('<td>').text(product.saleStartDate));
//             row.append($('<td>').text(product.saleEndDate));
//             row.append($('<td>').text(product.images.join(', ')));
//             $('#productTableBody').append(row);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhr.responseText);
      data.forEach(function (product) {
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${product.sku}</td>
        <td>${product.title}</td>
        <td>${product.stock}</td>
        <td>${product.colors.join(", ")}</td>
        <td>${product.sex}</td>
        <td>${product.size}</td>
        <td>${product.line}</td>
        <td>${product.category}</td>
        <td>${product.regPrice}</td>
        <td>${product.season}</td>
        <td>${product.salePrice}</td>
        <td>${product.saleStartDate}</td>
        <td>${product.saleEndDate}</td>
        <td>${product.images.join(", ")}</td>
      `;
        document.getElementById("productTableBody").appendChild(row);
      });
    }
  };
  xhr.open("GET", "http://localhost:3000/products", true);
  xhr.send();
}); // End of DOMContentLoaded
