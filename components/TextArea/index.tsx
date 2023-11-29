interface InputProps {
  placeholder?: string
}

export default function TextArea(props: InputProps) {
  return (
    <textarea placeholder={props.placeholder} className="bg-transparent border rounded p-2 border-white"/>
  )
}
