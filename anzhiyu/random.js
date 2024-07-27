var posts=["2024/07/27/4DDiG/","2024/07/27/hello-world/","2024/07/27/完美解码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };