import { useState } from 'react';
export default function Board(){
    return (
        <>
          <div className="board-row">
            <Square  />
            <Square  />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
        </>
      );
}
interface SquareProps {

}
  
  const Square: React.FC<SquareProps> = () => {
    const [value, setValue] = useState<string>('');
    function handleClick() {
        setValue("X")
    }

    return <button className="square" onClick={handleClick}>{value}</button>;
  };
  