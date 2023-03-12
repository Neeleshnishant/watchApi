import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'
import CartItems from '../../Context/CartItems'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount, channel, publishedAt} = details
  const {name} = channel

  return (
    <CartItems.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`videos/${id}`} color={bgColor}>
            <VideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <VideoDetailsContainer>
                  <VideoDetailsText textColor={textColor} size={20}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText>{name}</VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={15}>
                    {viewCount} views
                  </VideoDetailsText>
                  <VideoDetailsText>{publishedAt}</VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartItems.Consumer>
  )
}

export default VideoCardTwo
