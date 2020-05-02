
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios ='https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = 'gpao9h4q';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dkxjiewvi/upload';

const obtenerChiste = async() => {

    try{
        const resp = await fetch(jokeUrl);

    if ( !resp.ok ) throw 'No se pudo realizar la petición';
        const {icon_url, id, value} = await resp.json();
    return {icon_url, id, value};


    }catch(err){

        throw err;

    }
    
}

const obtenerUsuarios = async() =>{
    
    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();

    return usuarios;

}
//ArchivoSubir de tipo "file"
const subirImagen = async(archivoSubir) =>{
    
    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);
    try{
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        });

        if (resp.ok){
            const cloudResp = await resp.json();
            // console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    }catch(err){
        throw err;

    }

}





export {

    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}




// const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// // fetch(jokeUrl).then(resp =>{

// //     // console.log(resp);
// //     resp.json().then(({id, value}) =>{
// //     console.log(id);
// //     console.log(value);
// //     });

// // });


// fetch(jokeUrl).then(resp => resp.json())
//     .then(({id,value})=>{
//         console.log(id, value);
        
//     });

 


