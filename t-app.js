const addbtn=document.querySelector(".addbtn");
const todolist = document.querySelector(".todolist");
const todoinput =document.querySelector(".todoinput");
const filterselect = document.querySelector(".filter");



addbtn.addEventListener("click", addtodo );
todolist.addEventListener("click", twoactions );
filterselect.addEventListener("click", filterfunc);









function addtodo(event){
    //To prevent for actual default i.e refreshing
    event.preventDefault();


    //generating a div of tododiv
    const tododiv=document.createElement("div");
    tododiv.classList.add("tododiv");

    //generating an li
    const newtodo=document.createElement("li");
    newtodo.classList.add("newtodo");
    newtodo.innerText=todoinput.value;
    tododiv.appendChild(newtodo);


    //generating a select button
    const selbtn=document.createElement("button");
    selbtn.innerHTML = '<i class="fas fa-check"></i>';
    selbtn.classList.add("selbtn");
    tododiv.appendChild(selbtn);

    //generating a delete button
    const delbtn=document.createElement("button");
    delbtn.innerHTML='<i class="fas fa-trash" ></i>';
    delbtn.classList.add("delbtn");
    tododiv.appendChild(delbtn);

    //adding all these to the list
    todolist.appendChild(tododiv);

    //clearing the input
    todoinput.value='';

}

function twoactions(ev){
    const item=ev.target
    const currenttodo=item.parentElement;
    if(item.classList[0]=="delbtn"){
        currenttodo.classList.add("removed");
        currenttodo.addEventListener("transitionend", function(){
            currenttodo.remove();
        } )
    }
    

    if(item.classList[0]=="selbtn"){
        currenttodo.classList.toggle("completed");
    }
}

//For filters
function filterfunc(e){
    option=e.target;
    const divs=todolist.childNodes;
    divs.forEach(divelement =>{
        switch (option.value) {
            case "all":
                divelement.style.display="flex";
                break;
            case "completed":
                if(!divelement.classList.contains('completed')){
                    divelement.style.display='none';
                }
                else{
                    divelement.style.display='flex';
                }
                break;
            case "notcompleted":
                if(divelement.classList.contains('completed')){
                    divelement.style.display='none';
                }
                else{
                    divelement.style.display='flex';
                }
                break;
        }
    })
}
