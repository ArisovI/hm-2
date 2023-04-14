import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={1058}
    height={334}
    viewBox="0 0 1058 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="340" height="334" />
    <rect x="360" y="0" rx="5" ry="5" width="340" height="334" />
    <rect x="720" y="0" rx="5" ry="5" width="340" height="334" />
  </ContentLoader>
);

export default Skeleton;
