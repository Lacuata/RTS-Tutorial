// last point it is possible to extract or reusing types  and used it in multiple places like this  we're gonna do this in seperate file named extract.type.tsx

export type Name = {
  first: string;
  last: string;
};

export type NameListProps = {
  //   name: {
  //     first: string;
  //     last: string;
  //   };
  name: Name; // means the name type is Name which is the code above
};
