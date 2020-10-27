const express=require("express")
const app=express()
const router=express.Router()
const parser = require('rss-url-parser')
router.get('/feed',(req,res)=>{
    (async () => {
 

        const feed = await parser('https://www.espncricinfo.com/rss/content/story/feeds/0.xml')
        // let feed = await parser.parseURL('https://www.espncricinfo.com/rss/content/story/feeds/0.xml');
        // console.log(feed.title);
        // feed.items.forEach(item => {
        //   console.log(item.title + ':' + item.link)
        // });
       
        return res.status(200).json({data:feed})
      })();
  
})
router.get("/live",(req,res)=>{
    (async () => {
 

        const feed = await parser('http://static.cricinfo.com/rss/livescores.xml')
        // let feed = await parser.parseURL('http://static.cricinfo.com/rss/livescores.xml');
        // console.log(feed.title);
        // feed.items.forEach(item => {
        //   console.log(item.title + ':' + item.link)
        // });
        console.log(feed);
        return res.status(200).json({data:feed})
      })();
  
})
// router.get("/ff",(req,res)=>{
//     (async () => {
 
//         let feed = await parser.parseURL("http://www.espncricinfo.com/ci/content/story/1236791.html?CMP=OTC-RSS");
//         console.log(feed.title);
//         // feed.items.forEach(item => {
//         //   console.log(item.title + ':' + item.link)
//         // });
       
//         return res.status(200).json({data:feed})
//       })();
  
// })
router.get('/latest',(req,res)=>{
  (async () => {
 

    const feed = await parser('https://www.espncricinfo.com/rss/content/story/feeds/0.xml')
    // let feed = await parser.parseURL('https://www.espncricinfo.com/rss/content/story/feeds/0.xml');
    // console.log(feed.title);
    // feed.items.forEach(item => {
    //   console.log(item.title + ':' + item.link)
    // });
   
    return res.status(200).json({data:feed})
  })();
})
module.exports=router;
