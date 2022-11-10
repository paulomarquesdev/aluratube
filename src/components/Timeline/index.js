import { StyledTimeline } from "./StyledTimeline";

export default function Timeline({ searchValue, ...propriedades }) {
    const playlistNames = Object.keys(propriedades.playlists);
    const favoritosList = propriedades.favoritos;

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <ul className="video__list">
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <li key={video.url}>
                                            <a key={video.url} href={video.url} className="video__item--link">
                                                <img src={video.thumb} />
                                                <span>
                                                    {video.title.slice(0,39)}...
                                                </span>
                                            </a>
                                        </li>
                                    )
                                })}
                        </ul>
                    </section>
                )
            })}

            <section>
                <h2>AluraTubes Favoritos</h2>
                <ul className="favoritos__list">
                {favoritosList.map((favorito, index) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <li key={index} className="favoritos__item">
                      <a href={`https://github.com/${favorito.name}/`} className='favoritos__link'>
                        <img className='favoritos__img' src={`https://github.com/${favorito.name}.png`} alt="" />
                        <span className="favoritos__name">
                            @{favorito.name}
                        </span>
                      </a>
                    </li>
                    )
                })}
              </ul>
            </section>
        </StyledTimeline>
    )
}