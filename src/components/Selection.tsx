import { FC } from "react";
import { useNavigate } from "react-router-dom";
interface SelectionProps {
  
  title: string;
  image: string;
}

 const Selection:FC<SelectionProps> =(props)=> {
    const navigate = useNavigate();
  return (
    <>
      <div className="card selection">
        <h3>{props.title}</h3>
        <img src={props.image} alt={props.title} />
        
        <button onClick={()=>{
          navigate(`/${props.title}`);
        }}>Shop Now</button>
      </div>
    </>
  );
}
export default Selection;