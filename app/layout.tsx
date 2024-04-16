import LoadingWidget from "components/common/LoadingWidget"
import PreviewBar from "components/common/PreviewBar"
import SiteFooter from "components/common/SiteFooter"
import SiteHeader from "components/common/SiteHeader"
import {useAgilityContext} from "lib/cms/useAgilityContext"

import {Inter} from "next/font/google"

import "/styles/globals.css"

import {getHeaderContent} from "lib/cms-content/getHeaderContent"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
	const {locale, sitemap, isDevelopmentMode, isPreview} = useAgilityContext()

	const header = await getHeaderContent({sitemap, locale})

	const isPreviewRequested = false
	return (
		<html lang="en" className={inter.className}>
			<head>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592484312606095" crossOrigin="anonymous"></script>
				<link rel="canonical" href="https://beautiful-girl-hub.netlify.app"/>
					<meta name="google-site-verification" content="_FVe9a0ZIZ9Hb8UMTkIQcSGUbuIoWIc3SDLYSNiOscg" />	
				</head>
			<body data-agility-guid={process.env.AGILITY_GUID}>
				<script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="89f58f8a-af1c-4321-b708-7379d4ffb867" async></script>

				<div id="site-wrapper">
					{isPreviewRequested && <LoadingWidget message="Loading Preview Mode" />}
					{!isPreviewRequested && (
						<div id="site">
{/* 							<PreviewBar {...{isDevelopmentMode, isPreview}} /> */}

							<div className="flex flex-col min-h-screen">
								<SiteHeader {...{header}} />

								<main className={`flex-grow`}>{children}</main>
{/* 								<SiteFooter /> */}
							</div>
						</div>
					)}
				</div>
			</body>
		</html>
	)
}
