import { StyledBtn } from './styled'

const Btn = ({ children, ...props }) => {
  return (
    <StyledBtn {...props}>{children}</StyledBtn>
  )
}

export default Btn