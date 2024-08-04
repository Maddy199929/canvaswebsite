import { useRef, useEffect } from 'react';

const canvasFixed= {
    height : '600px',
    width : '1000px' 
}
export function CanvasMain(props) {
    const canvasRef = useRef(null);
    useEffect(() => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            context.fillStyle = 'red';
            context.fillRect(0, 0, canvasFixed.width, canvasFixed.height);

            const clickHandler = () => {
                context.fillStyle = 'blue';;
                context.fillRect(0, 0, canvasFixed.width, canvasFixed.height);
            };

            canvas.addEventListener('click', clickHandler);

            return () => {
                canvas.removeEventListener('click', clickHandler);
            };

    }, []);


    return <canvas style={canvasFixed} ref={canvasRef}  />;
}


export default CanvasMain;