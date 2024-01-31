let para = document.querySelector("p");
let btn1 = document.querySelector(".btn-1");
let url1 = "https://catfact.ninja/fact";

btn1.addEventListener("click", async (event) => {
  let fact = await getFacts();
  para.innerText = fact;
});
async function getFacts() {
  try {
    let result = await axios.get(url1);
    return result.data.fact;
  } catch (e) {
    console.log("Error :- ", e);
    return "No Fact Found";
  }
}

// ------------------------------------------------------------------------------------------------

let url2 = "http://universities.hipolabs.com/search?name=";
let btn2 = document.querySelector(".btn-2");

btn2.addEventListener("click", async () => {
  let country = document.querySelector("input");
//   console.log("Country: ", country);
  let colArray = await getColleges(country.value);
  country.value = "";
  show(colArray);
});

function show(colArray) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArray) {
    let li = document.createElement("li");
    // console.log(col.name);
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let result = await axios.get(url2 + country);
    return result.data;
  } catch (e) {
    console.log("Error :- ", e);
    return [];
  }
}
