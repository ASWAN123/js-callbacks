Posts = [{title:"title one" , desc:"this is descri one"} , {title:"title tow" , desc:"this is descri tow"}]

function getPost(){
    setTimeout(()=>{

        output = ""
        Posts.forEach((post) => {
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML = output ;
    }, 1000)
}

function createPost(post , callback) {
    setTimeout(()=> {
        Posts.push(post) ;
        callback();
    } , 2000)
}

createPost({title:"title three " ,desc : "this is descri three"} ,getPost)