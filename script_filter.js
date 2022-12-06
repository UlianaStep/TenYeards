const filterBox1 = document.querySelectorAll('.box');

document.querySelector('.point').addEventListener('clik', event =>{
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox1.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass))  {
            elem.classList.add('hide');
        }
    });
})


const filterBox = document.querySelectorAll('.box');

document.querySelector('.filterbox').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });

});



const tmdBtn = document.querySelectorAll(".stylefilter");

tmdBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;

        tmdBtn.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
    });
});