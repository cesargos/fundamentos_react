// Exercício #8 - Rendereização condicional
const If = (props) => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  const elseChild = children.find((child) => child.type?.name === 'Else');
  const ifChildren = children.filter((child) => child !== elseChild);

  if (props?.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
};

export const Else = (props) => props.children;
export default If;
