import { describe, it, expect } from 'vitest';
import { formatearfecha } from './utils';
import { determinartiempo } from './utils';

describe('formatear fecha', () => {
  it('formatea correctamente una fecha simple', () => {
    const fecha = new Date(2026, 8, 21, 14, 33);
    const resultado = formatearfecha(fecha);
    expect(resultado).toBe('21/09/2026 14:33');
  });
});

describe('calcualr peso', () => {
  it('calcualr peso en nose que basura', () => {
    let peso = determinartiempo(61);
    expect(peso).toBe('(alta)');
  });
});
