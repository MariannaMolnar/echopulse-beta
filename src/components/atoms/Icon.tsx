type IconProps = {
    logoSrc: string,
    size: string;
}

function Icon({ logoSrc, size}: IconProps) {

  return (
    <img
      className={`${size} block`}
      src={logoSrc}
      alt="icon"
    />
  )
}

export default Icon