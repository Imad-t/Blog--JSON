const id = new URLSearchParams(window.location.search).get('id');//=the query parametre we used
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails= async()=> {
    const res = await fetch('http://localhost:3000/posts/'+id)
    const post = await res.json();
    
    const template=`
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <h4>${post.likes} Likes</h4?`

    container.innerHTML= template;
}

deleteBtn.addEventListener('click',async(e)=>{
    const res= await fetch ('http://localhost:3000/posts/'+ id,{
        method: 'DELETE'
    }) 
    //redirecting user to homepage
    window.location.replace('/index.html');
})
window.addEventListener('DOMContentLoaded',()=>renderDetails());
