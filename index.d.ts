/// <reference types="Cypress" />

type WaitUntilLog = Pick<Cypress.LogConfig, 'name' | 'message' | 'consoleProps'>

type ErrorMsgCallback<Subject = any> = (
  result: Subject,
  options: WaitUntilOptions<Subject>
) => string

interface WaitUntilOptions<Subject = any> {
  timeout?: number
  interval?: number
  errorMsg?: string | ErrorMsgCallback<Subject>
  description?: string
  customMessage?: string
  verbose?: boolean
  customCheckMessage?: string
  logger?: (logOptions: WaitUntilLog) => any
  log?: boolean
}

declare namespace Cypress {
  interface Chainable<Subject = any> {
    waitUntil<Subject>(
      checkFunction: () => Subject | Chainable<Subject> | Promise<Subject>,
      options?: WaitUntilOptions<Subject>
    ): Chainable<Subject>
  }
}
