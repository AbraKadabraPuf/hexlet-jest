import reverse from '../src/index.js';

test('reverse', () => {
	let str = 'hello';
  expect(reverse('str')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

/*
//ЗАПУСК ТЕСТА С ВЕРНЫМ ОТВЕТОМ:

NODE_OPTIONS=--experimental-vm-modules npx jest
(node:71563) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  ./index.test.js
  ✓ reverse (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.143 s, estimated 1 s
Ran all test suites.


***********************************************************************************************
//ЗАПУСК ТЕСТА С НЕВЕРНЫМ ОТВЕТОМ:

ODE_OPTIONS=--experimental-vm-modules npx jest

(node:71008) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  ./index.test.js // FAIL = ТЕСТ ПОЛУЧАЕТ ОШИБКУ
  ✕ reverse (3 ms) // ВРЕМЯ ВЫПОЛНЕНИЯ ТЕСТА(0,003 СЕКУНД)

  ● reverse // ИМЯ ФУНКЦИИ КОТОРАЯ ЗАПУСКАЕТСЯ

    expect(received).toEqual(expected) // deep equality

    Expected: "1"	// ОЖИДАЛОСЬ
    Received: ""	// ПОЛУЧЕНО

		// ДАЛЕЕ ПОКАЗЫВАЕТ ГДЕ ПОЛУЧЕНА ОШИБКА

      3 | test('reverse', () => {
      4 |   expect(reverse('hello')).toEqual('olleh');
    > 5 |   expect(reverse('')).toEqual('1');
        |                       ^
      6 | });
      7 |

      at Object.toEqual (_tests_/index.test.js:5:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.155 s, estimated 1 s
Ran all test suites.

*/