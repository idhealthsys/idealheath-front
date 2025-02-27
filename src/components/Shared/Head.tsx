'use client'
import React from "react";
type HeadProps = {
  title: string;
  description: string;
};

const Head = ({ title, description }: HeadProps) => {
  React.useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [description, title]);
  return <></>;
};

export default Head;
