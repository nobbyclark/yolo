import React from "react";
import Link from "next/link";
import getConfig from "next/config";

export default () => (
  <div>
    <ul>
      <li>
        <Link href="/b" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/a" as="/b">
          <a>b</a>
        </Link>
      </li>
    </ul>
    <div>
      RESTURL_SPEAKERS {process.env.RESTURL_SPEAKERS}
      <br />
      RESTURL_SESSIONS {process.env.RESTURL_SESSIONS}
    </div>
  </div>
);
