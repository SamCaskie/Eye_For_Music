document.addEventListener('DOMContentLoaded', function() { /*makes the JS code run after the HTML document fully loads*/
     images = document.querySelectorAll('.containerSCRL img'); /*selects all <img> elements that are inside the class containerSCRL img*/
     IMGPOPImg = document.getElementById('IMGPOP-img'); /*selects the element with the ID IMGPOP-img*/
     
     IMGPOP = document.getElementById('IMGPOP');
     IMGPOP.addEventListener('click', function(event) { /*This adds a click event listener to IMGPOP*/
        if (event.target === IMGPOP) { /*This line makes the pop-up only close when clicking outside the main image*/
            IMGPOP.style.display = 'none'; /*hides the pop-up when clicked*/
        }
    });

    images.forEach(img => {
        img.addEventListener('click', function() { /*This line adds a click event listener to each image*/
            IMGPOPImg.src=this.src;
            IMGPOP.style.display = 'flex'; /*This line makes the pop-up visible*/
        });
    });
});