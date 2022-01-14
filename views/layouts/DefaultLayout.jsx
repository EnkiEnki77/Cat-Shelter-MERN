import React from 'react'

const DefaultLayout = (props) => {
    return (
        <html>
<head>
    <title>{props.title}</title>

    <meta charSet="utf-8" />
    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='stylesheet' href='styles/site.css'/>  
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"/>
    <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico"/>
    <title>{props.title}</title>
</head>

<body>
        {props.children}
</body>
</html>
    )
}

export default DefaultLayout
