function funny() {

        
    let display = document.querySelector("#display");

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        let p = document.createElement("h1");
        p.style.textAlign = "center";
        p.textContent = data.setup + " " + data.punchline;
        let utterance = new SpeechSynthesisUtterance(p.textContent);
        speechSynthesis.speak(utterance);
        display.appendChild(p);
      })
      .catch((error) => console.log(error));
  }  

// function speech(){
//   let utterance = new SpeechSynthesisUtterance(p.textContent);
//   speechSynthesis.speak(utterance);
// }









  function comment(){

let commented = document.querySelector('#commented')
    commented.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let formData = new FormData(form);
     let post = document.querySelector('#post')

  
      console.log(formData.get("username"));
      // console.log(formData.get("post"));
      alert("2020")
  
      let data = Object.fromEntries(formData);
  
      let jsonData = JSON.stringify(data);
      let user = document.createElement('h4')
      // let image = document.createElement('h4');
  
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: jsonData,
      })
        .then((res) => res.json())
        .then((result) => (
          
      // image.src=result.url,  
      user.textContent=result.username,
      // image.style.width='200px',
      // display.appendChild(image),
      post.appendChild(user)          
        
        ))
  
        .catch((error) => console.log(error));
  
      form.reset();
  
        })





  }

