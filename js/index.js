//fetching data 
const container= document.querySelector('.blogs');
const searchForm= document.querySelector('.search');




const renderPosts = async (term) => {
    let uri="http://localhost:3000/posts?_sort=likes&_order=desc";//used query parametre to set order, default order is by id
    
    if(term){
        uri+=`&q=${term}`;//q===qeue
    }
    const res= await fetch(uri);//the fetch() method is used to make network requests to fetch resources from a server.
    const posts= await res.json();

    let template = '';
    posts.forEach(post=>{
        template+=`
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0,100)}...</p>
            <a href="/details.html?id=${post.id}">read more</a> 
        </div>`
    }) //?id... is called a query parametre which can be used in this case to filter data in order to fetch a single item

    container.innerHTML = template;
}
 
searchForm.addEventListener('submit',(e)=>{ 
    e.preventDefault();//so that the page doesn't refresh
    renderPosts(searchForm.term.value.trim());
})
window.addEventListener('DOMContentLoaded', ()=> renderPosts());

//json-server --watch data/db.json