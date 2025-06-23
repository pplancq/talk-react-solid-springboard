import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
import type { PropsWithChildren } from 'react';

export const NoteMarkdown = ({ children }: PropsWithChildren) => {
  return (
    <Note>
      <MarkdownBlock>{children}</MarkdownBlock>
    </Note>
  );
};
