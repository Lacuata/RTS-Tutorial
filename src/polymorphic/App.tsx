import React from "react";
import { Test } from "./Test";

const App = () => {
  return (
    <div>
      {/* as is called a polymorphic component whcih is we want them to behave as an html element */}
      {/* 1st we need an ass prop type which controls what element to rendered in browser in Test */}
      {/* we are passing on Test as props from Test as an H1 p or label html tag */}
      <Test as="h1" size="lg">
        Heading
      </Test>
      <Test as="p" size="md">
        Paragraph
      </Test>
      {/* step 3 we're asking test component rendered as h1 p and label but the component os not capable handling the html elem props example the label has typically have a for attribute ex htmlFor='someId'  it's gonna throw an error to fix this change textProps to textownProps */}
      <Test as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Test>
    </div>
  );
};

export default App;
