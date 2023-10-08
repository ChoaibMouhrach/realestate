
const Label = ({text,className}) => {
  return (
    <p className={` text-[18px] mt-10 mb-2 text-darkBlue dinNextLtBold ${className}  `}> {text} </p>
  )
}

export default Label