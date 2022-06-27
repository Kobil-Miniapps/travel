const MTravelSvg = (props: any) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={50}
      height={50}
    >
      <circle cx={25} cy={25} r={25} fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m-64.78-14.092 8.195 3.984c9.118 3.837 25.51 11.805 41.592 11.889 16.082.084 30.01-7.422 46.914-2.18 16.903 5.242 34.937 23.525 51.02 23.609 16.081.084 28.368-17.737 35.433-26.794l6.144-8.91 7.389 46.419-7.375 1.174-38.718 6.163-46.093 7.337-46.093 7.338L-45.09 62.1l-7.375 1.174-12.316-77.366Z"
        fill="#0277B4"
      />
    </g>
    <path
      d="M38.03 11.556h-6.12a4 4 0 0 0-3.955-3.449h-4.717a4 4 0 0 0-3.956 3.449H12.97c-2.74 0-4.97 2.23-4.97 4.97v17.396c0 2.741 2.23 4.97 4.97 4.97h25.06c2.74 0 4.97-2.229 4.97-4.97V16.526c0-2.74-2.23-4.97-4.97-4.97ZM23.236 9.97h4.718c.987 0 1.816.674 2.06 1.585h-8.837a2.136 2.136 0 0 1 2.06-1.585Zm17.9 23.951h-.001a3.11 3.11 0 0 1-3.107 3.107H12.97a3.11 3.11 0 0 1-3.106-3.107V16.526a3.11 3.11 0 0 1 3.106-3.106h25.06a3.11 3.11 0 0 1 3.106 3.106v17.396Z"
      fill="#fff"
    />
    <path
      d="M33.788 16.934a2.754 2.754 0 0 0-1.964-.805c-.789 0-1.537.313-2.128.905l-2.28 2.438-8.467-2.535-1.828 1.828a1.336 1.336 0 0 0 .003 1.885l.093.094L23.137 24l-2.244 2.282-2.67-.545-1.247 1.248a1.226 1.226 0 0 0-.363.874c0 .33.129.64.362.873l5.051 5.051c.233.233.543.362.873.362.331 0 .642-.13.873-.362l1.25-1.248-.56-2.721 2.27-2.239 3.284 5.966.094.094c.252.252.587.39.943.39s.692-.138.943-.39l1.826-1.826-2.551-8.524 2.439-2.282c1.143-1.144 1.178-2.97.078-4.07Zm-1.374 2.73-3.26 3.05 2.564 8.565-.53.528-4.01-7.287-4.745 4.678.56 2.73-.094.094-4.161-4.162.094-.095 2.68.547 4.678-4.758-7.239-3.984.53-.528 8.507 2.546 3.048-3.259c.217-.216.497-.336.788-.336.25 0 .479.092.645.26.374.373.34 1.016-.055 1.411Z"
      fill="#fff"
    />
  </svg>
);

export default MTravelSvg;
