import React from "react"
import styled from "styled-components"


type IProps = {
  topic: string
  resources: string[]
  bannerPath: string
};

const StyledTopicCard = styled.div({
  boxShadow: "0px 3px 4px grey",
  maxWidth: "450px"
})

const StyledBanner = styled.img({
  width: "100%",
})

const Topic: React.FC<IProps> = ({ topic, resources, bannerPath }) => (
  <StyledTopicCard>
    <StyledBanner src={bannerPath} alt=""/>
    <div className="summary"> <h1>{topic}</h1>
    <p>Total Resources: {resources.length}</p></div>
  </StyledTopicCard>
)

export default Topic