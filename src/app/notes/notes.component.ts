import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],

})
export class NotesComponent implements OnInit {

  @ViewChild('notetext', { static: true }) notetextElement: ElementRef;
  mynotetext: string = "";

  noteContent = [{ noteNum: 1, noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
      ' dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
      'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }, { noteNum: 2, noteText:
      'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ' +
      'aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.' +
      ' Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni ' +
      'dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit,' +
      ' amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam' +
      ' aliquam quaerat voluptatem.' },
    { noteNum: 3, noteText: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,' +
        ' nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit' +
        ' esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?' +
        ' At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti ' +
        'atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique' +
        ' sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.' }, { noteNum: 4, noteText:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi' +
        ' optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est,' +
        ' omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ' +
        'eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a ' +
        'sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus ' +
        'asperiores repellat.' }]

  noteNumbers = []
  noteTexts = []


  showContent(event, noteContent){

    this.noteNumbers = [];
    this.noteTexts = []
    var temp = event.currentTarget.innerText;
    temp = temp.replace(/\D/g,'');
    this.noteNumbers.push(temp);
    const result = noteContent.map(function(item) {
      return item.noteText;
    });

    for(let [index, val] of result.entries()) {
      console.log(index, Number(temp))
      if(index+1 == Number(temp)) {
        this.noteTexts.push(result[index]);
        continue
        console.log(this.noteTexts)
      }
    }

  }



  addNew() {
    this.mynotetext = this.notetextElement.nativeElement.value;
    this.noteContent.push({ noteNum: this.noteContent.length + 1, noteText: this.mynotetext })

  }


  constructor(notetextElement: ElementRef) {
    this.notetextElement = notetextElement;

  }

  ngOnInit(): void {
  }

}

