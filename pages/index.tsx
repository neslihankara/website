import Topic from "../components/topic-card"

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Resources for Programming with Nes Community</h1>
      </div>
      <div className="summary">
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
