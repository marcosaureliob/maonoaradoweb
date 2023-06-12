'use client'
import React from 'react'

type SafeNumber = number | `${number}`
interface ISizeProps {
  width: SafeNumber | undefined
  height: SafeNumber | undefined
  fill?: string
}
export const InstagramLogo = ({
  width,
  height,
  fill = 'white',
}: ISizeProps) => {
  return (
    <a
      href="https://www.instagram.com/associacaomaonoarado/"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3349 20C13.3349 16.3182 16.3189 13.3328 20.0008 13.3328C23.6827 13.3328 26.6683 16.3182 26.6683 20C26.6683 23.6818 23.6827 26.6672 20.0008 26.6672C16.3189 26.6672 13.3349 23.6818 13.3349 20ZM9.73063 20C9.73063 25.672 14.3286 30.2698 20.0008 30.2698C25.673 30.2698 30.271 25.672 30.271 20C30.271 14.328 25.673 9.73024 20.0008 9.73024C14.3286 9.73024 9.73063 14.328 9.73063 20ZM28.2775 9.32304C28.2769 10.6485 29.351 11.7235 30.6766 11.724C32.0021 11.7245 33.0771 10.6504 33.0776 9.32496C33.0782 7.99948 32.004 6.92453 30.6785 6.924C29.3536 6.92462 28.2786 7.99819 28.2775 9.32304ZM11.9205 36.2795C9.97048 36.1907 8.9106 35.8659 8.20625 35.5915C7.27245 35.228 6.60618 34.795 5.90568 34.0955C5.20517 33.396 4.77155 32.7304 4.40962 31.7966C4.13505 31.0926 3.81023 30.0325 3.72159 28.0826C3.62462 25.9744 3.60526 25.3411 3.60526 20.0002C3.60526 14.6592 3.62623 14.0277 3.72159 11.9178C3.81039 9.96784 4.13761 8.90976 4.40962 8.20368C4.77315 7.26992 5.20613 6.60368 5.90568 5.9032C6.60522 5.20272 7.27085 4.76912 8.20625 4.4072C8.91028 4.13264 9.97048 3.80784 11.9205 3.7192C14.0287 3.62224 14.662 3.60288 20.0008 3.60288C25.3396 3.60288 25.9735 3.62384 28.0835 3.7192C30.0335 3.808 31.0916 4.1352 31.7978 4.4072C32.7315 4.76912 33.3978 5.20368 34.0983 5.9032C34.7988 6.60272 35.2308 7.26992 35.5944 8.20368C35.869 8.90768 36.1938 9.96784 36.2824 11.9178C36.3794 14.0277 36.3987 14.6592 36.3987 20.0002C36.3987 25.3411 36.3794 25.9726 36.2824 28.0826C36.1936 30.0325 35.8672 31.0923 35.5944 31.7966C35.2308 32.7304 34.7979 33.3966 34.0983 34.0955C33.3988 34.7944 32.7315 35.228 31.7978 35.5915C31.0937 35.8661 30.0335 36.1909 28.0835 36.2795C25.9753 36.3765 25.342 36.3958 20.0008 36.3958C14.6596 36.3958 14.0281 36.3765 11.9205 36.2795ZM11.7549 0.12112C9.62567 0.21808 8.17073 0.55568 6.90012 1.05008C5.58422 1.56064 4.47026 2.2456 3.35709 3.35696C2.24393 4.46832 1.5607 5.584 1.05012 6.89984C0.555702 8.1712 0.218089 9.62528 0.121125 11.7544C0.0225609 13.8869 0 14.5686 0 20C0 25.4314 0.0225609 26.1131 0.121125 28.2456C0.218089 30.3749 0.555702 31.8288 1.05012 33.1002C1.5607 34.4152 2.24409 35.5322 3.35709 36.643C4.4701 37.7539 5.58422 38.4379 6.90012 38.9499C8.17313 39.4443 9.62567 39.7819 11.7549 39.8789C13.8886 39.9758 14.5692 40 20.0008 40C25.4324 40 26.1142 39.9774 28.2467 39.8789C30.3761 39.7819 31.8301 39.4443 33.1015 38.9499C34.4166 38.4379 35.5313 37.7544 36.6445 36.643C37.7577 35.5317 38.4395 34.4152 38.9515 33.1002C39.4459 31.8288 39.7851 30.3747 39.8805 28.2456C39.9774 26.1115 40 25.4314 40 20C40 14.5686 39.9774 13.8869 39.8805 11.7544C39.7835 9.62512 39.4459 8.1704 38.9515 6.89984C38.4395 5.5848 37.7559 4.47008 36.6445 3.35696C35.5331 2.24384 34.4166 1.56064 33.1031 1.05008C31.8301 0.55568 30.3759 0.21648 28.2483 0.12112C26.1158 0.02416 25.434 0 20.0024 0C14.5708 0 13.8886 0.02256 11.7549 0.12112Z"
          fill={fill}
        />
      </svg>
    </a>
  )
}
