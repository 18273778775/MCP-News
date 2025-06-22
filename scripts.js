// 模拟从百度热搜获取的数据
const baiduHotSearchData = [
    { title: '隐藏的步骤', score: 185355, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/13132c567fbe871b07124a8aed5fb80a?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=隐藏的步骤+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '角斗士2', score: 178827, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/1b7a6ac323f9714f07b2e625f546414f?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=角斗士2+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '蝙蝠侠', score: 173946, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/2cd0774205c7d1cdb0faab76173998a7?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=蝙蝠侠+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '哪吒之魔童闹海', score: 158292, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/f9a394f9b5779376803a38e0701705d7?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=哪吒之魔童闹海+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '女囚风暴1995', score: 153903, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/3d563cf9b4bcb66256bf68551f42ab29?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=女囚风暴1995+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '忠犬八公', score: 146802, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/1b7a6ac323f9714f07b2e625f546414f?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=忠犬八公+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '美国队长', score: 136787, image: 'https://fyb-2.cdn.bcebos.com/hotboard_image/092845fd0ef9c518c797f69b8e659f74?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=美国队长+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' },
    { title: '唐探1900', score: 127220, image: 'https://gips2.baidu.com/it/u=1290188712,993316983&fm=3028&app=3028&f=JPEG&fmt=auto&q=75&size=f200_266?x-bce-process=image/resize,m_fill,w_160,h_214', link: 'https://www.baidu.com/s?wd=唐探1900+电影&sa=fyb_hp_movie&rsv_dl=fyb_hp_movie' }
];

// 动态生成新闻卡片
function generateNewsCards(data) {
    const newsContainer = document.querySelector('.news-container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.innerHTML = `
            <a href="${item.link}" target="_blank">
                <img src="${item.image}" alt="${item.title}">
                <div class="card-content">
                    <h2>${item.title}</h2>
                    <p>热搜指数：${item.score}</p>
                </div>
            </a>
        `;
        newsContainer.appendChild(card);
    });
}

// 初始化
window.onload = () => {
    generateNewsCards(baiduHotSearchData);
};