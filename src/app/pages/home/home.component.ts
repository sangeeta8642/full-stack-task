import { Component } from "@angular/core";
import { card_colours } from "../../utils/constants";
import { countInterface } from "../../utils/types";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    cards = card_colours;

    counts: countInterface[] = [
        {
            title: 'total boards',
            count: 75,
            link: '/boards/dashboard'
        },
        {
            title: 'total sprints',
            count: 40,
            link: '/sprints/dashboard'
        },
        {
            title: 'total stories',
            count: 50,
            link: '/stories/dashboard'
        },
        {
            title: 'total epics',
            count: 8,
            link: '/stories/dashboard'
        },
        {
            title: 'total releases',
            count: 12,
            link: '/releases/dashboard'
        },
    ]
}