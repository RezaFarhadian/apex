interface InputProps {
  placeholder?: string
}

export default function Input(props: InputProps) {
  return (
    <input type="text" placeholder={props.placeholder} className="bg-transparent border rounded p-2 border-white"/>
  )
}
