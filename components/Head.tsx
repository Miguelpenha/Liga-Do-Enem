import HeadRaw from 'next/head'
import theme from '../styles/theme'

function Head() {
    return (
        <HeadRaw>
            <title>Liga do Enem</title>
            <meta name="language" content="pt-BR"/>
            <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:title" content="Liga do Enem"/>
            <meta property="og:description" content="Liga do Enem"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:site_name" content="Liga do Enem"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content="Liga do Enem"/>
            <meta name="twitter:description" content="Se divirta aprendendo!"/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="description" content="Se divirta aprendendo!"/>
            <meta name="theme-color" content={theme.primary}/>
        </HeadRaw>
    )
}

export default Head