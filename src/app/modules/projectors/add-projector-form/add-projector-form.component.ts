import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ProjectorInfo} from "../../../shared/models/projector-info";

@Component({
  selector: 'app-add-projector-form',
  templateUrl: './add-projector-form.component.html',
  styleUrls: ['./add-projector-form.component.scss']
})
export class AddProjectorFormComponent {

  projector: ProjectorInfo = { id:-1,
  };
  constructor(
      public ref: DynamicDialogRef,
      public config: DynamicDialogConfig
  ) {}

  addProjector() {
    this.projector.status = 0;
    this.ref.close(this.projector);
  }
}
