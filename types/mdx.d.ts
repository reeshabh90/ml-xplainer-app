declare module '*.mdx' {
  import * as React from 'react';
  let MDXComponent: (props: any) => React.ReactElement;
  export default MDXComponent;
}
