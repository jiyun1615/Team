const axios = require("axios");
const cheerio = require("cheerio");
const { unlink } = require("fs");
const log = console.log;

const getHtml = async() => {
    try{
        return await axios.get("https://musi.iptime.org/team/");
    }catch (error){
        console.error(error);
    }
};

getHtml()
    .then(html => {
        //console.log(html.data);
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.wp-block-group__inner-container ul li")
        console.log($bodyList.html())
        //console.log($bodyList.length)

        
        var fs = require('fs');
        var dataStr = "";

        $bodyList.each(function(i,elem){
            ulList[i] = {
                site : $(this).text(),
                url : $(this).find('a').attr('href')
            };
            dataStr = dataStr + "site : "+$(this).text() + " , url : " + $(this).find('a').attr('href') + "\n";
        });
    
        fs.writeFile('./siteList.txt', dataStr, function(err) {
            if (err) {
                console.log('write error:'+err);
            }
        });

        const data = ulList.filter(n=>n.site);           
        return data;
    })
    .then(res =>log(res));
