import {Component} from 'react'

import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import VideoCardTwo from '../VideoCardTwo'

import Header from '../Header'
import CartItems from '../../Context/CartItems'

import SideBar from '../SideBar'

import {
  SearchVideosContainer,
  VideosContainer,
  TrendingHeadContainer,
  TrendingLogo,
  TrendingHead,
  ProductsLoaderContainer,
  HomeStickyContainer,
  HomeSideContainer,
  HomeContainer,
  Image,
  NotFoundContainer,
  Heading,
  Desc,
} from './styledComponents'

class SavedVideosRoute extends Component {
  renderSavedVideos = () => (
    <CartItems.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        console.log(savedVideos)
        const isVideosAvailable = savedVideos.length === 0

        return isVideosAvailable ? (
          <NotFoundContainer bgColor={bgColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading className="cart-empty-heading" textColor={textColor}>
              No saved videos found
            </Heading>
            <Desc textColor={textColor}>
              You can save your videos while watching them.
            </Desc>
          </NotFoundContainer>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <TrendingHeadContainer bgColor={bgColor}>
              <TrendingLogo>
                <AiFillFire />
              </TrendingLogo>
              <TrendingHead color={textColor}>Saved Videos</TrendingHead>
            </TrendingHeadContainer>

            <VideosContainer bgColor={bgColor}>
              {savedVideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartItems.Consumer>
  )

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  render() {
    return (
      <CartItems.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderSavedVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartItems.Consumer>
    )
  }
}

export default SavedVideosRoute
