import React from 'react'

type FacebookProps = {
  className?: string
}

const Facebook: React.FC<FacebookProps> = ({ className }) => (
  <div className={className}>
    <a href="https://www.facebook.com/pg/lacewingfloral">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z" />
      </svg>
    </a>
  </div>
)

export default Facebook
