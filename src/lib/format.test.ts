import { describe, expect, it } from 'vitest';
import { formatDuration, formatNumber, formatWeightKg, initials } from './format';

describe('format utilities', () => {
  it('formats durations for minutes and seconds', () => {
    expect(formatDuration(90_000)).toBe('1m 30s');
  });

  it('formats durations with hours', () => {
    expect(formatDuration(3_660_000)).toBe('1h 1m');
  });

  it('formats numbers and weight labels', () => {
    expect(formatNumber(12345)).toBe('12,345');
    expect(formatWeightKg(52.26)).toBe('52.3 kg');
  });

  it('creates initials from first two words', () => {
    expect(initials('Workout Bro')).toBe('WB');
    expect(initials('  single   ')).toBe('S');
  });
});
