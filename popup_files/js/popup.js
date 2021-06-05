//first
const iframe = document.getElementById('iframe');

//version
let manifestData = chrome.runtime.getManifest();
let ex_version = manifestData.version + "";
$('#ex_version').text('ニコニ広告ex. v'+ex_version);

// 外部リンク
$(document).ready(function(){
  $('body').on('click', 'a', function(){
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });
});

$('#page_ticket').on('click',function(){
  $('.navbut').removeClass('active');
  $(this).addClass('active');
  iframe.contentWindow.location.replace('https://nicoad.nicovideo.jp/my#tickets');
});
$('#page_hukubiki').on('click',function(){
  $('.navbut').removeClass('active');
  $(this).addClass('active');
  iframe.contentWindow.location.replace('https://nicoad.nicovideo.jp/campaign');
});
$('#page_thanks').on('click',function(){
  $('.navbut').removeClass('active');
  $(this).addClass('active');
  iframe.contentWindow.location.replace('http://example.com');
});
$('#page_update').on('click',function(){
  $('.navbut').removeClass('active');
  $(this).addClass('active');
  iframe.contentWindow.location.replace('update_info.html');
});