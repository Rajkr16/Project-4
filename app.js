const input=document.querySelector(".input");
const p=document.querySelector("#info");
const meaningCont=document.querySelector(".meaning-container");
const title=document.querySelector(".title");
const meaning=document.querySelector(".meaning");
const audio=document.querySelector("#audio");

async function fetchApi(word){
    try {
        // console.log(word);
        p.style.display="block";
        meaningCont.style.display="none";
        p.innerText=`Searching the meaning of ${word}...`;


    const url=` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    console.log(url);
    const result=await fetch(url).then((res)=>
        res.json());
        
        if(result.title){
            p.style.display="block";
            meaningCont.style.display="none";

            title.innerText=word;
            meaning.innerText="N/A";
            audio.style.display="none";
        }
        console.log(result);
        p.style.display="none";
        meaningCont.style.display="block";
        title.innerText=result[0].word;
        meaning.innerText=result[0].meanings[0].definitions[0].definition;
        audio.src=result[0].phonetics[0].audio;
    } catch (error) {
        console.log(error);
        // p.innerText="An error happened, please try again later";
        p.innerText=`${error}`;
    }
}

input.addEventListener("keyup",(event)=>{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.key);
    // console.log(event.target.value);
    if(event.target.value && event.key ==="Enter"){
        fetchApi(event.target.value);
    }

})