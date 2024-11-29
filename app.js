let {useState}=React
let apiURL="https://masai-70897-default-rtdb.firebaseio.com/todos.json"

function Form(){
    let initState={
        task:"",
        status:"",
        priority:"" 
    }

    let [data,setData]=useState(initState);
    //prev={a:"",b:"",c:""}
    //setData=prev.a=12
    //{a:12,b:"",c:""}
    let [getData ,setGetData]=useState({})

    function handleChange(e){
        //console.log(e.target.name,e.target.value);
        let {name,value}=e.target
        setData({...data,[name]:value})// Spread the previous state // Dynamically update the changed field  

    }

    async function handleSubmit(e){
        e.preventDefault(); // Prevent form from refreshing the page'
        // fetch(URL,{})
        // axios = library =>it makes fetch easier
        let response=await axios.post(apiURL,data)
        console.log(response.data);
        
        // console.log("Submitted Data:", data); // Log the current state
        setData(initState); // Reset the form
        showData()
    }

    async function showData(){
        let res=await axios.get(apiURL)
        console.log(res.data);      
        setGetData(res.data)  
    }
    // showData();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="task" value={data.task} placeholder="Task" onChange={handleChange}/>
                <input name="status" value={data.status} placeholder="Status" onChange={handleChange}/>
                <input name="priority" value={data.priority} placeholder="Priority" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <button onClick={showData}>showData</button>

            <div>
                {
                    Object.entries(getData).map(([id,value])=>{
                        return (
                            <div>
                                <p><b>Task :</b>{value.task}</p>
                                <p><b>Status :</b>{value.status}</p>
                                <p><b>Priority :</b>{value.priority}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

function App(){
    return (
        <Form/>
    )
}

let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
