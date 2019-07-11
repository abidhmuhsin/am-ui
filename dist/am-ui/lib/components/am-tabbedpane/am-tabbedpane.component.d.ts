import { OnInit, AfterContentInit, QueryList } from '@angular/core';
export declare class AmTabbedpaneComponent implements OnInit {
    title: string;
    active: boolean;
    constructor();
    ngOnInit(): void;
}
export declare class AmTabbedpanesComponent implements AfterContentInit {
    tabs: QueryList<AmTabbedpaneComponent>;
    ngAfterContentInit(): void;
    selectTab(tab: AmTabbedpaneComponent): void;
}
