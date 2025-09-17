import "./Wrapper.scss";

function Wrapper({className, children}) {
  return (
    <div className={`wrapper ${className || ""}`}>
      {children}
    </div>
  )
}

export default Wrapper
