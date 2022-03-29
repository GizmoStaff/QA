const { PlaywrightTestConfig, chromium } = require("@playwright/test");

const config={
retries:0,
timeout:30000,
expect:7000,


use:{
    baseURL:"https://demoqa.com",
    headless:false,
    

}



};

module.exports=config;