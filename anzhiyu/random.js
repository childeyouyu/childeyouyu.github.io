var posts=["article/65a0.html","article/5d29.html","article/ae8e.html","article/4d37.html","article/7d63.html","article/ec0.html","article/2386.html","article/ea40.html","article/dc01.html","article/a8a8.html","article/4971.html","article/2b63.html","article/e7fe.html","article/a169.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };