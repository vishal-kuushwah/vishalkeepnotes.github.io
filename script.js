
const addButtons=document.getElementById('add')

const updataLSData=()=>{
const TextAreaDAta=document.querySelectorAll('textarea')
const notes=[]
// console.log(TextAreaDAta)
TextAreaDAta.forEach((curntelement)=>{
return notes.push(curntelement.value)
})
// console.log(notes)
localStorage.setItem('notes',JSON.stringify(notes))
}
const addNewNote=(text='')=>{
const mydiv=document.createElement('div')
mydiv.classList.add('note')
const htmlData=`
<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '':'hidden'}  "></div>
    <textarea class="${text?'hidden':''} "></textarea>`;
  
    mydiv.insertAdjacentHTML('afterbegin',htmlData)
    // console.log(mydiv);
// getting the refrences 
const EditButton=mydiv.querySelector(".edit")
const DeleteButton=mydiv.querySelector(".delete")
const MAindiv=mydiv.querySelector(".main")
const TextArea=mydiv.querySelector("textarea")

// deleting the data
DeleteButton.addEventListener('click',()=>{
    mydiv.remove();
    updataLSData();
})
// toggel useing the edit button
TextArea.value=text;
MAindiv.innerHTML=text;

EditButton.addEventListener('click',()=>{
    MAindiv.classList.toggle('hidden');
TextArea.classList.toggle('hidden')


})


TextArea.addEventListener('change',(currntevent)=>{
const myvalue=currntevent.target.value
// console.log(myvalue)
MAindiv.innerHTML=myvalue;
updataLSData();
})


    document.body.appendChild(mydiv)


}

// geting the data form the local storage
const notes=JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.forEach((note)=> addNewNote(note))
}

addButtons.addEventListener('click',()=>{
    addNewNote();
})