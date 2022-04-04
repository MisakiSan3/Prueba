import { Injectable } from '@angular/core';

export interface IEntity {
    id?: number;
    
}
export class Entity implements IEntity {
    

    constructor(public id?: number) {
        
    }
    
}
