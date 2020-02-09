import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.the_api_url_server_runtime)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.the_api_url)

export default () => (
  <ul>
    <li>
      <Link href="/b" as="/a">
        <a>{publicRuntimeConfig.the_api_url}</a>
      </Link>
    </li>
    <li>
      <Link href="/a" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
)
