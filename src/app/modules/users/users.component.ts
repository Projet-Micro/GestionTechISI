import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { UserInfo } from '../../shared/models/user-info';
import { Table } from 'primeng/table';
import { TokenStorageService } from '../../shared/services/authentication/token-storage.service';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  statuses: { label:string; value:string }[] = [];

  tableOptions = [
    {
      label: 'Add user',
      icon: 'pi pi-fw pi-user-plus',
      command: () => {
        this.add();
      },
    },
    {
      label: 'Delete Selected',
      icon: 'pi pi-fw pi-trash',
      command: () => {
        this.deleteAll();
      },
    },
    {
      label: 'Grant User Access',
      icon: 'pi pi-fw pi-check',
      command: () => {
        this.makeUsersAll();
      },
    },
    {
      label: 'Revoke User Access',
      icon: 'pi pi-fw pi-times',
      command: () => {
        this.revokeUserAccess();
      },
    },
  ];

  loading: boolean = true;

  visible: boolean = false;

  @ViewChild('dt') table: Table | undefined;

  Users: UserInfo[] = [
    { id: -1, FirstName: '', LastName: '', email: '', NIC: 0 },
  ];

  selectedUsers?: UserInfo[];

  constructor(
    private usersService: UsersService,
    private tokenStorageService: TokenStorageService,
    public messageService: MessageService,
    public confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.selectedUsers = this.Users;
    this.getUsers();
    this.statuses = [
      { label: 'Admin', value: '1' },
      { label: 'User', value: '0' },
      { label: 'No Access', value: 'null' },
    ];
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onRowSelect() {
    //console.log(this.selectedUsers)
  }
  private getUsers() {
    this.usersService.getAllUsers(false).subscribe({
      next: (data: UserInfo[]) => {
        data.forEach(user => {
          const newUser: UserInfo = user;
          switch (user.status) {
            case null:
              newUser.admin = 'null';
              break;
            case true:
              newUser.admin = '1';
              break;
            case false:
              newUser.admin = '0';
          }
        });
        this.loading = false;
        this.Users = data;
        //console.log(this.Users);
      },
      error: (e: { error: string }) =>
        this.messageService.add({
          severity: 'error',
          summary: 'Fetching Users Failed!',
          detail: e.error,
        }),
    });
  }

  search(eventValue: Event) {
    this.table?.filterGlobal(this.getValue(eventValue), 'contains');
  }

  getItems(User: UserInfo) {
    return [
      {
        label: 'Make Admin',
        icon: 'pi pi-user-edit',
        command: () => {
          this.update(User, 'admin');
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus',
        command: () => {
          if (User.id) this.delete(User.id, true);
        },
      },
      {
        label: 'Grant User Access',
        icon: 'pi pi-check',
        command: () => {
          this.update(User, 'user');
        },
      },
      {
        label: 'Revoke User Access',
        icon: 'pi pi-times',
        command: () => {
          this.update(User, 'null');
        },
      },
    ];
  }

  getStatus(isAdmin: string) {
    if (isAdmin == '1') return 'Admin';
    if (isAdmin == '0') return 'User';
    return 'No Access';
  }

  //CRUDS
  private delete(id: number, confirm: boolean) {
    if (confirm)
      this.confirmationService.confirm({
        key: 'confirmDialog',
        header: 'Delete Confirmation',
        message:
          'user n°' +
          id +
          ' will be deleted. Are you sure that you want to perform this action?',
        accept: () => {
          this.usersService.deleteUser(id).subscribe({
            next: data => {
              this.messageService.add({
                severity: 'success',
                summary: 'User Deleted!',
                detail: data.message,
              });
              this.Users = this.Users.filter(user => {
                return user.id !== id;
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
      this.usersService.deleteUser(id).subscribe({
        next: data => {
          this.messageService.add({
            severity: 'success',
            summary: 'User Deleted',
            detail: data.message,
          });
          this.Users = this.Users.filter(user => {
            return user.id !== id;
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
    const ref = this.dialogService.open(AddUserFormComponent, {
      header: 'Add User',
      width: '50%',
    });
    ref.onClose.subscribe((userInfo: UserInfo) => {
      if (userInfo) {
        this.usersService.createUser(userInfo).subscribe({
          next: data => {
            this.messageService.add({
              severity: 'success',
              summary: 'User Added',
              detail: data.message,
            });

            this.getUsers();
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

  private update(user: UserInfo, field: string) {
    switch (field) {
      case 'null':
        user.admin = field;
        user.status = null;
        break;
      case 'user':
        user.admin = field;
        user.status = false;
        break;
      case 'admin':
        user.admin = field;
        user.status = true;
        break;
    }

    this.usersService.updateUser(user).subscribe({
      next: data => {
        console.log("I'm in ;)");
        this.messageService.add({
          severity: 'success',
          summary: 'User Updated!',
          styleClass: 'test',
          detail: data.message,
          life: 5000,
        });
        console.log(this.messageService);
        this.getUsers();
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Update Error!',
          styleClass: 'test',
          detail: err.error.message,
        });
      },
    });
  }

  private deleteAll() {
    this.confirmationService.confirm({
      key: 'confirmDialog',
      header: 'Delete Confirmation',
      message:
        this.selectedUsers?.length +
        ' users will be deleted. Are you sure that you want to perform this action?',
      accept: () => {
        this.selectedUsers?.forEach(user => {
          if (user.id != null) {
            this.delete(user.id, false);
          }
        });
      },
    });
  }

  private makeUsersAll() {
    this.confirmationService.confirm({
      key: 'confirmDialog',
      header: 'Make Admin Confirmation',
      message:
        this.selectedUsers!.length -
        1 +
        ' users will be granted access to the app. Are you sure that you want to perform this action?',
      accept: () => {
        this.selectedUsers?.forEach(user => {
          if (this.tokenStorageService.getUser().id == user.id)
            this.messageService.add({
              severity: 'warn',
              summary: 'Illegal Operation',
              detail: "You can't revoke admin access from yourself!",
            });
          else if (
            (user.status == true || user.status == null) &&
            user.id != null
          ) {
            this.update(user, 'user');
          }
        });
      },
    });
  }

  private revokeUserAccess() {
    this.confirmationService.confirm({
      key: 'confirmDialog',
      header: 'Revoke Users Confirmation',
      message:
        this.selectedUsers!.length -
        1 +
        ' users will be refused access to the app. Are you sure that you want to perform this action?',
      accept: () => {
        this.selectedUsers?.forEach(user => {
          if (this.tokenStorageService.getUser().id == user.id)
            this.messageService.add({
              severity: 'warn',
              summary: 'Illegal Operation',
              detail: "You can't revoke your own access!",
            });
          else if (
            (user.status == true || user.status == false) &&
            user.id != null
          ) {
            this.update(user, 'null');
          }
        });
      },
    });
  }
}
