import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {ProjectorInfo} from "../../shared/models/projector-info";
import {ConfirmationService, MessageService} from "primeng/api";
import {TokenStorageService} from "../../shared/services/authentication/token-storage.service";
import {DialogService} from "primeng/dynamicdialog";
import {ProjectorsService} from "../../shared/services/projectors/projectors.service";
import {AddProjectorFormComponent} from "./add-projector-form/add-projector-form.component";

@Component({
  selector: 'app-projectors',
  templateUrl: './projectors.component.html',
  styleUrls: ['./projectors.component.scss']
})
export class ProjectorsComponent implements OnInit{

  statuses: { label:string; value:string }[] = [];

  tableOptions = [
    {label: 'Add Projector', icon: 'pi pi-fw pi-users-plus', command: () => { this.add(); } },
    {label: 'Delete Selected', icon: 'pi pi-fw pi-users-plus', command: () => { this.deleteAll(); } },
  ];

  loading: boolean = true;

  @ViewChild('dt') table: Table | undefined;

  Projectors: ProjectorInfo[] =[];

  selectedProjectors? : ProjectorInfo[];

  constructor(
    private projectorsService: ProjectorsService,
    private tokenStorageService: TokenStorageService,
    public confirmationService:ConfirmationService ,
    public messageService: MessageService ,
    public dialogService: DialogService) {}

  ngOnInit() {
    this.selectedProjectors = this.Projectors;
    this.getProjectors();
    this.statuses = [
      { label: 'Unavailable', value: '1' },
      { label: 'Available', value: '0' },
      { label: 'Out of Service', value: '2' },
    ];
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onRowSelect() {
    //console.log(this.selectedProjectors)
  }

  private getProjectors() {
    this.projectorsService.getAllProjectors(false).subscribe({
      next: (data: ProjectorInfo[]) => {
        this.loading = false;
        this.Projectors = data;
        //console.log(this.Projectorss);
      },
      error: (e: { error: string }) =>
        this.messageService.add({
          severity: 'error',
          summary: 'Fetching Projectors Failed!',
          detail: e.error,
        }),
    });
  }

  search(eventValue: Event) {
    this.table?.filterGlobal(this.getValue(eventValue), 'contains');
  }

  getItems(Projectors: ProjectorInfo) {
    return [
      {
        label: 'Update Projector',
        icon: 'pi pi-users-edit',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-Projectors-minus',
        command: () => {
          if (Projectors.id) this.delete(Projectors.id, true);
        },
      },
    ];
  }

  //CRUDS
  private delete(id: number, confirm: boolean) {
    if (confirm)
      this.confirmationService.confirm({
        key: 'confirmDialog',
        header: 'Delete Confirmation',
        message:
          'Projectors n°' +
          id +
          ' will be deleted. Are you sure that you want to perform this action?',
        accept: () => {
          this.projectorsService.deleteProjector(id).subscribe({
            next: data => {
              this.messageService.add({
                severity: 'success',
                summary: 'Projectors Deleted!',
                detail: data.message,
              });
              this.Projectors = this.Projectors.filter(Projectors => {
                return Projectors.id !== id;
              });
            },
            error: err => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error!',
                detail: err.error.message,
              });
            },
          });
        },
      });
    else
      this.projectorsService.deleteProjector(id).subscribe({
        next: data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Projectors Deleted',
            detail: data.message,
          });
          this.Projectors = this.Projectors.filter(Projectors => {
            return Projectors.id !== id;
          });
        },
        error: err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error.message,
          });
        },
      });
  }
  private add() {
    const ref = this.dialogService.open(AddProjectorFormComponent, {
      header: 'Add Projectors',
      width: '50%',
    });
    ref.onClose.subscribe((projectorInfo: ProjectorInfo) => {
      if (projectorInfo) {
        this.projectorsService.createProjector(projectorInfo).subscribe({
          next: data => {
            this.messageService.add({
              severity: 'success',
              summary: 'Projectors Added',
              detail: data.message,
            });

            this.getProjectors();
          },
          error: err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error.message,
            });
          },
        });
      }
    });
  }


  private update() {
      const ref = this.dialogService.open(AddProjectorFormComponent, {
          header: 'Update Projector',
          width: '50%',
      });
    ref.onClose.subscribe((projectorInfo: ProjectorInfo)=>{
        this.projectorsService.updateProjector(projectorInfo).subscribe({
            next: data => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Projector Updated!',
                    detail: data.message,
                });
                this.getProjectors();
            },
            error: err => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Update Error!',
                    detail: err.error.message,
                });
            },
        });
    });
  }

  private deleteAll() {
    this.confirmationService.confirm({
      key: 'confirmDialog',
      header: 'Delete Confirmation',
      message:
        this.selectedProjectors?.length +
        ' Projectors will be deleted. Are you sure that you want to perform this action?',
      accept: () => {
        this.selectedProjectors?.forEach(Projectors => {
          if (Projectors.id != null) {
            this.delete(Projectors.id, false);
          }
        });
      },
    });
  }

    getStatus(status:number) {
        switch (status) {
          case 0:
            return 'Available';
          case 1:
            return 'Unavailable';
          default:
            return 'Out Of Service';
        }
    }

    getStatusCss(status : number) {
    if (status == 1 || status == 0)
        return status;
    else return 2
    }
}
