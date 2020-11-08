import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';

@Injectable()
export class ExerciseService {
    constructor(private http: HttpClient) { }
    async fetchAvailableExercises(): Promise<Test[] | any> {
        return await this.http.get('../assets/exercises.json').toPromise();
    }
}