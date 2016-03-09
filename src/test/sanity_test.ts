describe('universal truths', () => {
  it('should do math', () => {
    expect(1 + 1).toEqual(2);

    expect(5).toBeGreaterThan(4);
  });

  it('should do math', () => {
	  expect(1 * 1).toEqual(1);

	  expect(5).toBeGreaterThan(4);
  });


  xit('should skip this', () => {
    expect(4).toEqual(40);
  });
});
