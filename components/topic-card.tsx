import React from "react"
import styled from "styled-components"


type IProps = {
  topic: string
  resources: string[]
  bannerPath: string
};

const StyledDiv = styled.div({

})

const StyledTopicCard = styled.div({
  boxShadow: "0px 3px 4px grey",
  maxWidth: "450px"
})

const StyledBanner = styled.img({
  width: "100%",
})

const StyledButton = styled.button({
  backgroundColor: "white",
  border: "0px",
  cursor: "pointer",
})

const Topic: React.FC<IProps> = ({ topic, resources, bannerPath }) => (
  <StyledTopicCard>
    <StyledBanner src={bannerPath} alt="" />
    <div className="content">
      <div className="summary">
        <div className="course-name" id="course">
          <h2>{topic}</h2>
        </div>
        <StyledButton>+</StyledButton>
      </div>
      <p>Total Resources: {resources.length}</p>
    </div>
  </StyledTopicCard>
)

export default Topic