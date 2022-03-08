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
            name: '这世界那么多人',
            artist: '莫文蔚',
            url: 'https://bafybeic7llshgt67yfr3czq7dldpybvnnxon3gyugoahx7whjyqpvudj4y.ipfs.dweb.link/莫文蔚-这世界那么大.mp3',
            cover: 'https://bafybeigbaz3g72neej6iafnmsrw7wwrk64bp7s2zgyiibuhsimvz4ykgua.ipfs.dweb.link/780476de9982431088c999921001a214.jpg',
        },
        {
            name: '无赖',
            artist: '郑中基',
            url: 'https://bafybeiglhvnvwxiuqk6kyicf4bvsbpaf4pkqgizoe7potjuy2fmp6tkpve.ipfs.dweb.link/%E6%97%A0%E8%B5%96.mp3',
            cover: 'http://p3.music.126.net/2vFBKWUmF_jiWGaBgO6RaA==/17648261137761966.jpg',
        }
    ]
});