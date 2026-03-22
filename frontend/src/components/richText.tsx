import type {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import {
  type JSXConvertersFunction,
  RichText,
} from "@payloadcms/richtext-lexical/react";
import RichTextImage from "./richTextImage";
import RichTextUpload from "./richTextUpload";

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => {
    return <RichTextUpload node={node} />;
  },
  blocks: {
    floatImage: ({node}) => {
      return <RichTextImage node={node} />;
    }
  }
});

export const RichTextComp = ({
  data,
}: { data: SerializedEditorState<SerializedLexicalNode> }) => {
  return <RichText converters={jsxConverters} data={data} />;
};