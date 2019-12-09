export const New = 'NEW';
export const Changed = 'CHANGED';
export const Saved = 'SAVED';

export type ScissorDocumentState = 'NEW' | 'SAVED' | 'CHANGED'

export interface ScissorDocument {
  name: string,
  state: ScissorDocumentState
}
