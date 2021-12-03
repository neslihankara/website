/* eslint-disable react/no-unescaped-entities */
import Topic from "../components/topic-card"

export default function Home() {
  return (
    <div className="container">
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
