let {useState}=React;

function Form(){

    let [data,setData]=useState({
        task:"",
        status:"",
        priority:""
    })
    //prev={a:"",b:"",c:""}
    //setData=prev.a=12
    //{a:12,b:"",c:""}
    function handleChange(e){
        //console.log(e.target.name,e.target.value);
        let {name,value}=e.target
        setData({...data,[name]:value})// Spread the previous state // Dynamically update the changed field
        
    }
    function handleSubmit(e){
        e.preventDefault(); // Prevent form from refreshing the page
        console.log("Submitted Data:", data); // Log the current state
        setData({ task: "", status: "", priority: "" }); // Reset the form
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="task" value={data.task} placeholder="Task" onChange={handleChange}/>
            <input name="status" value={data.status} placeholder="Status" onChange={handleChange}/>
            <input name="priority" value={data.priority} placeholder="Priority" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}
function App(){
    return (
        <Form/>
    )
}
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)