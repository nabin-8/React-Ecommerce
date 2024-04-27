const parseImageUrl=(imageUrl)=>{
    if(typeof imageUrl==='string' && imageUrl.startsWith('[') && imageUrl.endsWith(']')){
        //remove the square brackets
        imageUrl=imageUrl.slice(1,-1)
    }

    //checking if imageUrl is a string and starts and ends with '""'
    if(typeof imageUrl === 'string' && imageUrl.startsWith('"') && imageUrl.endsWith('"')){
        //remove the double quotes
        imageUrl=imageUrl.slice(1,-1)

    }

    return imageUrl
}

export default parseImageUrl