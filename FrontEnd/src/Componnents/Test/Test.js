import React, { useReducer } from "react";

function mainFunc(state   ,  action ) {


    // stete  =   0
    // action  ==  disPath  ({type  :  ?  })
switch (action.type) {
    case "PLUS":{

        return   {
            count :   state.count  + 1
        }
    }  
    
 

  
    case  "MINUS"  :   {
        return  {
            count  : state.count  -1 
        } 
    }

}


}

export default function Test() {
  let [controller, dispath] = useReducer(mainFunc, {
    count :  0
  });
  return (
    <>
      <button
        onClick={() => {
          dispath({ type: "PLUS" });
        }}
      >
        +
      </button>
      <div>{controller.count}</div>
      <button
        onClick={() => {
          dispath({ type: "MINUS" });
        }}
      >
        -
      </button>
    </>
  );
}
