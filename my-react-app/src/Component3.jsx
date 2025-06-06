import React, {useState, useEffect, useRef} from 'react';

function Component3() {

    const inputRef =useRef(null);

    useEffect(() => {
      console.log("Component Rendered");
    });

    function handleClick(){
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "gray";
    }

    return( <div>
              <button onClick={handleClick}>
                Click Me!
              </button>

              <input ref={inputRef}/>
            </div>
    );
}

export default Component3;
