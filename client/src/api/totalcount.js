import API from './api'

const totalcount = () =>{
    let count;
    API.get('allTodo')
        .then(res=>{
            const todos = res.data;
            count= todos.length;
            return count;
        })
     
}

export default totalcount;
