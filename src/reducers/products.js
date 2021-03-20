var initialState=[
    {
        id:1,
        name:'Iphone 6',
        image:'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        description:"Sản phẩm do Apple sản xuất",
        price:500,
        inventory:10,
        rating:4
    },
    {
        id:2,
        name:'Iphone 7',
        image:'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg',
        description:"Sản phẩm do Apple sản xuất",
        price:550,
        inventory:10,
        rating:3
    },
    {
        id:3,
        name:'Iphone 8',
        image:'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg',
        description:"Sản phẩm do Apple sản xuất",
        price:660,
        inventory:10,
        rating:5
    }
];

const products=(state=initialState, action)=>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;