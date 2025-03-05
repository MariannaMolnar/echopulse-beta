import React from 'react'

type LogoProps = {
    h: number | string,
    logoSrc: string,
}

function Logo({ h, logoSrc}: LogoProps) {
  return (
    <img
      className={`mx-auto w-auto`}
      src={logoSrc}
      alt="EchoPulse Logo"
      style={{ height: typeof h === "number" ? `${h}px` : h }}
    />
  )
}

export default Logo