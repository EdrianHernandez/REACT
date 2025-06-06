import React, {useState, useEffect} from 'react';

function Component2() {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event listener added for resize');
        
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event listener removed for resize');
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    return (<>
                <h1>Component 2</h1>
                <p>Width: {width}</p>
                <p>Height: {height}</p>
            </>);
}

export default Component2
