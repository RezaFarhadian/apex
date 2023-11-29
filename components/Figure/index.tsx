import Image from "next/image"

interface FigureProps {
  src: string
  children: React.ReactNode
}

export default function Figure(props: FigureProps) {
  return (
    <figure>
      <Image alt="" width={250} height={300} src={props.src} style={{ width:"250px", height:"300px" }} className="polygon-masked m-auto" />
      <figcaption className="text-center mr-12 mt-5">
        {props.children}
      </figcaption>
    </figure>
  )
}
