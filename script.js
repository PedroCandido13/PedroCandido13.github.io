function toggleMode() {
   const html = document.documentElement
   
   if(html.classList.contains('dark-mode')) {
    html.classList.remove('dark-mode')
   } else{
       html.classList.add('dark-mode') 
   }
}