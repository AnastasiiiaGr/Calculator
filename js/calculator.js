let result = document.getElementById("inputtext");

let calculate = (number) => {
  result.value = result.value + number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert(
      "Обчислення неможливе. Перевірте послідовність введення чисел та знаків"
    );
  }
};

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
