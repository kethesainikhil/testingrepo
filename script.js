
let form = document.getElementById("form");
let value = ""
const url = `https://api.github.com/users/`
let data = ""
const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        data = await fetchData(value);
            const {name,id,avatar_url} = data;
            document.getElementById("image").src = avatar_url
            document.getElementById("username").textContent = name
            if(data.message){
                document.getElementById("username").textContent = data.message   
            }
    }
    catch(error){
        console.log(error,"error")
        document.getElementById("username").textContent = error

        
    }
    value = ""
    
}
const handleChange = (e) =>{
     value += e.target.value;
}

const fetchData = async (value) =>{
    const res = await fetch(url+value);
    const data = await res.json();
    return data;
}








