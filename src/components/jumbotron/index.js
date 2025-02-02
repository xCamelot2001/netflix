import React from "react";
import { Inner } from "./styles/jumbotron";
import {
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Jumbotron.container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.Item = function JumbotronItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
