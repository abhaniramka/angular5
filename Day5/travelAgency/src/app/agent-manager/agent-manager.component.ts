import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AgentApiService } from '../agent-api.service';
import { Agent } from '../agent';
import { ComponentAdderService } from '../component-adder.service';
import { AgentReviewComponent } from '../agent-review/agent-review.component';

@Component({
  selector: 'app-agent-manager',
  templateUrl: './agent-manager.component.html',
  styleUrls: ['./agent-manager.component.css']
})
export class AgentManagerComponent implements OnInit {

  agentList: Agent[];
  agenttext: any;
  qryString: '';
  qryName: '';
  qryLocation: '';
  qryContact: number;
  reviews: any;
  id: '';
  name: '';
  location: '';
  contact: '';
  add: any;
  cancel = false;

  @ViewChild("placeholder", { read: ViewContainerRef }) viewRef: ViewContainerRef;
  agent: any;
  response: any;
  frm: any;
  constructor(private service: AgentApiService, private adderService: ComponentAdderService) { }

  ngOnInit() {
    this.getData();
    this.add = "Add";
  }

  getData() {
    this.service.findAllAgents().subscribe(data => this.agentList = data);
  }

  find() {
    console.log(this.agenttext);
    this.service.findagentbyId(this.agenttext).subscribe(data => this.agentList = data);
  }

  showDetails(name) {
    this.adderService.setViewContainer(this.viewRef);
    this.adderService.addComponent(AgentReviewComponent, name);
  }

  delete(id) {
    this.service.removeAgentbyId(id).subscribe(resp => this.getData());
  }

  edit(agent) {
    this.id = agent.id;
    this.name = agent.name;
    this.location = agent.location;
    this.contact = agent.contact;
    this.add = "Update";
    this.cancel = true;
  }

  reset() {
    this.id = '';
    this.name = '';
    this.location = '';
    this.contact = '';
    this.add = "Add";
    this.cancel = false;
  }

  submit(frmData) {
    this.agent = frmData;
    if (this.add === "Add") {
      this.service.addAgent(this.agent).subscribe(resp => {
        console.log(resp);
        this.agentList.push(this.agent);
      });
    } else {
      this.service.editAgent(this.agent).subscribe(resp => {
        console.log(resp);
        this.getData();
      });
    }
  }

}
