import isPhoneNumber from './phone.js';

describe('Validate a German phone number', () => {
  describe('It is a German phone number when', () => {
    it('it matches the following regexp', () => {
      const result = isPhoneNumber('+491739341284');
      expect(result).toMatch(new RegExp(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/, 'g'));
    });
  });
});

/* 
+491739341284
+49 1739341284
(+49) 1739341284
+49 17 39 34 12 84
+49 (1739) 34 12 84
+(49) (1739) 34 12 84
+49 (1739) 34-12-84
*/
