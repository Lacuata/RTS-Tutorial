// Toast notification components

// types of components
type HorizontalPosition = "Left" | "Right" | "Center";
type VerticalPosition = "Top" | "Center" | "Bottom";

// use template literal to combine horizontal and vertical
type ToastProps = {
  // the first element is this in our angle bracket the second is comma type we want to do that is Center-Center
  position:
    | Exclude<
        `${HorizontalPosition}-${VerticalPosition}`,
        "Center-Center" // and now we still need to allow just center though so we can make use union again
      >
    | "Center"; //like this | this is called pipe character |
};
const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
