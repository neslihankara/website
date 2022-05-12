/* eslint-disable react/no-unescaped-entities */
import Topic from "../components/topic-card"
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:2966870,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </Head>
      <div className="header">
        <h1>Resources for Programming with Nes Community</h1>
        <p>We've been building this site in the Live Room of Vibely. You can access the Live Room from&nbsp;
          <a href="https://app.vibely.io/programmingwithnes/circle/3db67f2f-cd59-4bde-834c-2ecfd6e824f2">here</a>.
        </p>
      </div>
      <div className="text">
        <p>
          Please find below the useful resources we've used in a topic you're
          interested with.
        </p>
        <Topic topic="React" resources={["google.com"]} bannerPath="/img/react.png"></Topic>
      </div>
      <div className="topics"></div>
    </div>
  )
}
