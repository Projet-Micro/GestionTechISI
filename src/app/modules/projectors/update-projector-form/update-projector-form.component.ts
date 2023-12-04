import {Component, OnInit} from '@angular/core';
import {ProjectorInfo} from "../../../shared/models/projector-info";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-update-projector-form',
  templateUrl: './update-projector-form.component.html',
  styleUrls: ['./update-projector-form.component.scss']
})
export class UpdateProjectorFormComponent implements OnInit{

  projector: ProjectorInfo = {
  };
  isOutOfService: boolean = false;
  constructor(
      public ref: DynamicDialogRef,
      public config: DynamicDialogConfig
  ) {}

  updateProjector() {
    this.projector.status = this.isOutOfService ? 2 : this.projector.status ;
    this.ref.close(this.projector);
  }

  ngOnInit(): void {
    this.projector = this.config.data
  }

}
