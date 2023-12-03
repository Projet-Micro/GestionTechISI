import { Component } from '@angular/core';
import {ProjectorInfo} from "../../../shared/models/projector-info";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-update-projector-form',
  templateUrl: './update-projector-form.component.html',
  styleUrls: ['./update-projector-form.component.scss']
})
export class UpdateProjectorFormComponent {

  projector: ProjectorInfo = {
  };
  constructor(
      public ref: DynamicDialogRef,
      public config: DynamicDialogConfig
  ) {}

  updateProjector() {
    this.projector.status = 0;
    this.ref.close(this.projector);
  }

}
