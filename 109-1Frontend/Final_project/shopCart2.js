var loadNum = 0

//產生購物車商品函式
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
         if (name === "MGEX 1/100 獨角獸鋼彈 Ver.Ka")
         {
             alert("熱賣商品，限購一組")
             $input.val(1);
            count = 1;
         }
         let price = $money.attr('value');
         price = Number(price);
         price = price * count;
         $totalmoney.attr('value',price); //修改商品價格
         $totalmoney.text('$'+price); //修改顯示的商品價格

        var tp = 0;
        let totalPrice = $('.totalmoney').get();
        for(let i = 0; i < totalPrice.length ; i++)
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

function outOfStock(){
    alert("本商品目前缺貨中，我們將盡快為您補貨！")
}

$(() => {


    /* 將商品加入購物車*/
    $('.gunpla32').on('click', () => {
        ShopCart("MG 1/100 獵魔鋼彈",1299);
    })
    $('.gunpla25').on('click', () => {
        ShopCart("MG 1/100 逆紅異端使",1799);
    })
    $('.gunpla29').on('click', () => {
        ShopCart("MG 1/100 雪崩型能天使",1750);
    })
    $('.gunpla5').on('click', () => {
        ShopCart("MG 1/100 獨角獸鋼彈",1150);
    })
    $('.gunpla32plus').on('click', () => {
        ShopCart("MG 1/100 量子型OO 全刃式",1420);
    })
    $('.gunpla27-sp').on('click', () => {
        ShopCart("MG 1/100 GN-002 力天使",1160);
    }) 
    $('.gunpla1').on('click', () => {
        ShopCart("MG 1/100 ZZ",1550);
    })
    $('.gunpla31').on('click', () => {
        ShopCart("MGEX 1/100 獨角獸鋼彈 Ver.Ka",6899);
    })
    $('.gunpla19').on('click', () => {
        ShopCart("MG 1/100 鋼彈F91 ver.2.0",1050);
    })
    $('.gunpla27').on('click', () => {
        ShopCart("MG 1/100 主天使鋼彈",1250);
    })

    $('.gunpla24').on('click', () => {
        ShopCart("MG 1/100 初代鋼彈",1180);
    })
    $('.gunpla28').on('click', () => {
        ShopCart("MG 1/100 報喪女妖 VER.Ka",1290);
    })
    
    $('#compute').on('click', () => {
        let totalPrice = $('.totalmoney').get() //抓取所有class為"totalmoney"的HTML element，並存成一個陣列
        //console.log(typeof(totalPrice))
        //console.log(totalPrice)
        var tp = 0
        for(let i = 0; i < totalPrice.length ; i++)
        {
            tp = tp + Number($(totalPrice[i]).attr('value'))
        }
        
        $('#TP').text('Total Price $' + tp).show()
    })
    
})