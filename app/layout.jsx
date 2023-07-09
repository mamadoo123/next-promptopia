import '@styles/globals.css'

export const metaData = {
    title: "Promptopia",
    description: "Discover & find your AI prompts"
}

function RootLayout({children}) {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient" />

                <main className='app'>
                    {children}
                </main>
            </div>
        </body>
    </html>
)
}

export default RootLayout