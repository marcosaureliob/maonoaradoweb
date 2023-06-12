import React from 'react'

type SafeNumber = number | `${number}`
interface ISizeProps {
  width: SafeNumber | undefined
  height: SafeNumber | undefined
  fill?: string
}
export const FacebookLogo = ({ width, height, fill = 'white' }: ISizeProps) => {
  return (
    <a
      href="https://www.facebook.com/associacaomaonoarado/"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5 0H7.5C3.35789 0 0 3.35789 0 7.5V32.5C0 36.6421 3.35789 40 7.5 40H32.5C36.6421 40 40 36.6421 40 32.5V7.5C40 3.35789 36.6421 0 32.5 0ZM31.4842 21.5421H27.7421V35.3947H21.4895V21.5421H19.0632V16.8737H21.4895V13.9C21.4895 10.0053 23.1105 7.68947 27.7 7.68947H32.3526V12.3368H29.6474C27.8579 12.3368 27.7421 13.0053 27.7421 14.2474L27.7368 16.8684H31.9895L31.4789 21.5368L31.4842 21.5421Z"
          fill={fill}
        />
      </svg>
    </a>
  )
}
