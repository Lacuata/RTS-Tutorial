import React from "react";

type ButtonProps = {
  // and appart from variant Props buttonProps will also include & React.ComponentProps<'button'> for generic type spcify button
  variant: "primary" | "secondary";
  children: string; //declare children type is string only however if we do this we can see the tpye of children is intersection on string and react.node and we don't want that we need to tell ts to leave out the children type from button html element tag for that we can use omit then type which is buttonElement then comma, then type we want to omit which is children
} & Omit<React.ComponentProps<"button">, "children">; // new with omit
// and now we see the chilren props we can see it is only typestring only

// } & React.ComponentProps<"button">; // old
// and now we can destructure children also of Button and ...rest in TSX

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  // in scenario primary class will apply if variant is primary and secondary class if variant is secondary
  return (
    <button className={`class-width${variant}`} {...rest}>
      {children}
    </button>
  );
  //   specify button props to include the html button props in addition to our special prop that react again provides a type
};

export default Button;

// Omit keyword omit takes an object types and removes the specified properties
