
// ********************************************photo sectiom filter
function filterOut(cat){

    //* getting all elements having class +filter_img
    let filter_cat =document.getElementsByClassName('filter_img')
    // console.log(filter_cat)
    
    // * running loop for every element
    for(i=0;i<filter_cat.length;i++){
        
        //* hide all elements
        filter_cat[i].style.display="none";
      
        let array_class
        array_class = filter_cat[i].className.split(" ");
        
        
        // *getting each class of 1 DOM element
        for(j=0;j<array_class.length;j++){
            
            // *if class matches to filteres category, show
            if(array_class[j]===cat){
                filter_cat[i].style.display="inline-block"
            }

            // * Show all elements
            if(cat=="All"){
                filter_cat[i].style.display="block"
            }
        }
        
    }
    // *Filter button color
    let filter_button =document.getElementsByClassName('filter')

    // loop through all elements
    for(i=0;i<filter_button.length;i++){
        
        // *remove underline from all category button 
        filter_button[i].classList.remove('active')

        let capitalize_catefgory =capitalize1(filter_button[i].innerText)
        if(capitalize_catefgory == cat){

            console.log(capitalize_catefgory,cat)
            filter_button[i].classList.add('active')
        }

    } 
}
// capitalize fumction used in 
function capitalize1(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }