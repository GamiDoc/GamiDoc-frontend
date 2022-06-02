import React from 'react';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();



const PDF = (props) => {
  return (
    <>

      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.content}</p>
      </div>

      <ReactToPdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </ReactToPdf>
    </>
  );
}

export default PDF;