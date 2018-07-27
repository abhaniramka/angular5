import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';
import { AgentReviewComponent } from './agent-review/agent-review.component';
import { AgentApiService } from './agent-api.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {
  viewContainer: ViewContainerRef;
  factory: ComponentFactory<{}>;
  reviews: {};

  constructor(private factResolver: ComponentFactoryResolver, private agentService: AgentApiService ) { }

  setViewContainer(viewContainer: ViewContainerRef) {
    this.viewContainer = viewContainer;
  }

  addComponent(compToAdd: any, name: string) {
    this.factory = this.factResolver.resolveComponentFactory(compToAdd);
    const component = this.factory.create(this.viewContainer.parentInjector);
    this.agentService.findReviews(name).subscribe(
      data => (<AgentReviewComponent>component.instance).reviews = data  );
    this.viewContainer.insert(component.hostView);
  }
}
