interface FigureProps {
  src: string
  children: React.ReactNode
}

export default function Figure(props: FigureProps) {
  return (
    <figure>
      <img alt="" src={props.src} style={{ width:"250px", height:"300px" }} className="polygon-masked m-auto" />
      <figcaption className="text-center mr-12 mt-5">
        {props.children}
      </figcaption>
    </figure>
  )
}
