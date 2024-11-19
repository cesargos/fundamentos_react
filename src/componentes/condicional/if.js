export default (props) => {
  const elseChild = props.children.find(
    (child) => child?.type?.name === 'Else',
  );
  const ifChildren = props.children.filter((child) => child !== elseChild);
  console.log({ props });
  console.log({ elseChild });
  if (props.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
};

export const Else = (props) => props.children;
