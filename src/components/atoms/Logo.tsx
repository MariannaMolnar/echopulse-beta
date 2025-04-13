import React from 'react'

type LogoProps = {
    h: number | string,
    logoSrc: string,
}

function Logo({ h, logoSrc}: LogoProps) {
  return (
    <img
      className={`mx-auto w-[50px] max-w-full object-contain`}
      src={logoSrc}
      alt="EchoPulse Logo"
      style={{ height: typeof h === "number" ? `${h}px` : h }}
    />
  )
}

export default Logo