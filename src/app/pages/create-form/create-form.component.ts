import { Component } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormElementType } from '@model/form-element-type';
import { FormElementsFactory } from '@services/form-elements-factory';
import { FormStructureMapper } from '@services/form-structure-mapper';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['../../styles/modules/_buttons.less']
})
export class CreateFormComponent {

  isInEditor = true;

  formStructure: FormStructure = {
    columnsNum: 2,
    name: 'Delta Capita Demo Form',
    elements: [
      this.formElementsFactory.createInstance({
        label: 'Name',
        type: FormElementType.SHORT_TEXT
      }),
      this.formElementsFactory.createInstance({
        label: 'Email',
        type: FormElementType.EMAIL
      })
    ]
  };

  constructor(private formElementsFactory: FormElementsFactory,
              private formStructureMapper: FormStructureMapper) {
  }

  onShowFormPreviewClick(newFormStructure: FormStructure): void {
    this.formStructure = this.formStructureMapper.map(newFormStructure);
    this.isInEditor = false;
  }

}
