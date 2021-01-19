var loadNum = 0

//商品加入購物車函式
var ShopCart=(name,price)=>
{
    var $text = $('<p>'+name+ '</p>');
    var $input = $('<input>').attr('type','number').attr('value','1').attr('min','0').attr('max','3');
    var $money = $('<p>'+'$'+price+'</p>').attr('style','color:red;').attr('value',price);
    var $cancel = $('<button>移出購物車</button>').addClass('shop').attr('id','cancelbutton');
    var $totalmoney = $('<p>'+'$'+price+'</p>').attr('style','color:red;').attr('value',price).addClass('totalmoney');

    var $tdtext = $('<td>');
    var $tdmoney = $('<td>');
    var $tdcount = $('<td>');
    var $tdtotal = $('<td>');
    var $tdcancel = $('<td>');
    
    
    $tdmoney.append($money);
    $tdcount.append($input);
    $tdtext.append($text);
    $tdcancel.append($cancel);
    $tdtotal.append($totalmoney);

    var $tr = $('<tr>')
    $tr.append($tdtext).append($tdmoney).append($tdcount).append($tdtotal).append($tdcancel)
    
    $('#cart').append($tr)
    $('#compute').show()

    $($input).on('click', () => {
         let count = $input.val(); //去抓input的值(value屬性)
         count = Number(count);
         let price = $money.attr('value');
         price = Number(price);
         price = price * count;
         $totalmoney.attr('value',price); //修改商品價格
         $totalmoney.text('$'+price); //修改顯示的商品價格

        var tp = 0; //價格結算
        let totalPrice = $('.totalmoney').get();
        for(let i = 0; i < $(totalPrice).length ; i++)
        {
            tp = tp + Number($(totalPrice[i]).attr('value'));
        }
        
        $('#TP').text('Total Price $' + tp).show();
    })

    $($cancel).on('click',()=>{
        $cancel.parent().parent().remove();
        let totalPrice = $('.totalmoney').get(); //抓取所有class為"totalmoney"的HTML element，並存成一個陣列
        
        var tp = 0;
        for(let i = 0; i < totalPrice.length ; i++)
        {
            tp = tp + Number($(totalPrice[i]).attr('value'));
        }
        
        $('#TP').text('Total Price $' + tp).show();
    })

    let totalPrice = $('.totalmoney').get(); //抓取所有class為"totalmoney"的HTML element，並存成一個陣列
    var tp = 0;
    for(let i = 0; i < totalPrice.length ; i++)
    {
        tp = tp + Number($(totalPrice[i]).attr('value'));
    }
    
    $('#TP').text('Total Price $' + tp).show()
}

function outOfStock()
{
    alert("本商品目前缺貨中，我們將盡快為您補貨！");
}

$(() => {


    /* 將商品加入購物車*/
    $('.gunpla25').on('click', () => {
        ShopCart("RG 1/144 #025 獨角獸鋼彈",980);
    })
    $('.gunpla29').on('click', () => {
        ShopCart("RG 1/144 #029 沙薩比",1160);
    })
    $('.gunpla5').on('click', () => {
        ShopCart("RG 1/144 #005 自由鋼彈",640);
    })
    $('.gunpla27-sp').on('click', () => {
        ShopCart("RG 1/144 #027-SP 報喪女妖",1030);
    })
    $('.gunpla1').on('click', () => {
        ShopCart("RG 1/144 #001 初代鋼彈",650);
    })
    $('.gunpla31').on('click', () => {
        ShopCart("RG 1/144 #031 海盜鋼彈",650);
    }) 
    $('.gunpla19').on('click', () => {
        ShopCart("RG 1/144 #019 紅異端鋼彈",650);
    })
    $('.gunpla27').on('click', () => {
        ShopCart("RG 1/144 #027 報喪女妖",1050);
    })
    $('.gunpla24').on('click', () => {
        ShopCart("RG 1/144 #024 金異端鋼彈",770);
    })
    $('.gunpla28').on('click', () => {
        ShopCart("RG 1/144 #028 托爾吉斯EW",645);
    })

    $('.gunpla32').on('click', () => {
        outOfStock();
    })
    $('.gunpla32plus').on('click', () => {
        outOfStock();
    })
    
    $('#compute').on('click', () => {
        let totalPrice = $('.totalmoney').get() //抓取所有class為"totalmoney"的HTML element，並存成一個陣列
        
        var tp = 0
        for(let i = 0; i < totalPrice.length ; i++)
        {
            tp = tp + Number($(totalPrice[i]).attr('value'))
        }
        
        $('#TP').text('Total Price $' + tp).show()
    })
    
})