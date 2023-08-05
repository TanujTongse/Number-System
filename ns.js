const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");

let chose = "Binary", res = "Binary";

fromSelected.addEventListener("change", function () {
   chose = fromSelected.options[fromSelected.selectedIndex].text;
   from.placeholder = chose + " Number";
});

toSelected.addEventListener("change", function () {
   res = toSelected.options[toSelected.selectedIndex].text;
   to.placeholder = res + " Number";
});

from.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (chose) {
      case "Binary":
         fromValue = from.value;
         if (/^[01]*$/.test(fromValue)) {
            switch (res) {
               case "Decimal": to.value = parseInt(fromValue, 2);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = parseInt(fromValue, 2).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + chose + " Number";
            to.value = "";
         }
         break;

      case "Decimal":
         fromValue = from.value;
         if (/^[0-9]*$/.test(fromValue)) {
            switch (res) {
               case "Binary": to.value = Math.abs(fromValue).toString(2);
                  break;
               case "Hexadecimal": to.value = Math.abs(fromValue).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = Math.abs(fromValue).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + chose + " Number";
            to.value = "";
         }
         break;

      case "Hexadecimal":
         fromValue = from.value;
         if (/^[0-9a-fA-F]*$/.test(fromValue)) {
            switch (res) {
               case "Binary": to.value = parseInt(fromValue, 16).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 16);
                  break;
               case "Octal": to.value = parseInt(fromValue, 16).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "INVALID " + chose + " NUMBER";
            to.value = "";
         }
         break;

      case "Octal":
         fromValue = from.value;
         if (/^[0-7]*$/.test(fromValue)) {
            switch (res) {
               case "Binary": to.value = parseInt(fromValue, 8).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 8);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + chose + " Number";
            to.value = "";
         }
         break;
   }
});

