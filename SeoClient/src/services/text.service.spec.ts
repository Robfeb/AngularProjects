import { TestBed } from '@angular/core/testing';

import { TextService } from './text.service';

describe('TextService', () => {
  let service: TextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Lorem data', () => {
    it('should have 13 Lorem entries', () => {
      expect(service.Lorem.length).toBe(13);
    });

    it('should have an initially empty postList', () => {
      expect(service.postList.length).toBe(0);
    });
  });

  describe('ShowLoremIpsun', () => {
    it('should populate postList with Lorem entries from init to end', () => {
      service.ShowLoremIpsun(0, 3);
      expect(service.postList.length).toBe(3);
      expect(service.postList[0]).toBe(service.Lorem[0]);
      expect(service.postList[1]).toBe(service.Lorem[1]);
      expect(service.postList[2]).toBe(service.Lorem[2]);
    });

    it('should reset postList on each call', () => {
      service.ShowLoremIpsun(0, 5);
      expect(service.postList.length).toBe(5);
      service.ShowLoremIpsun(0, 2);
      expect(service.postList.length).toBe(2);
    });

    it('should handle middle range of Lorem entries', () => {
      service.ShowLoremIpsun(5, 8);
      expect(service.postList.length).toBe(3);
      expect(service.postList[0]).toBe(service.Lorem[5]);
    });

    it('should return empty array when init equals end', () => {
      service.ShowLoremIpsun(3, 3);
      expect(service.postList.length).toBe(0);
    });
  });

  describe('getPostList', () => {
    it('should return postList populated with Lorem entries', () => {
      const result = service.getPostList(0, 4);
      expect(result.length).toBe(4);
      expect(result).toBe(service.postList);
    });

    it('should return correct entries for given range', () => {
      const result = service.getPostList(2, 5);
      expect(result.length).toBe(3);
      expect(result[0]).toBe(service.Lorem[2]);
      expect(result[1]).toBe(service.Lorem[3]);
      expect(result[2]).toBe(service.Lorem[4]);
    });

    it('should return all entries when range covers entire Lorem array', () => {
      const result = service.getPostList(0, 13);
      expect(result.length).toBe(13);
    });

    it('should update postList on subsequent calls', () => {
      const firstResult = service.getPostList(0, 2);
      expect(firstResult.length).toBe(2);
      const secondResult = service.getPostList(0, 5);
      expect(secondResult.length).toBe(5);
      // postList is reassigned on each call, so values are replaced
      expect(service.postList.length).toBe(5);
    });
  });
});
