export interface IPedido {
  id?:number,
  descricaoProduto?: string,
  fornecedor?: string,
  quantidade?: number | string,
  unidadeMedida?: string,
  isEditable?: boolean;
  isDeletable?: boolean;
  isViewItem?: boolean;
  isVideoTest?: boolean;
  isActivatable?: boolean;
  isDraggable?: boolean;
  isSelectable?: boolean;
  showStatus?: boolean;
  enableAgenda?: boolean;
}