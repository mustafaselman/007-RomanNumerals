let inputNumber = document.querySelector("#inputNumber")
let convertNumberToRoman = document.querySelector("#convertNumberToRoman")
let displayRoman = document.querySelector(".displayRoman")
let div=document.createElement("div")

convertNumberToRoman.addEventListener("click",()=> {romanize(inputNumber.value)})

function romanize(num)
{
  
  if (parseInt(num))
  {
    let digits = Number(num);
    let roman = "";
    while (digits >= 1000)
    {
      digits = digits - 1000;
      roman = roman + "M";
    }
    while (digits >= 900)
    {
      digits = digits - 900
      roman = roman + "CM"
    }
    while (digits >= 500)
    {
      digits = digits - 500
      roman = roman + "D"
    }
    while (digits >= 400)
    {
      digits = digits - 400
      roman = roman + "CD"
    }
    while (digits >= 100)
    {
      digits = digits - 100
      roman = roman + "C"
    }
    while (digits >= 90)
    {
      digits = digits - 90
      roman = roman + "XC"
    }
    while (digits >= 50)
    {
      digits = digits - 50
      roman = roman + "L"
    }
    while (digits >= 40)
    {
      digits = digits - 40
      roman = roman + "XL"
    }
    while (digits >= 10)
    {
      digits = digits - 10
      roman = roman + "X"
    }
    while (digits >= 9)
    {
      digits = digits - 9
      roman = roman + "IX"
    }
    while (digits >= 5)
    {
      digits = digits - 5
      roman = roman + "V"
    }
    while (digits >= 4)
    {
      digits = digits - 4
      roman = roman + "IV"
    }
    while (digits >= 1)
    {
      digits = digits - 1
      roman = roman + "I"
    }
    div.innerHTML = roman
    displayRoman.appendChild(roman)
    console.log(digits)
    roman.preventDefault();
  }
}
function deromanize(roman)
{

  if (String(roman))
  {
    let romanSplit = String(roman).split("");
    let digits = 0;

    while (romanSplit[ 0 ] == "M")
    {
      digits = digits + 1000;
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "C" && romanSplit[ 1 ] == "M")
    {
      digits = digits + 900
      romanSplit.shift();
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "D")
    {
      digits = digits + 500
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "C" && romanSplit[ 1 ] == "D")
    {
      digits = digits + 400
      romanSplit.shift();
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "C")
    {
      digits = digits + 100
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "X" && romanSplit[ 1 ] == "C")
    {
      digits = digits + 90
      romanSplit.shift();
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "L")
    {
      digits = digits + 50
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "X" && romanSplit[ 1 ] == "L")
    {
      digits = digits + 40
      romanSplit.shift();
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "X")
    {
      digits = digits + 10
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "I" && romanSplit[ 1 ] == "X")
    {
      digits = digits + 9
      romanSplit.shift();
      romanSplit.shift();
    }
    while (romanSplit[ 0 ] == "V")
    {
      digits = digits + 5
      romanSplit.shift();

    }
    while (romanSplit[ 0 ] == "I" && romanSplit[ 1 ] == "V")
    {
      digits = digits + 4
      romanSplit.shift();
      romanSplit.shift();

    }
    while (romanSplit[ 0 ] == "I")
    {
      digits = digits + 1
      romanSplit.shift();
    }

    document.write(digits)
  }
}
