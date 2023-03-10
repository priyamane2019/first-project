

 export const reducer = (state, action) => {
    if(action.type === "REMOVEITEM"){
        return{
            ...state, 
            item: state.item.filter((Ele)=>{
                return Ele.id !== action.payload;
            })

        }
    }
if(action.type === "CLEARALL")
{
   return {...state, item:[]};
}

if(action.type === "INCREMENT")
{
   let Updatequant = state.item.map((Ele)=>{
       if(Ele.id === action.payload)
       {
           return {
           ...Ele , quantity:Ele.quantity + 1 };
           }
           return Ele;
   });
   return {...state, item: Updatequant};
}

if(action.type === "DECREMENT")
{
   let Updatequant = state.item.map((Ele)=>{
       if(Ele.id === action.payload)
       {
           
           return {
           ...Ele , quantity:Ele.quantity - 1 };         
           }
           return Ele;
   })
   .filter((Ele)=>{return Ele.quantity !== 0 });

   return {...state, item: Updatequant};
}

if(action.type === "TOTALQUANTITY")
{
   let { totalItem, totalAmount } = state.item.reduce((accume, Ele)=>
   {
        let { quantity , price} = Ele;
        
        let updateTotalAmt = price*quantity;
        accume.totalAmount += updateTotalAmt;

        accume.totalItem += quantity;

       return accume;
   }, { totalItem:0,
       totalAmount:0,
   })
   return {...state, totalItem, totalAmount};
}


 return state;
}

