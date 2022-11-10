import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    .video__list {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      .video__item--link {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase};
        }
      }
    }
    .video__list::-webkit-scrollbar {
      display: none;
    }
  }

  .favoritos__list {
    display: flex;
    gap: 12px;
  }

  .favoritos__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .favoritos__img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .favoritos__name {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.textColorBase};
  }
`;