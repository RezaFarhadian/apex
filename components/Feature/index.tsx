interface FeatureProps {
  icon: string
  headline: string
  children: React.ReactNode
}

export default function Feature(props: FeatureProps) {
  return (
    <div className="text-center flex flex-col gap-4">
      <div className={`${props.icon} bg-no-repeat bg-cover`} style={{
        width: "200px",
        height: "200px",
        backgroundPositionY: "50px"
      }}></div>

      <b>{props.headline}</b>

      <p>{props.children}</p>
    </div>
  )
}
