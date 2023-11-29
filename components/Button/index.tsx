interface ButtonProps {
  className?: string
  disabled?: boolean
  children: React.ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <div className={props.className}>
      <button type="button" disabled={props.disabled} className="bg-white text-black p-2 rounded-xl text-lg px-6 border-2 border-gray-300 font-medium disabled: bg-gray-500">
        {props.children}
      </button>
    </div>
  )
}
