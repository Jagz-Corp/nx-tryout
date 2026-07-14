describe('sample entrypoint', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it('runs the sample workflow without logging the runner return value', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

    await import('../src');

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Common Runner 5');
  });
});
