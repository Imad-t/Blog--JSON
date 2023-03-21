const form= document.querySelector('form');

const createPost = async(e)=>{
    e.preventDefault();
    
    const doc={
        title : form.title.value,
        body : form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts',{//the fetch() method is used to make network requests to fetch resources from a server.
        method: 'POST',//method: This option specifies the HTTP method to be used for the request, such as GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(doc),//body: This option allows you to include a body with the request, such as when sending data to the server using POST or PUT methods.
        headers:{'Content-type':'application/json'}//headers: This option allows you to specify additional headers to be sent with the request, such as Content-Type, Authorization, etc.
    });/*mode: This option specifies the mode of the request, such as "cors", "no-cors", "same-origin", etc.
    cache: This option specifies how the browser should cache the response, such as "no-cache", "default", "reload", etc.
    credentials: This option specifies whether to include cookies or other credentials with the request, such as "same-origin", "include", "omit", etc.
    redirect: This option specifies how to handle redirects, such as "follow", "manual", or "error".
    referrer: This option specifies the referrer URL for the request, such as "no-referrer", "client", "origin", etc.
    Overall, the second parameter of the fetch() method allows you to customize the request and specify various options that affect how the request is made and handled
    */
 
    window.location.replace('/index.html');
    
}


form.addEventListener('submit',createPost);