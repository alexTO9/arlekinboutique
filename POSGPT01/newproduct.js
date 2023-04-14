document.addEventListener("DOMContentLoaded", function () {
  // Sale Dates logic
  var endDate = document.getElementById("end-date");
  var startDate = document.getElementById("start-date");
  endDate.addEventListener("change", function () {
    if (startDate.value) {
      if (endDate.value < startDate.value) {
        alert("LA OFERTA NO PUEDE FINALIZAR ANTES DE LA FECHA DE INICIO");
        endDate.value = "";
        return false;
      }
    }
  });
  startDate.addEventListener("change", function () {
    if (endDate.value) {
      if (endDate.value < startDate.value) {
        alert("LA OFERTA NO PUEDE INICIAR ANTES DE LA FECHA DE FINALIZACIÓN");
        startDate.value = "";
        return false;
      }
    }
  });

  // Title logic
  const titleField = document.getElementById("titulo");
  titleField.addEventListener("keydown", (event) => {
    if (
      titleField.value.length >= 256 &&
      event.key !== "Backspace" &&
      event.key !== "Tab"
    ) {
      event.preventDefault();
    }
  });

  // Sku logic
  var sku = document.getElementById("sku");
  sku.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow backspace
    if (key === "Backspace") {
      return;
    }

    // Allow tab
    if (key === "Tab") {
      return;
    }

    // Allow only numbers 1-9 and limit input to 4 digits
    if (!/^[1-9]$|^[1-9][0-9]{1,8}$/.test(sku.value + key)) {
      event.preventDefault();
    }
  });

  // Stock logic
  var stock = document.getElementById("stock");
  stock.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow backspace
    if (key === "Backspace") {
      return;
    }

    // Allow tab
    if (key === "Tab") {
      return;
    }

    // Allow only numbers 1-9 and limit input to 4 digits
    if (!/^[1-9]$|^[1-9][0-9]{1,2}$/.test(stock.value + key)) {
      event.preventDefault();
    }
  });

  // Regular price logic
  var precio_reg_pt1 = document.getElementById("reg-price-whole-number");
  precio_reg_pt1.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow backspace
    if (key === "Backspace") {
      return;
    }

    // Allow tab
    if (key === "Tab") {
      return;
    }

    // Allow only numbers 1-9 and limit input to 4 digits
    if (!/^[1-9]$|^[1-9][0-9]{1,3}$/.test(precio_reg_pt1.value + key)) {
      event.preventDefault();
    }
  });
  var precio_reg_pt2 = document.getElementById("reg-price-decimal-number");
  precio_reg_pt2.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow backspace
    if (key === "Backspace") {
      return;
    }

    // Allow tab
    if (key === "Tab") {
      return;
    }

    // Allow only numbers 0-9 and limit input to ? digits
    if (!/^[0-9]$|^[0-9][0-9]{1,1}$/.test(precio_reg_pt2.value + key)) {
      event.preventDefault();
    }
  });

  // Sale price logic
  var precio_ofer_pt1 = document.getElementById("reg-price-whole-number");
  precio_ofer_pt1.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow backspace
    if (key === "Backspace") {
      return;
    }

    // Allow tab
    if (key === "Tab") {
      return;
    }

    // Allow only numbers 1-9 and limit input to 4 digits
    if (!/^[1-9]$|^[1-9][0-9]{1,3}$/.test(precio_ofer_pt1.value + key)) {
      event.preventDefault();
    }
  });
  var precio_ofer_pt2 = document.getElementById("sale-price-decimal-number");
  precio_ofer_pt2.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow backspace
    if (key === "Backspace") {
      return;
    }

    // Allow tab
    if (key === "Tab") {
      return;
    }

    // Allow only numbers 0-9 and limit input to ? digits
    if (!/^[0-9]$|^[0-9][0-9]{1,1}$/.test(precio_ofer_pt2.value + key)) {
      event.preventDefault();
    }
  });

  // Tallas (size) logic
  var talla_input = document.getElementById("talla");
  var coleccion_input = document.getElementById("coleccion");
  talla_input.addEventListener("change", function (event) {
    if (
      talla_input.value === "0m" ||
      talla_input.value === "3m" ||
      talla_input.value === "6m"
    ) {
      coleccion_input.value = "l_bebe";
    } else if (
      talla.value === "1a" ||
      talla.value === "2a" ||
      talla.value === "3a"
    ) {
      coleccion_input.value = "l_infantil";
    }
  });

  // Submmit button logic
  const form = document.querySelector("#product-form");
  form.addEventListener("submit", (event) => {
    console.log("f submitted");
    event.preventDefault(); // prevent default form submission

    // get form data
    const sku = document.querySelector("#sku").value;
    const title = document.querySelector("#titulo").value;
    const stock = document.querySelector("#stock").value;
    const color1 = document.querySelector("#color1").checked ? "rosa" : "";
    const color2 = document.querySelector("#color2").checked ? "azul" : "";
    const color3 = document.querySelector("#color3").checked ? "amarillo" : "";
    const color4 = document.querySelector("#color4").checked ? "rojo" : "";
    const color5 = document.querySelector("#color5").checked ? "morado" : "";
    const color6 = document.querySelector("#color6").checked ? "verde" : "";
    const color7 = document.querySelector("#color7").checked ? "naranja" : "";
    const color8 = document.querySelector("#color8").checked ? "negro" : "";
    const color9 = document.querySelector("#color9").checked ? "blanco" : "";
    const color10 = document.querySelector("#color10").checked ? "gris" : "";
    const sex = document.querySelector("#sexo").value;
    const size = document.querySelector("#talla").value;
    const line = document.querySelector("#linea").value;
    const category = document.querySelector("#categoria").value;
    const regPrice = `${
      document.querySelector("#reg-price-whole-number").value
    }.${document.querySelector("#reg-price-decimal-number").value}`;
    const season = document.querySelector("#temporada").value;
    // const salePrice = `${
    //   document.querySelector("#sale-price-whole-number").value
    // }.${document.querySelector("#sale-price-decimal-number").value}`;
    let salePrice = null;
    const wholeNumberInput = document.querySelector("#sale-price-whole-number");
    const decimalNumberInput = document.querySelector(
      "#sale-price-decimal-number"
    );
    if (wholeNumberInput.value || decimalNumberInput.value) {
      salePrice = `${wholeNumberInput.value}.${decimalNumberInput.value}`;
    }
    const saleStartDate = document.querySelector("#start-date").value;
    const saleEndDate = document.querySelector("#end-date").value;
    // const images = document.querySelector("#image-upload").files;
    const images = document.querySelector("#images").value;

    // prepare JSON object
    const product = {
      sku: sku,
      title: title,
      stock: stock,
      colors: [
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7,
        color8,
        color9,
        color10,
      ].filter((color) => color !== ""), // filter out empty colors
      sex: sex,
      size: size,
      line: line,
      category: category,
      regPrice: regPrice,
      season: season,
      salePrice: salePrice,
      saleStartDate: saleStartDate,
      saleEndDate: saleEndDate,
      images: images,
    };
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(product));
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  // TEST BUTTON !!! TEST BUTTON !!! TEST BUTTON !!!
  const fillFormBtn = document.querySelector("#fill-form-btn");
  fillFormBtn.addEventListener("click", () => {
    const sku = Math.floor(Math.random() * 10000) + 1;
    const titulo = `Product ${sku}`;
    const stock = Math.floor(Math.random() * 100) + 1;
    const sexo = ["nino", "nina", "unisex"][Math.floor(Math.random() * 3)];
    const categoria = [
      "set de 1 pieza",
      "set de 2 piezas",
      "mamelucos",
      "toallas",
      "vestidos",
    ][Math.floor(Math.random() * 3)];
    const colors = ["red", "blue", "green"];
    const selectedColors = [];
    for (let i = 0; i < 3; i++) {
      if (Math.random() < 0.5) {
        selectedColors.push(colors[i]);
      }
    }
    const regPrice = `${Math.floor(Math.random() * 1000) + 1}.${
      Math.floor(Math.random() * 99) + 1
    }`;
    const salePrice = `${Math.floor(Math.random() * 1000) + 1}.${
      Math.floor(Math.random() * 99) + 1
    }`;
    const startDate = new Date(
      Date.now() + (Math.floor(Math.random() * 30) + 1) * 86400000
    )
      .toISOString()
      .split("T")[0];
    const endDate = new Date(
      Date.now() + (Math.floor(Math.random() * 30) + 31) * 86400000
    )
      .toISOString()
      .split("T")[0];

    const skuInput = document.querySelector("#sku");
    const tituloInput = document.querySelector("#titulo");
    const stockInput = document.querySelector("#stock");
    const sexoInput = document.querySelector("#sexo");
    const color1Input = document.querySelector("#color1");
    const color2Input = document.querySelector("#color2");
    const color3Input = document.querySelector("#color3");
    const categoriaInput = document.querySelector("#categoria");
    const precioWholeNumberInput = document.querySelector(
      "#reg-price-whole-number"
    );
    const precioDecimalNumberInput = document.querySelector(
      "#reg-price-decimal-number"
    );
    const salePriceWholeNumberInput = document.querySelector(
      "#sale-price-whole-number"
    );
    const salePriceDecimalNumberInput = document.querySelector(
      "#sale-price-decimal-number"
    );
    const startDateInput = document.querySelector("#start-date");
    const endDateInput = document.querySelector("#end-date");

    skuInput.value = sku;
    tituloInput.value = titulo;
    stockInput.value = stock;
    sexoInput.value = sexo;
    categoriaInput.value = categoria;

    color1Input.checked = selectedColors.includes("red");
    color2Input.checked = selectedColors.includes("blue");
    color3Input.checked = selectedColors.includes("green");

    // Regular price fields
    const [wholeNumber1, decimalNumber1] = regPrice.split(".");
    precioWholeNumberInput.value = wholeNumber1;
    precioDecimalNumberInput.value = decimalNumber1;

    // Sale price setup
    const [wholeNumber2, decimalNumber2] = salePrice.split(".");
    salePriceWholeNumberInput.value = wholeNumber2;

    // Sale dates setup
    // salePriceDecimalNumberInput.value = decimalNumber2;
    // startDateInput.value = startDate;
    // endDateInput.value = endDate;

    // RANDOMLY select if the product will have ON SALE info OR NOT ::::::::
    // Generate a random number between 0 and 1
    const randomNum = Math.random();

    // Set the probability for each option
    const probA = 0.2; // 30% probability for option A

    // Determine which option to execute based on the random number
    if (randomNum > probA) {
      // Option A: set all fields to null
      salePriceWholeNumberInput.value = null;
      salePriceDecimalNumberInput.value = null;
      startDateInput.value = null;
      endDateInput.value = null;
    } else {
      // Option B: set the fields to their respective values
      salePriceWholeNumberInput.value = wholeNumber2;
      salePriceDecimalNumberInput.value = decimalNumber2;
      startDateInput.value = startDate;
      endDateInput.value = endDate;
    }
  }); // END OF TEST BUTTON !!!  END OF TEST BUTTON !!!
}); // End of DOMContentLoaded
