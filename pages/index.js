import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>CodesWear - Wear the code</title>
                <meta name="description" content="CodesWear - Wear the code" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                Hey this is codeswear
                <div className="mx-4">
                    This is me
                </div>
                <div className="mx-4 bg-slate-500">
                    This is me
                </div>
            </div>
        </>
    )
}
