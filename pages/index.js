import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/b" as="/a">
        <a>{process.env.customKey}</a>
      </Link>
    </li>
    <li>
      <Link href="/a" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
)
