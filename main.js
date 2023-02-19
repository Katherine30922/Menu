//設定好一組HTML和CSS的資料格式，資料存陣列裡用map函數回傳再加上變數
// 用join函數把所有資料顯示在同個畫面上
const center=document.querySelector(".center");
const buttons=document.querySelectorAll(".btn");

const menu=[
    {
        id:1,
        title:"Fettuccine Alfredo",
        price:"$16",
        category:"Pastas",
        image:"https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        info:`Fettuccine pasta topped with a homemade rich decadent alfredo sauce.`,
    },
    {
        id:2,
        title:"Ravioli",
        price:"$18",
        category:"Pastas",
        image:"https://images.unsplash.com/photo-1560476652-f5bf553eac22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        info:`Recommending this mouth-watering Ravioli for you, as you sprawl across your couch watching Glee.`,
    },
    {
        id:3,
        title:"Classic Tomato Spaghetti",
        price:"$15",
        category:"Pastas",
        image:"https://images.unsplash.com/photo-1608334481162-bba440193a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
        info:`Chicken breast, garlic, crushed red pepper & peas in Classic Tomato sauce`,
    },
    {
        id:4,
        title:"Lasagna",
        price:"$20",
        category:"Pastas",
        image:"https://images.unsplash.com/photo-1588418440629-7e2811259e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fExhc2FnbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        info:`Towering layers of meat sauce, ricotta, mozzarella, provolone & parmesan`,
    },
    {
        id:5,
        title:"Fettuccine Bolognese",
        price:"$22",
        category:"Pastas",
        image:"https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
        info:`The best comfort food for a cold day. Rich, meaty homemade sauce is tossed with pasta that you can twirl around your fork.`,
    },
    {
        id:6,
        title:"Apple Gorgonzola",
        price:"$9",
        category:"Salads",
        image:"https://images.unsplash.com/photo-1527763874622-d23474336e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fEFwcGxlJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        info:`Granny Smith apples, spiced walnuts, dried cranberries & Gorgonzola tossed with mixed lettuce`
    },
    {
        id:7,
        title:"Caesar",
        price:"$10",
        category:"Salads",
        image:"https://images.unsplash.com/photo-1574926054530-540288c8e678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Q2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        info:`Romaine hearts tossed in our signature Caesar dressing with roasted garlic croutons & parmesan`
    },
    {
        id:8,
        title:"Creamy Roasted Pumpkin Soup",
        price:"$5",
        category:"Soup",
        image:" https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        info:`It’s super creamy, with a little help from coconut milk yet plenty healthy, too.`
    },
    {
        id:9,
        title:"Potato Leek Soup",
        price:"$6",
        category:"Soup",
        image:"https://images.unsplash.com/photo-1616501268209-edfff098fdd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        info:`That's it, the temperature drops at the same time as the leaves. We all need a little comfort with this excellent soup!`
    },
    {
        id:10,
        title:"Orange juice",
        price:"$2",
        category:"Drink",
        image:"https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        info:``
    },
    {
        id:11,
        title:"Cappuccino",
        price:"$5",
        category:"Drink",
        image:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2FwcHVjY2lub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        info:``
    },
    {
        id:12,
        title:"Strawberry Milkshake",
        price:"$6",
        category:"Drink",
        image:"https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8U3RyYXdiZXJyeSUyME1p",
        info:``
    },
    {
        id:13,
        title:"Cheesecake",
        price:"$4",
        category:"Desserts",
        image:"https://images.unsplash.com/photo-1631427574284-e51f812b05c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNoZWVzZWNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        info:``
    }, {
        id:14,
        title:"Strawberry Cupcake",
        price:"$4",
        category:"Desserts",
        image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        info:``
    },
    {
        id:15,
        title:"Tiramisu",
        price:"$3",
        category:"Desserts",
        image:"https://images.unsplash.com/photo-1568627175548-e7e20bb79f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRpcmFtaXN1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        info:``
    }
    ];

//把陣列資料顯示在畫面上
window.addEventListener("DOMContentLoaded",function(){
    displayItem(menu);
});

//透過函式回傳取得HTML格式，把把陣列資料放進去並集合顯示
function displayItem(menuItem){//函式一定要加上括號內的參數
    let displayItem=menuItem.map(function(item){//這裡用let因為陣列理資料是變數
        /*map():对回傳的元素进行更改，跟foreach()類似，差別是foreach不會回傳不能用return且會修改原本的陣列
         1.會透過函式內所回傳的值組合成一個新的陣列 
         2.並不會改變原陣列 
         3.回傳數量會等於原始陣列的長度*/
        return `<article class="menuItem">
                    <img src="${item.image}">
                    <div class="itemtext">
                        <h2>${item.title}</h2>
                        <h2>${item.price}</h2>
                        <p class="iteminfo">
                            ${item.info}
                        </p>
                </article>`
    });
    displayItem=displayItem.join('');//這裡加空格可以避免格式自動產生逗號讓版面跑掉
    center.innerHTML=displayItem;
}
// setting buttons
buttons.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const category=e.currentTarget.dataset.btn//取得HTML裡的data category
        const menuCategory=menu.filter(function(menuItem){//array裡的category
            if(menuItem.category===category){//若menuItem的category等於點擊按鈕的category
                return menuItem;//回傳該物的category
            }
        });
        if(category==="All"){
            displayItem(menu);
        }else{
            displayItem(menuCategory);
        }
    });
});

//get the unique categories


