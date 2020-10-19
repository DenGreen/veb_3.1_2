import { ErrorRepository } from '../errorRepository'

test('ErrorRepository должен выдовать строку "Описание ошибки 5"', () => {
    const expected = 'Описание ошибки 5 ';
    const err = new ErrorRepository();
    const received = err.translate(5);

    expect(received).toEqual(expected);
})

test('ErrorRepository должен выдовать строку "Описание ошибки 4"', () => {
    const expected = 'Описание ошибки 4 ';
    const err = new ErrorRepository();
    const received = err.translate(4);

    expect(received).toEqual(expected);
})

test('ErrorRepository должен выдовать строку "Описание ошибки 3"', () => {
    const expected = 'Описание ошибки 3 ';
    const err = new ErrorRepository();
    const received = err.translate(3);

    expect(received).toEqual(expected);
})


test('ErrorRepository должен выдовать строку "Unknown error", если ошибка не найдена', () => {
    const expected = 'Unknown error';
    const err = new ErrorRepository();
    const received = err.translate(6);

    expect(received).toEqual(expected);
})

test('ErrorRepository должен выдовать строку "Unknown error", если ошибка не найдена', () => {
    const expected = 'Unknown error';
    const err = new ErrorRepository();
    const received = err.translate(-1);

    expect(received).toEqual(expected);
})

test('ErrorRepository должен выдовать строку "Unknown error", если ошибка не найдена', () => {
    const expected = 'Unknown error';
    const err = new ErrorRepository();
    const received = err.translate('qe');

    expect(received).toEqual(expected);
})