const fs = require("fs");
const { mkchar } = require("./Database/dataschema.js");


/* ---Added Anime Character list---  /

 0 --- Atlas MD
 1 --- Power
 2 --- Makima
 3 --- Denji
 4 --- Zero Two
 5 --- Chika
 6 --- Miku
 7 --- Marin Kitagawa
 8 --- Ayanokoji
 9 --- Ruka
10 --- Mizuhara
11 --- Rem
12 --- Sumi
13 --- Kaguya
14 --- Yumeko
15 --- Kurumi
16 --- Mai
17 --- Yor
18 --- Shinbou
19 --- Eiko
20 --- Benimaru
21 --- Hinata
22 --- Obito
23 --- Mikasa
24 --- Emilia
25 --- Ayane // Not yet programmed


Image Source: https://wall.alphacoders.com/
Image Source: https://wallpapercave.com/

*/



global.charID0 = {
    botName : "𝘼𝙩𝙡𝙖𝙨 𝙈𝘿",
    botVideo : fs.readFileSync("./Assets/atlas.mp4"),
    botImage1 : "https://i.imgur.com/MClOeqe.jpeg",
    botImage2 : "https://i.imgur.com/MClOeqe.jpeg",
    botImage3 : "https://i.imgur.com/MClOeqe.jpeg",
    botImage4 : "https://i.imgur.com/MClOeqe.jpeg",
    botImage5 : "https://i.imgur.com/MClOeqe.jpeg",
    botImage6 : "https://i.imgur.com/MClOeqe.jpeg",
}

global.charID1 = {
  botName : "𝙋𝙤𝙬𝙚𝙧 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/power.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp11253614.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp9413488.jpg",
  botImage3 : "https://wallpapercave.com/wp/wp11628561.jpg",
  botImage4 : "https://wallpapercave.com/wp/wp11733443.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp11733435.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp11733458.jpg",
}

global.charID2 = {
  botName : "𝙈𝙖𝙠𝙞𝙢𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/makima.mp4"),
  botImage1 : "https://images5.alphacoders.com/126/1264439.jpg",
  botImage2 : "https://images8.alphacoders.com/122/1227171.jpg",
  botImage3 : "https://wallpapercave.com/wp/wp9666940.png",
  botImage4 : "https://images6.alphacoders.com/123/1238644.jpg",
  botImage5 : "https://images2.alphacoders.com/128/1280153.jpg",
  botImage6 : "https://images7.alphacoders.com/129/1292566.png",
}

global.charID3 = {
  botName : "𝘿𝙚𝙣𝙟𝙞 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/denji.mp4"),
  botImage1 : "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1",
  botImage2 : "https://images.alphacoders.com/128/1284967.jpg",
  botImage3 : "https://images.alphacoders.com/128/1286017.jpg",
  botImage4 : "https://images6.alphacoders.com/128/1289086.jpg",
  botImage5 : "https://images2.alphacoders.com/124/1247132.jpg",
  botImage6 : "https://images2.alphacoders.com/128/1286464.jpg",
}

global.charID4 = {
  botName : "𝙕𝙚𝙧𝙤 𝙏𝙬𝙤 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/zerotwo.mp4"),
  botImage1 : "https://images3.alphacoders.com/949/949253.jpg",
  botImage2 : "https://images7.alphacoders.com/898/898638.jpg",
  botImage3 : "https://images4.alphacoders.com/908/908470.jpg",
  botImage4 : "https://images6.alphacoders.com/981/981839.jpg",
  botImage5 : "https://images4.alphacoders.com/907/907474.jpg",
  botImage6 : "https://images4.alphacoders.com/923/923051.jpg",
}

global.charID5 = {
  botName : "𝘾𝙝𝙞𝙠𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/chika.mp4"),
  botImage1 : "https://images4.alphacoders.com/100/1002134.png",
  botImage2 : "https://images4.alphacoders.com/100/1002714.jpg",
  botImage3 : "https://images7.alphacoders.com/107/1071650.jpg",
  botImage4 : "https://images3.alphacoders.com/127/1272368.png",
  botImage5 : "https://images3.alphacoders.com/122/1225194.png",
  botImage6 : "https://wallpapercave.com/wp/wp4624851.jpg",
}

global.charID6 = {
  botName : "𝙈𝙞𝙠𝙪 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/miku.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp10524580.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp4828029.jpg",
  botImage3 : "https://images4.alphacoders.com/102/1026046.jpg",
  botImage4 : "https://wallpapercave.com/uwp/uwp1229563.jpeg",
  botImage5 : "https://images7.alphacoders.com/129/1294874.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp5758284.jpg",
}

global.charID7 = {
  botName : "𝙈𝙖𝙧𝙞𝙣 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/marin.mp4"),
  botImage1 : "https://images2.alphacoders.com/125/1257915.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp10472356.png",
  botImage3 : "https://images7.alphacoders.com/121/1210002.png",
  botImage4 : "https://images8.alphacoders.com/122/1223407.jpg",
  botImage5 : "https://images7.alphacoders.com/121/1211490.jpg",
  botImage6 : "https://images3.alphacoders.com/122/1223868.png",
}

global.charID8 = {
  botName : "𝘼𝙮𝙖𝙣𝙤𝙠𝙤𝙟𝙞 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/ayanokoji.mp4"),
  botImage1 : "https://wallpapers.com/images/file/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp6530733.jpg",
  botImage3 : "https://wallpapercave.com/wp/wp4781992.jpg",
  botImage4 : "https://images5.alphacoders.com/106/1065278.jpg",
  botImage5 : "https://e1.pxfuel.com/desktop-wallpaper/986/75/desktop-wallpaper-kiyotaka-ayanokoji-1920x1080-ayanokoji.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp6239118.jpg",
}

global.charID9 = {
  botName : "𝙍𝙪𝙠𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/ruka.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp8228630.jpg",
  botImage2 : "https://wallpapercave.com/uwp/uwp1175286.jpeg",
  botImage3 : "https://wallpapercave.com/uwp/uwp1175303.jpeg",
  botImage4 : "https://wallpapercave.com/uwp/uwp1175283.jpeg",
  botImage5 : "https://wallpapercave.com/uwp/uwp1175295.jpeg",
  botImage6 : "https://wallpapercave.com/uwp/uwp1175288.jpeg",
}

global.charID10 = {
  botName : "𝙈𝙞𝙯𝙪𝙝𝙖𝙧𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/mizuhara.mp4"),
  botImage1 : "https://images3.alphacoders.com/128/1288059.png",
  botImage2 : "https://images3.alphacoders.com/125/1251910.jpg",
  botImage3 : "https://images4.alphacoders.com/128/1288307.jpg",
  botImage4 : "https://images4.alphacoders.com/124/1249307.jpg",
  botImage5 : "https://images.alphacoders.com/109/1092221.jpg",
  botImage6 : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2826f42-0f8b-474b-a8fe-4eafcf19e668/de4mm6i-06106be4-66ec-4afc-893f-a0e636f0d54b.png/v1/fill/w_1192,h_670,q_70,strp/chizuru_ichinose_wallpaper__kanojo__okarishimasu__by_galangcp_de4mm6i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZTI4MjZmNDItMGY4Yi00NzRiLWE4ZmUtNGVhZmNmMTllNjY4XC9kZTRtbTZpLTA2MTA2YmU0LTY2ZWMtNGFmYy04OTNmLWEwZTYzNmYwZDU0Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1UYFEEtJq_VcWVVJ8mlR7pdEdS8F83RhcFKl0e1e5xE",
}

global.charID11 = {
  botName : "𝙍𝙚𝙢 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/rem.mp4"),
  botImage1 : "https://images.alphacoders.com/711/711900.png",
  botImage2 : "https://wallpapercave.com/uwp/uwp3278068.jpeg",
  botImage3 : "https://images.alphacoders.com/737/737390.jpg",
  botImage4 : "https://images.alphacoders.com/729/729307.png",
  botImage5 : "https://images2.alphacoders.com/720/720108.png",
  botImage6 : "https://images4.alphacoders.com/764/764738.jpg",
}

global.charID12 = {
  botName : "𝙎𝙪𝙢𝙞 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/sumi.mp4"),
  botImage1 : "https://moewalls.com/wp-content/uploads/2022/07/sumi-sakurasawa-hmph-rent-a-girlfriend-thumb.jpg",
  botImage2 : "https://images6.alphacoders.com/128/1281400.jpg",
  botImage3 : "https://i.redd.it/qoup7b32te771.png",
  botImage4 : "https://images2.alphacoders.com/125/1254137.jpg",
  botImage5 : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c34bd178-74e0-4f45-8e9d-497d7fe05067/de63flz-ff249d9b-4a54-4161-a035-bbacf2c08e3a.jpg/v1/fill/w_1192,h_670,q_70,strp/sakurasawa_sumi_kanojo_okarishimasu_by_eriri94_de63flz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwNyIsInBhdGgiOiJcL2ZcL2MzNGJkMTc4LTc0ZTAtNGY0NS04ZTlkLTQ5N2Q3ZmUwNTA2N1wvZGU2M2Zsei1mZjI0OWQ5Yi00YTU0LTQxNjEtYTAzNS1iYmFjZjJjMDhlM2EuanBnIiwid2lkdGgiOiI8PTI1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6nao2AEE11b72jYpTygsqBehzNQqAPqEvHxV1Sr-Ef0",
  botImage6 : "https://images8.alphacoders.com/124/1249290.png",
}

global.charID13 = {
  botName : "𝙆𝙖𝙜𝙪𝙮𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/kaguya.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp6099650.png",
  botImage2 : "https://wallpapercave.com/wp/wp5733231.png",
  botImage3 : "https://wallpapercave.com/wp/wp4384722.png",
  botImage4 : "https://wallpapercave.com/wp/wp6179983.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp6180278.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp4384708.jpg",
}

global.charID14 = {
  botName : "𝙔𝙪𝙢𝙚𝙠𝙤 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/yumeko.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp5017991.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp4304699.png",
  botImage3 : "https://wallpapercave.com/wp/wp9620389.jpg",
  botImage4 : "https://wallpapercave.com/wp/wp8695798.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp7856220.png",
  botImage6 : "https://wallpapercave.com/wp/wp9620423.png",
}

global.charID15 = {
  botName : "𝙆𝙪𝙧𝙪𝙢𝙞 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/kurumi.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp2535489.jpg",
  botImage2 : "https://wallpapercave.com/wp/wp5179279.jpg",
  botImage3 : "https://wallpapercave.com/wp/wp6600405.jpg",
  botImage4 : "https://wallpapercave.com/wp/wp5894820.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp1924816.png",
  botImage6 : "https://wallpapercave.com/wp/wp6600417.jpg",
}

global.charID16 = {
  botName : "𝙈𝙖𝙞 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/mai.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp8435260.png",
  botImage2 : "https://images6.alphacoders.com/129/1292073.png",
  botImage3 : "https://wallpapercave.com/wp/wp5233923.jpg",
  botImage4 : "https://images4.alphacoders.com/971/971659.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp10128838.png",
  botImage6 : "https://wallpapercave.com/wp/wp10128852.jpg",
}

global.charID17 = {
  botName : "𝙔𝙤𝙧 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/yor.mp4"),
  botImage1 : "https://images7.alphacoders.com/123/1236729.jpg",
  botImage2 : "https://images7.alphacoders.com/122/1229718.jpg",
  botImage3 : "https://images.alphacoders.com/123/1238264.jpg",
  botImage4 : "https://images4.alphacoders.com/123/1233274.jpg",
  botImage5 : "https://images.alphacoders.com/124/1241835.png",
  botImage6 : "https://images4.alphacoders.com/123/1235462.jpg",
}

global.charID18 = {
  botName : "𝙎𝙝𝙞𝙣𝙤𝙗𝙪 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/shinbou.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp4650481.jpg",
  botImage2 : "https://wallpapercave.com/uwp/uwp2138883.webp",
  botImage3 : "https://wallpapercave.com/wp/wp4650483.jpg",
  botImage4 : "https://wallpapercave.com/wp/wp10513585.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp9650524.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp10513578.jpg",
}

global.charID19 = {
  botName : "𝙀𝙞𝙠𝙤 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/eiko.mp4"),
  botImage1 : "https://images8.alphacoders.com/122/1229829.jpg",
  botImage2 : "https://images2.alphacoders.com/123/1234944.png",
  botImage3 : "https://images5.alphacoders.com/123/1235274.jpg",
  botImage4 : "https://images6.alphacoders.com/126/1260043.png",
  botImage5 : "https://images6.alphacoders.com/124/1247977.jpg",
  botImage6 : "https://images2.alphacoders.com/125/1251795.jpg",
}

global.charID20 = {
  botName : "𝘽𝙚𝙣𝙞𝙢𝙖𝙧𝙪 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/benimaru.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp5950608.png", 
  botImage2 : "https://wallpapercave.com/wp/wp5950713.jpg", 
  botImage3 : "https://wallpapercave.com/wp/wp5950778.jpg", 
  botImage4 : "https://wallpapercave.com/wp/wp5950813.png",
  botImage5 : "https://wallpapercave.com/wp/wp5950773.png",
  botImage6 : "https://wallpapercave.com/wp/wp6240991.jpg",
}

global.charID21 = {
  botName : "𝙃𝙞𝙣𝙖𝙩𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/hinata.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp2598741.jpg", 
  botImage2 : "https://wallpapercave.com/wp/wp9177084.jpg", 
  botImage3 : "https://wallpapercave.com/wp/wp8526286.jpg", 
  botImage4 : "https://wallpapercave.com/wp/wp9177242.png",
  botImage5 : "https://wallpapercave.com/wp/wp2598741.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp2598739.jpg",
}

global.charID22 = {
  botName : "𝙊𝙗𝙞𝙩𝙤 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/obito.mp4"),
  botImage1 : "https://wallpapercave.com/wp/wp2714940.jpg", 
  botImage2 : "https://wallpapercave.com/wp/wp2657578.jpg", 
  botImage3 : "https://wallpapercave.com/wp/wp7758015.jpg", 
  botImage4 : "https://wallpapercave.com/wp/wp7757977.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp7757893.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp2605233.jpg",
}

global.charID23 = {
  botName : "𝙈𝙞𝙠𝙖𝙨𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/mikasa.mp4"),
  botImage1 : "https://wallpapercave.com/uwp/uwp2564410.jpeg", 
  botImage2 : "https://wallpapercave.com/wp/wp9257843.jpg", 
  botImage3 : "https://wallpapercave.com/wp/wp6281199.jpg", 
  botImage4 : "https://wallpapercave.com/wp/wp1975781.jpg",
  botImage5 : "https://wallpapercave.com/wp/wp9257803.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp1975650.jpg",
}

global.charID24 = {
  botName : "𝙀𝙢𝙞𝙡𝙞𝙖 𝙈𝘿",
  botVideo : fs.readFileSync("./Assets/emilia.mp4"),
  botImage1 : "https://wallpapercave.com/uwp/uwp1074204.jpeg", 
  botImage2 : "https://wallpapercave.com/uwp/uwp1074206.jpeg", 
  botImage3 : "https://wallpapercave.com/uwp/uwp2505155.jpeg", 
  botImage4 : "https://wallpapercave.com/uwp/uwp810727.png",
  botImage5 : "https://wallpapercave.com/wp/wp3921802.jpg",
  botImage6 : "https://wallpapercave.com/wp/wp1860762.png",
}

/*
global.charID25 = {
  botName : "Ayane",
  botVideo : fs.readFileSync(""),
  botImage1 : "", 
  botImage2 : "", 
  botImage3 : "", 
  botImage4 : "",
  botImage5 : "",
  botImage6 : "",
}
*/
