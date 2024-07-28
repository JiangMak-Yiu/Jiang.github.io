var posts=["2024/07/27/4DDiG/","2024/07/28/DocKer/","2024/07/27/clash/","2024/07/28/vue/","2024/07/28/图床/","2024/07/28/安装Mysql/","2024/07/27/完美解码/","2024/07/28/攻击/","2024/07/28/服务器安全/","2024/07/28/清理alist/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };