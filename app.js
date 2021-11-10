 $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

   






ayush = ()=> {
document.querySelectorAll('.containerA h2')[1].innerHTML = ""
}
setTimeout(ayush, 2000);

