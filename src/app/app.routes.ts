import { Routes } from '@angular/router';
import { AllTaskComponent } from './component/pages/all-task/all-task.component';
import { ImportantTaskComponent } from './component/pages/important-task/important-task.component';
import { CompletedTaskComponent } from './component/pages/completed-task/completed-task.component';

export const routes: Routes = [
    {
        path:"",
        component: AllTaskComponent
    },
    {
        path:"important",
        component: ImportantTaskComponent
    },
    {
        path:"completed",
        component: CompletedTaskComponent
    }
];
