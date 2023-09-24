// import React from "react";

// // this component is simple component that accept an array of an items and handles click event

// // generic type step 1 add anglebracket <T> with T inside t is sor of convention stands for type

// type ListProps<T> = {
//   // if we use angleBracket and ListProps accespt it we need to asign items and in the onClick aswell
//   items: T[];
//   onClick: (value: T) => void; // when we do this we're gonna get error on ListProps at const List because we need to specify generic type on line 1

//   //   items: string[] | number[]; //old
//   // onClick: (value: string | number) => void; //old
// };
// // specify what T can be  and needs to extends a base type {empty object} <T extends {}> it also called constraint generic type
// // const List = <T extends {}>({ items, onClick }: ListProps<T>) => {  //Like this adding<T> onListProps

// // if we want to be specified only an array or number  or strings we specify like this
// const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
//   // but if we specify we can only pass string and number and will error if we pass object
//   return (
//     <div>
//       <h2>List of items</h2>
//       {items.map((item, index) => (
//         <div key={index} onClick={() => onClick(item)}>
//           {/* {item //Then change this to JSON.stringfy(item)} to works  */}
//           {/* so the error is gone in item now we can now pass in an array of any type and list components  and will not throw an error */}
//           {JSON.stringify(item)}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;

// but if we want to mentioning that each object must contain an id property
import React from "react";

type ListProps<T> = {
  items: T[]; //what is the T this T contain our List props we pass string number array and even objct
  onClick: (value: T) => void;
};
// we're gonna specify T extends object contain property id type number{id:number} //this restriction will ensure we can safely pass item.id to the key props  of list item
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => (
        <div key={item.id} onClick={() => onClick(item)}>
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  );
};

export default List;
