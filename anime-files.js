
const animeEpisodes = [];

const animeFolder =
    "../downloads/anime/Naruto Original 220EP 720p/";

for (let i = 1; i <= 220; i++) {
    const episodeNumber = String(i);

    animeEpisodes.push({
        id: i,
        title: `Naruto EP (${i})`,
        filename: `Naruto EP (${i}).mkv`,
        path: `${animeFolder}Naruto%20EP%20(${i}).mkv`,
        category: "anime",
        type: "MKV",
        size: "720p"
    });
}
