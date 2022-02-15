const Btn = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Btn