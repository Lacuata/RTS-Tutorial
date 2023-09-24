// in this code we're gonna create seperate types for positve nega and isZero let's create a randomNumber type and extends it
type RandomNumberType = {
  // with 1 property value number
  value: number;
};
// equal to randomNumberTypes & means and  an object isPostive // and & operator here means positiveNumber contain all types of RandomNumberType in adition to is positive
type PositiveNumber = RandomNumberType & {
  isPositive: boolean; // boolean means here true when se set the props as true
  isNegative?: never; //we are telling you can never set is egative and isZero as prop when you set isPoisitve as true same to other 2
  isZero?: never;
};
// same to nega and isZero
type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isNegative: never;
  isPositive: never;
};

// now we can specify our restrictions  and for that typescript provides a never type for positive number we set like this code above

// Components Props type
// type RandomNumberProps = {
//     // and aside for this componentsProps we're gonna update it to
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber; //after we do this TS throw error at app.tsx that we are restricted passing in is negative and isZero when positive is true  so we need to remove them

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};
