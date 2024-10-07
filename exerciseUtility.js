function display(data, dataList) {
  value = document.getElementById(data).value;
  if (value == "" || value.replaceAll(" ", "") == "") {
    dataList.innerHTML = "";
    document.getElementById("welcome").hidden = true;
    alert("At least one of the fields was left empty, fill all of them to submit");
    return false;
  } else {
    let info = document.createElement(`li`);
    info.innerHTML = `${data}: ${value}`;
    dataList.appendChild(info);
    document.getElementById("welcome").hidden = false;
    return true;
  }
}