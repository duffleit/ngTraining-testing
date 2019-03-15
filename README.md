# Testing

This exercise shows you how test crate propper tests for your angular application.

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5._

## Tasks

1. Update the `karma.config.js` of the project to run the tests with `Headless Chrome` to set the browsers config-property to `['ChromeHeadless']`. In addition, use the `krama-spec-reporter` instead of the default `progress`-reporter and configure it:

```
    plugins: [
      ...
      require('karma-spec-reporter'),
      ...
    ],
    specReporter: {
      suppressSkipped: true,
      showSpecTiming: true,
      failFast: false
    },
    ...
    reporters: ['spec', 'kjhtml'],
```

2. Add a `test:repl` and a `test:coverage` to your project, which runs the tests in watch mode or generates a coverage-report.

```
scripts: {
    "test:repl": "ng test --watch",
    "test:coverage": "ng test --code-coverage",
}
```

3. Implement the empty specs in `0_pipe`.

4. Implement the empty specs in `1_service`.

5. Implement the empty specs in `2_simple-component`.

6. Implement the empty specs in `3_complex-component`.

7. Install `jasmine-marbles` and imlement the missing specs in `4_rxjs_marble`.

8. Use the marble syntax to delay the mocked HTTP-request in `_complex-component`.

9. Finalize the missing specs in `e2e`.
