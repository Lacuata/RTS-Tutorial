import React from "react";

// components Props type // pass in generic type <>
type TextOwnProps<E extends React.ElementType> = {
  // we can say E for React.Element
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  //   as?: React.ElementType;\
  as?: E; // means also the code above
};

// step 3 define text poprs type as combination of text owned props along with html tag supposed to accept we need to idenfity which html element whose props need to be combined with textOwnProps btw html element has an as props from TextOwnProps could be anything so what we need is generic elmene type  which we pass in on TextOwnProps and TextProps then pass it / The generic type is the <E> that we pass in
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>; // means Omit<firstargumment , secondargument

//   now we have now all type of this element exept for the type we have specified our selves

// we need to also add the generic type        = default element div tag
export const Test = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div"; // and stored it on component the as props || 'div' tag

  //   return <div className={`class-width-${size}-${color}`}>{children}</div>;

  // now instead of dig tag specify Component
  return (
    <Component className={`class-width-${size}-${color}`}>{children}</Component>
    // return an error TS not happy complaining component type because props cannot be any random strings

    // step 2 fix type of the props  to React.elementType since the type or props we are passing is a string but it was an html tag so we need to changes in the textprops as type as React.ElementType
  );
};
