document.addEventListener("DOMContentLoaded", (e)=>{

    //check if contact form was send
    let querySearch = window.location.search
    if(querySearch!=""){
        let parametro = new URLSearchParams(querySearch)
        if(parametro.get("emailSend")){
            let formContainer = document.getElementsByClassName("form-container")[0]
            formContainer.getElementsByClassName("button-container")[0].innerHTML += `
            <input type="button" class="valid-button" value="Mensaje enviado!">
            `
        }
    }

    //menu responsive
    let burgerButton = document.getElementById("burgerButton")
    console.log(burgerButton)
    let header = document.getElementsByTagName("header")[0]
    burgerButton.addEventListener("click", (e)=>{
        header.classList.toggle("mobile")
    })


    //set fake-placeholder as label
        let inputSet = document.getElementsByClassName("inputSet")
        Array.from(inputSet).forEach(input => {
            input.addEventListener("focus", (evento)=>{
                let labelSets = document.querySelectorAll("label")
                labelSets[evento.target.dataset.label].classList.toggle('active')
            })
    
            input.addEventListener("blur", (evento)=>{
                let labelSets = document.querySelectorAll("label")
                labelSets[evento.target.dataset.label].classList.toggle('active')
            })
        });   
        
    
    //set active class in nav
        let navSet = document.getElementsByClassName("navitem")
        document.getElementsByClassName("logo-link")[0].addEventListener("click", (evento)=>{
            navSet[0].click()
        })
        Array.from(navSet).forEach(navItem =>{
            navItem.addEventListener("click", (evento)=>{
                header.classList.remove("mobile")
                Array.from(navSet).forEach(navItem =>{
                    navItem.classList.remove('active')
                })
                evento.target.classList.toggle('active')
            })
        })
    
        
    });
    
    

