import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
    <h2 style="margin-top: 90px;">Nous contacter</h2>

    <p>N'hésitez pas à nous contacter si vous avez des questions ou des commentaires sur notre site ou sur nos services.</p>

    <form>
        <div class="row">
            <div class="col s8 offset-s2">
                <div class="card-panel">
                  <div class="input-field">
                    <input id="nom" type="text" class="validate">
                    <label for="nom">Nom</label>
                  </div>
                  <div class="input-field">
                    <input id="email" type="email" class="validate">
                    <label for="email">E-mail</label>
                  </div>
                  <div class="input-field">
                    <textarea id="message" class="materialize-textarea"></textarea>
                    <label for="message">Message</label>
                  </div>
                  <button class="btn waves-effect waves-light blue" type="submit" name="action">
                    <i class="material-icons center">Envoyer</i>
                  </button>
                </div>
            </div>
        </div>
    </form> 

    <p>Ou vous pouvez nous contacter directement par e-mail à l'adresse suivante: <i class="material-icons center">mbow@isidk.sn</i>.</p>
  </div>
  `,
  styles: [
  ]
})
export class ContactComponent { }
