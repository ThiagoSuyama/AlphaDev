import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
export interface Actions < T > {
  type?: string;
  key: string;
  label: string;
  value: T;
}

export class DataTableItem {
  [key: string]: any;
  isEditable = false;
  isDeletable = false;
  isViewItem = false;
  isActivatable = true;
  isDraggable = false;
  isSelectable = false;
  showStatus = false;
  datePicker = false;
  input = false;
  isConfirmItem = false;
  constructor(data: any) {
    // tslint:disable-next-line:forin
    for (const i in data) {
      this[i] = data[i];
    }
  }
  static default(data: object): DataTableItem {
    return new DataTableItem(data);
  }
  static collection(data: object[]): DataTableItem[] {
    const newData: DataTableItem[] = [];
    // tslint:disable-next-line:forin
    for (const i in data) {
      newData[i] = DataTableItem.default(data[i]);
    }
    return newData;
  }
}

export class DataTableConfig {
  isEditable = true;
  isDeletable = false;
  isViewItem = true;
  isActivatable = true;
  isDraggable = false;
  isSelectable = false;
  showStatus = false;
  datePicker = false;
  input = false;
  isConfirmItem = false;
  constructor(public headers: {
    var: string,
    label: string,
    type?: string
  }[],
    public searchable?: string | string[]) {
  }
  static default(headers: { var: string, label: string, type?: string }[], searchable?: string | string[]) {
    return new DataTableConfig(headers, searchable);
  }

}


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{
  @Output() speachItem = new EventEmitter();
  @Output() selectableItem = new EventEmitter();
  @Output() viewItem = new EventEmitter();
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  @Output() newItem = new EventEmitter();
  @Output() activateItem = new EventEmitter();
  @Output() moveUp = new EventEmitter();
  @Output() moveDown = new EventEmitter();
  @Output() confirmarItem = new EventEmitter();
  @Input() filters: Actions<any>[] = [];
  @Input() config: DataTableConfig;
  @Input() data: DataTableItem[];
  @Input() perPage = 10;
  @Input() page = 1;
  // @Input() name: string;
  @Input() btnName = 'Adicionar';
  @Output() perPageChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  selectAll: boolean;
  searchText: string;
  dataValidade : FormArray
  quantidadeRecebida : FormArray
  constructor(private fb:FormBuilder) { 
    this.data = [];
    this.dataValidade = this.fb.array([]),
    this.quantidadeRecebida= this.fb.array([])
  }
  ngOnInit(): void {

  }

  get items_filtered() {
    if (!this.data) {
      return [];
    }
    return this.data.filter(item => {
      if (!this.searchText || !this.config.searchable) {
        return true;
      }
      if (typeof this.config.searchable === 'string') {
        return (item[this.config.searchable] as string).indexOf(this.searchText) >= 0;
      }
      return this.config.searchable.filter((searchItem: string | number) => {
        return (item[searchItem] as string).indexOf(this.searchText) >= 0;
      });
    });
  }


  filter(data : any) {
    this.perPage = data.perPage;
    this.perPageChange.emit(data.perPage);
  }

  confirmarItemEvent(item:any){
    this.confirmarItem.emit(item)
  }
}
