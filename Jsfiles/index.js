 <script>
        var imageEls = document.getElementsByTagName("img");
        for (var i = 0; i < imageEls.length; i++) {
            imageEls[i].src = "https://www.kasandbox.org/programming-images/animals/cat.png" height=150;
        }
            
        var linkEls = document.querySelectorAll("a[href*=\"Dog\"]");
        for (var i = 0; i < linkEls.length; i++) {
            linkEls[i].href = "http://en.wikipedia.org/wiki/Cat";
        }
        var headingEl = document.getElementById("heading");
        console.log(headingEl);
        headingEl.innerHTML = "All about cats";
        var nameEls = document.querySelectorAll("p .animal");
        for (var i = 0; i < nameEls.length; i++) {
        nameEls[i].className += " catcolors";
        nameEls[i].innerHTML = "cat";
        }
 </script>