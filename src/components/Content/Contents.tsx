import React from 'react';
import {GotContent} from "../../types";
import Content from "./Content";

interface Props {
  newContents: GotContent[];
}

const Contents: React.FC<Props> = ({newContents}) => {
  return (
    <>
      {newContents.map((itemContent => (
        <Content
          key={Math.random() * 99999}
          newContent={itemContent}
        />
      )))}
    </>
  );
};

export default Contents;