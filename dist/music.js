const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    mutex: true, 
    loop: 'all',
    order: 'random',
    volume: 0.6,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '平凡的一天',
            artist: '毛不易',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FUkM2eDU3SngySkJ0N2V5YzJYUnRwd0JvWENLVUZGOFJBLTRmWV9jNDVSS213.m4a',
            cover: 'https://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
        },
        {
            name: '无赖',
            artist: '郑中基',
            url: 'https://bafybeiglhvnvwxiuqk6kyicf4bvsbpaf4pkqgizoe7potjuy2fmp6tkpve.ipfs.dweb.link/%E6%97%A0%E8%B5%96.mp3',
            cover: 'http://p3.music.126.net/2vFBKWUmF_jiWGaBgO6RaA==/17648261137761966.jpg',
        }
    ]
});