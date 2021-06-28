 
  /*    
    async function addItem() {
       
       
        let result = fetch("http://localhost:8080/api/profession/addProfession", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'yildiz/yildiz'
            },
            body: JSON.stringify(item)
        });
        
        result = await (await result).json();
      }
    
    const [nameError, setNameError] = useState("");
 
    const [errorResult, setErrorResult] = useState([]);
    let i;
    */
  /*  
    function loadErrors(){
        setNameError("");
       if(errorResult.success==false){
           for(i=0;i<errorResult.resultItems.length;i++){
               if(errorResult.resultItems[i].item==="name") setNameError(errorResult.resultItems[i].value);
            }
        }
     }
          let actionItem = {};
          actionItem.item={name}
          actionItem.result={}

             axios
    .get("http://localhost:8080/api/profession/addProfession",formItem)
    .then(response=>
        dispatch({type:'ADD_SUCCESS',payload:response.data}))
    .catch(error=>dispatch({type:'ADD_ERROR',payload:error})) 
 */