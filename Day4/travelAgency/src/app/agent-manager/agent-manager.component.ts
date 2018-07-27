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

  @ViewChild("placeholder", {read: ViewContainerRef}) viewRef: ViewContainerRef;
  agent: any;
  response: any;
  constructor(private service: AgentApiService, private adderService: ComponentAdderService) { }

  ngOnInit() {
    this.getData();
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

  submit(frmData) {
    this.agent = frmData;
    this.service.addAgent(this.agent).subscribe(resp => {console.log(resp);
      this.agentList.push(this.agent);
    });
  }

}
