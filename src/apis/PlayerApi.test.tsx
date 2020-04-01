import mockAxios from 'jest-mock-axios';
import { PlayerApiImpl } from "./PlayerApi";

describe('PlayerApi', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should make a player api', () => {
    const baseUrl = 'http://www.slothbears.com/api'
    const subject = new PlayerApiImpl(baseUrl);

    subject.getPlayers();

    expect(mockAxios.get).toHaveBeenCalledWith(baseUrl + '/player/all');
  });
});