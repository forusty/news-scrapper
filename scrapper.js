const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.cgtn.com/special/Battling-the-novel-coronavirus-What-we-know-so-far-.html';
let timeLineContent = require('./ctgn-news.json');

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const timeLine = $('.timeline-item');
        timeLine.each(function() {
            const dataID = $(this).find('.cmsMainContent').attr('data-id');
            if (!timeLineContent.hasOwnProperty('merchant_id')) {
                const time = $(this).find('.timeline-time').text();
                const title = $(this).find('.news-title').text();
                const text = $(this).find('.text > p');
                const contentArr = [];
                text.each(function() {
                    const message = $(this).text();
                    contentArr.push(message);
                });
                timeLineContent[dataID] = {
                    time,
                    title,
                    contentArr
                };
            }
        });

        let data = JSON.stringify(timeLineContent);
        fs.writeFileSync('ctgn-news.json', data);
    })
    .catch(console.error);