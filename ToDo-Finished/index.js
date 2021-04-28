
const pending = document.querySelector(".pendingTodo");
const finished = document.querySelector(".finishedTodo");
const inputtext = document.querySelector(".inserList");
const input = inputtext.querySelector("input");

const pedingId = "PENDING";
const finishedId = "FINISHED";

let pendingList = [];
let finishedList = [];

let saveList = () => {
  localStorage.setItem(pedingId, JSON.stringify(pendingList));
};

let finsaveList = () => {
  localStorage.setItem(finishedId, JSON.stringify(finishedList));
};

let finDeleteList = (e) =>{
  let btn = e.target;
  let li = btn.parentNode;
  let clearList = finishedList.filter((element) => {
    return element.id !== Number(li.id);
  });

  finished.removeChild(li);
  finishedList = clearList;
  finsaveList();
}

let DeleteList = (e) => {
  let btn = e.target;
  let li = btn.parentNode;
  let clearList = pendingList.filter((element) => {
    return element.id !== Number(li.id);
  });

  pending.removeChild(li);
  pendingList = clearList;
  saveList();
};

let finconvertList = (e) => {
  let btn = e.target;
  let li = btn.parentNode;
  let clearList = pendingList.filter((element) => {
    return element.id !== Number(li.id);
  });

  pending.removeChild(li);
  pendingList = clearList;
  saveList();
  let finTodo = li.querySelector('span').innerText;
  InputFinishList(finTodo);
};

let toPendingconvert = (e) =>{
  let btn = e.target;
  let li = btn.parentNode;
  let clearList = finishedList.filter((element) => {
    return element.id !== Number(li.id);
  });

  finished.removeChild(li);
  finishedList = clearList;
  finsaveList();
  let pendTodo = li.querySelector('span').innerText;
  InputListFunction(pendTodo);
}

let InputFinishList = (Str) => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let delbtn = document.createElement("button");
  let conbtn = document.createElement("button");

  delbtn.innerText = "❌";
  delbtn.addEventListener("click", finDeleteList);

  conbtn.innerText = "🔂";
  conbtn.addEventListener("click", toPendingconvert);

  span.innerText = Str;
  
  li.appendChild(span);
  li.appendChild(delbtn);
  li.appendChild(conbtn);
  finished.appendChild(li);

  let list_id = finishedList.length + 1;
  li.id = list_id;

  let Object = {
    id: list_id,
    Str
  };
  finishedList.push(Object);
  finsaveList();
};

let InputListFunction = (Str) => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let delbtn = document.createElement("button");
  let conbtn = document.createElement("button");

  delbtn.innerText = "❌";
  delbtn.addEventListener("click", DeleteList);
  console.log(Str);
  
  conbtn.innerText = "💨";
  conbtn.addEventListener("click", finconvertList);

  span.innerText = Str;
  
  li.appendChild(span);
  li.appendChild(delbtn);
  li.appendChild(conbtn);
  pending.appendChild(li);

  let list_id = pendingList.length + 1;
  li.id = list_id;

  let Object = {
    id: list_id,
    Str
  };
  pendingList.push(Object);
  saveList();
};

let submitHandle = (e) => {
  e.preventDefault();
  let curStr = input.value;
  InputListFunction(curStr);
  input.value = "";
};

let getList = () => {
  let pendingTodo = localStorage.getItem(pedingId);
  let finishedTodo = localStorage.getItem(finishedId);

  if (pendingTodo !== null) {
    let JsonToDo = JSON.parse(pendingTodo);
    JsonToDo.forEach((element) => {
      InputListFunction(element.Str);
    });
  }
  if (finishedTodo !== null) {
    let JsonToDo = JSON.parse(finishedTodo);
    JsonToDo.forEach((element) => {
      InputFinishList(element.Str);
    });
  }
};

function init() {
  getList();
  inputtext.addEventListener("submit", submitHandle);
}

init();
