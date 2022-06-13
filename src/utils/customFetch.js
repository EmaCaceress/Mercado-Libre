import { stock } from "./stock";

const customFetch = (time, task) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(task.length>0){res(task)}else if(stock){ res(stock)}else{rej("Error")}
        },time)
    })    
}

export default customFetch;
