const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
    try{
        return await axios.get("https://www.naver.com/");
    }catch (error){
        console.error(error);
    }
};

getHtml()
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.realtime_area ul.list_realtime.NM_RTK_VIEW_list_content").children("li.realtime_item.connect_on");

        $bodyList.each(function(i,elem){
            ulList[i] = {
                title : $(this).find('span.keyword').text(),
                url : $(this).find('link_keyword').attr('href')
            };
        });

        const data = ulList.filter(n=>n.title);
        return data;
    })
    .then(res =>log(res));