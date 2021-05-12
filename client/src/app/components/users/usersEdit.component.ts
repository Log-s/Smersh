import { Component } from '@angular/core';
import { GenericEditComponent } from 'src/app/components/generic/form/generic-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Email, Input, Phone, TextInput, Username } from 'src/app/form/Input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRouter } from 'src/app/router/UserRouter';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: '../generic/form/generic-form.component.html',
  styleUrls: [],
})
export class UsersEditComponent extends GenericEditComponent {
  public singularResource = 'user';
  public routerHelper = UserRouter;
  public inputs: Input[] = [
    new Username(),
    new Email(),
    new Phone(),
    new TextInput({
      name: 'city',
      label: 'City',
      Placeholder: 'Bikini bottom',
    }),
    new TextInput({
      name: 'trigram',
      label: 'Trigram',
      Placeholder: 'Bikini bottom',
    }),
  ];

  constructor(
    protected service: UsersService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected snackBar: MatSnackBar
  ) {
    super(service, router, route, snackBar);
  }
}
