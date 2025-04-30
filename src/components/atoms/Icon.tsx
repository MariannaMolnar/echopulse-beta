type IconProps = {
    logoSrc: string,
    size: string;
}

function Icon({ logoSrc, size}: IconProps) {

  return (
    <img
      className={`${size} object-contain`}
      src={logoSrc}
      alt="icon"
    />
  )
}

export default Icon