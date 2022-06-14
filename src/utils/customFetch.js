const is_ok=true;

const customFetch = (time, task) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            is_ok
                ? res(task)
                : rej("Error")
        },time)
    })    
}

export default customFetch;
