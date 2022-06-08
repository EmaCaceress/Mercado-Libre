const is_ok = true;

const customFetch = (time, task) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(is_ok){ res(task)}else{ rej("Error")}
        },time)
    })    
}

export default customFetch;
