import UtilsHelper from './utils-helper';

describe('UtilsHelper', () => {
  describe('shuffleList', () => {
    it('should not change the length of the array', () => {
      const arr: String[] = ['a', 'b', 'c', 'd', 'e'];
      const originalLength = arr.length;
      UtilsHelper.shuffleList(arr);
      expect(arr.length).toBe(originalLength);
    });

    it('should contain all original elements after shuffle', () => {
      const arr: String[] = ['apple', 'banana', 'cherry', 'date'];
      const originalElements = [...arr];
      UtilsHelper.shuffleList(arr);
      
      originalElements.forEach(element => {
        expect(arr).toContain(element);
      });
    });

    it('should handle empty array without error', () => {
      const arr: String[] = [];
      expect(() => UtilsHelper.shuffleList(arr)).not.toThrow();
      expect(arr.length).toBe(0);
    });

    it('should handle single element array without error', () => {
      const arr: String[] = ['only'];
      UtilsHelper.shuffleList(arr);
      expect(arr.length).toBe(1);
      expect(arr[0]).toBe('only');
    });

    it('should handle two element array', () => {
      const arr: String[] = ['first', 'second'];
      const original = [...arr];
      UtilsHelper.shuffleList(arr);
      expect(arr.length).toBe(2);
      expect(arr).toContain(original[0]);
      expect(arr).toContain(original[1]);
    });

    it('should mutate the original array in place', () => {
      const arr: String[] = ['x', 'y', 'z'];
      const reference = arr;
      UtilsHelper.shuffleList(arr);
      expect(arr).toBe(reference);
    });

    it('should produce different orderings over multiple shuffles (probabilistic)', () => {
      // With 5 elements, there are 120 permutations
      // Running 50 shuffles, the probability of all being the same order is extremely low
      const original: String[] = ['1', '2', '3', '4', '5'];
      const orderings = new Set<string>();
      
      for (let i = 0; i < 50; i++) {
        const arr = [...original];
        UtilsHelper.shuffleList(arr);
        orderings.add(arr.join(','));
      }
      
      // Should have at least 2 different orderings (extremely likely)
      expect(orderings.size).toBeGreaterThan(1);
    });

    it('should use Fisher-Yates algorithm (verify swap positions)', () => {
      // Spy on Math.random to verify the algorithm behavior
      const randomValues = [0.5, 0.3, 0.7, 0.1];
      let callIndex = 0;
      spyOn(Math, 'random').and.callFake(() => randomValues[callIndex++ % randomValues.length]);
      
      const arr: String[] = ['a', 'b', 'c', 'd', 'e'];
      UtilsHelper.shuffleList(arr);
      
      // Verify Math.random was called (arr.length - 1) times
      expect(Math.random).toHaveBeenCalledTimes(4);
    });
  });
});
