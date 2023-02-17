import Linecss from "./Line.module.css"

function Line(c) {
    return(
        <>
            <h1 className={Linecss.titlle}>name</h1>
            <span>{c.b} </span>     
        </>
      
    )
}
export default Line