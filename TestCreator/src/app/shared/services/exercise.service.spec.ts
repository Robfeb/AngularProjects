import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExerciseService } from './exercise.service';
import { Test } from '../models/test';
import { QuestionType } from '../models/questionType';

describe('ExerciseService', () => {
  let service: ExerciseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExerciseService]
    });
    service = TestBed.inject(ExerciseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchAvailableExercises', () => {
    it('should fetch exercises from the correct URL', async () => {
      const mockExercises: Test[] = [
        {
          Id: 1,
          Title: 'Test Exercise',
          Question: 'What is 2+2?',
          Solution: '4'
        }
      ];

      const promise = service.fetchAvailableExercises();

      const req = httpMock.expectOne('../assets/exercises.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockExercises);

      const result = await promise;
      expect(result).toEqual(mockExercises);
    });

    it('should return array of Test objects', async () => {
      const mockExercises: Test[] = [
        {
          Id: 1,
          Title: 'Exercise 1',
          Question: 'Question 1',
          Solution: 'Answer 1',
          SolutionList: ['a', 'b', 'c']
        },
        {
          Id: 2,
          Title: 'Exercise 2',
          Question: 'Question 2',
          Solution: 'Answer 2',
          Image: 'test.png'
        }
      ];

      const promise = service.fetchAvailableExercises();

      const req = httpMock.expectOne('../assets/exercises.json');
      req.flush(mockExercises);

      const result = await promise;
      expect(result.length).toBe(2);
      expect(result[0].Id).toBe(1);
      expect(result[1].Image).toBe('test.png');
    });

    it('should handle empty response', async () => {
      const promise = service.fetchAvailableExercises();

      const req = httpMock.expectOne('../assets/exercises.json');
      req.flush([]);

      const result = await promise;
      expect(result).toEqual([]);
      expect(result.length).toBe(0);
    });

    it('should return exercise with all optional fields', async () => {
      const mockExercise: Test[] = [{
        Id: 1,
        Title: 'Complete Exercise',
        Question: 'Full question?',
        Solution: 'Full answer',
        SolutionList: ['option1', 'option2'],
        Image: 'image.png',
        Icon: 'icon.svg',
        Type: QuestionType.Radio
      }];

      const promise = service.fetchAvailableExercises();

      const req = httpMock.expectOne('../assets/exercises.json');
      req.flush(mockExercise);

      const result = await promise;
      expect(result[0].SolutionList).toEqual(['option1', 'option2']);
      expect(result[0].Image).toBe('image.png');
      expect(result[0].Icon).toBe('icon.svg');
      expect(result[0].Type).toBe(QuestionType.Radio);
    });

    it('should handle HTTP error', async () => {
      const promise = service.fetchAvailableExercises();

      const req = httpMock.expectOne('../assets/exercises.json');
      req.flush('Not Found', { status: 404, statusText: 'Not Found' });

      try {
        await promise;
        fail('Expected promise to reject');
      } catch (error: any) {
        expect(error.status).toBe(404);
      }
    });
  });
});
