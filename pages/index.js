import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

export default () => (
  <ul>
    <li>
      <Link href="/b" as="/a">
        <a>{API_URL}</a>
      </Link>
    </li>
    <li>{process.env.API_URL}</li>
    <li>
      <Link href="/a" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
)
