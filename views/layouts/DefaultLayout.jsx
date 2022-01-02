import React from 'react'

const DefaultLayout = (props) => {
    return (
        <html>
<head>
    <title>{props.title}</title>

    <meta charSet="utf-8" />
    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='stylesheet' href='css/styles.css'/>  
</head>

<body>
        {props.children}
</body>
</html>
    )
}

export default DefaultLayout
