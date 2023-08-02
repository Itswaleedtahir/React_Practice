
function counter({ count, addToCount, subtractFromCount , resetCount}){

    return (

        <div>
          <h1>{count}</h1>
          
            <button onClick={addToCount}>Add</button>
            <button onClick={subtractFromCount}>Subtract</button>
            <button onClick={resetCount}>Reset</button>
        </div>
      );
    
}

export default counter;