export default function player (): string{
    return `
    <div class="player">
        <div class="player__actions">
            <button class="player__actions-speed-control-button icon icon__after icon__after--x">1</button>
            <button class="player__actions-previous-button icon icon__after icon__after--previous"></button>
            <button class="player__actions-play-button icon icon__after icon__after--play-circle"></button>
            <button class="player__actions-next-button icon icon__after icon__after--next"></button>
            <label for="duration">33:28 / 53:14</label>                        
        </div>
        <div class="player__info">
            <img class="player__info-img" src="/images/pod_004.jpg" alt="" loading="lazy" width="46" height="46">
            <div class="player__info-inner">
                <div class="player__info-description">
                    <h2 class="player__info-title h4">Staffel 1, Folge 4   —  Mein Lehrbuch wurde ins Chinesische übersetzt - als Kursleite...</h2>
                    <p class="player__info-author h5">Schlüter, Linus Josef</p>
                </div>
                <input class="player__info-range" type="range"/>
            </div>
        </div>
        <div class="player__volume"></div>
    </div>
    `
}