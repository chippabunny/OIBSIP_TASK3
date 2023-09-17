const title=document.getElementById('title');
const description=document.getElementById('description');
const addbutton=document.getElementById('addbutton');

var taskstiltle=document.getElementById('taskstitle');
var tasksdescription=document.getElementById('tasksdescription');
var tasksbuttons=document.getElementById('tasksbuttons');

var taskstiltlecompleted=document.getElementById('taskstitlecompleted');
var tasksdescriptioncompleted=document.getElementById('tasksdescriptioncompleted');
var tasksbuttonscompleted=document.getElementById('tasksbuttonscompleted');

var buttons=document.getElementById('buttons');



var inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));

inputs.forEach(function(input, index) {
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });
});

description.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      e.preventDefault();
      addbutton.click();
  }
});


function Add(){
  if(title.value=="" && description.value==""){
    alert("enter title and description");
  }
  else if(title.value==""){
    alert("enter title")
  }
  else if(description.value==""){
    alert("enter description");
  }
  else{
    var newtitle=document.createElement('div');
    newtitle.classList.add('addtitle');
    newtitle.innerHTML=title.value;
    taskstiltle.appendChild(newtitle);
    title.value="";


    var newdescription=document.createElement('div');
    newdescription.classList.add('adddescription');
    newdescription.innerHTML=description.value;
    tasksdescription.appendChild(newdescription);
    description.value="";

    var newtasksbuttons=document.createElement('div');

    var newdelete=document.createElement('div');
    var newedit=document.createElement('div');
    var newcompleted=document.createElement('div');

    newedit.classList.add('addedit');
    newdelete.classList.add('adddelete');
    newcompleted.classList.add('addcompleted');

    newdelete.innerHTML='<button> delete</button>';
    newedit.innerHTML='<button>edit</button>';
    newcompleted.innerHTML='<button>completed</button>';

    newtasksbuttons.appendChild(newedit);
    newtasksbuttons.appendChild(newdelete);
    newtasksbuttons.appendChild(newcompleted);

    newdelete.querySelector('button').addEventListener('click',deletetask);
    newedit.querySelector('button').addEventListener('click',edittask);
    newcompleted.querySelector('button').addEventListener('click',addcompletedtask);
    buttons.appendChild(newtasksbuttons);

    function deletetask(){
      newtitle.remove();
      newdescription.remove();
      newdelete.remove();
      newcompleted.remove();
      newedit.remove();
    }
    function edittask(){
      title.value=newtitle.innerText;
      description.value=newdescription.innerText;
      deletetask();
    }
    function addcompletedtask(){
      var newtitlecompleted=document.createElement('div');
     newtitlecompleted.classList.add('addtitle');
     newtitlecompleted.innerHTML=newtitle.innerText;
     taskstiltlecompleted.appendChild(newtitlecompleted);

     var newdescriptioncompleted=document.createElement('div');
    newdescriptioncompleted.classList.add('adddescription');
    newdescriptioncompleted.innerHTML=newdescription.innerText;
    tasksdescriptioncompleted.appendChild(newdescriptioncompleted);

    var newdeletecompleted=document.createElement('div');
    newdeletecompleted.classList.add('adddelete');
    newdeletecompleted.innerHTML='<button> delete</button>';
    tasksbuttonscompleted.appendChild(newdeletecompleted);

    newdeletecompleted.querySelector('button').addEventListener('click',deletecompleted);

    deletetask();
    function deletecompleted(){
      newtitlecompleted.remove();
      newdescriptioncompleted.remove();
      newdeletecompleted.remove();
    }


    }


  }
}
