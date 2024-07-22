let taskarr = [];

function addtask() {
  let task = document.getElementById("task").value;
  taskarr.push(task);
  console.log(taskarr);
}

function showtask() {
    for (let i = 0; i < taskarr.length; i++) {
      let p = document.createElement('p');
      p.id = `p${i}`;
      p.innerText = taskarr[i];
      document.body.appendChild(p);
    }
  }
